import React, { useState } from 'react';
import './App.css';

function App() {
  const [number, setNumber] = useState('');
  const [category, setCategory] = useState('');
  const [items, setItems] = useState([]);
  const [challengeStarted, setChallengeStarted] = useState(false);
  const [itemInput, setItemInput] = useState('');

  const startChallenge = (e) => {
    e.preventDefault();
    if (number >= 10 && number <= 150 && category.trim()) {
      setChallengeStarted(true);
    } else {
      alert('Please enter a valid number and category.');
    }
  };

  const handleItemInput = (e) => {
    if (e.key === 'Enter' && itemInput.trim()) {
      setItems([...items, itemInput]);
      setItemInput('');
      if (items.length + 1 >= number) {
        alert('Challenge Completed!');
        axios.post('http://localhost:3000/api/save-challenge', {
        number,
        category,
        items: [...items, itemInput]
      }).then(response => {
        alert('Challenge Completed and Saved!');
      }).catch(error => {
        console.error('There was an error saving the challenge!', error);
      });
      }
    }
  };

  return (
    <div className="App">
      {!challengeStarted ? (
        <form onSubmit={startChallenge}>
          <label>
            Enter a number (10-150):
            <input
              type="number"
              value={number}
              onChange={(e) => setNumber(e.target.value)}
              min="10"
              max="150"
              required
            />
          </label>
          <label>
            Enter a category:
            <input
              type="text"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              required
            />
          </label>
          <button type="submit">Start Challenge</button>
        </form>
      ) : (
        <div>
          <h2>
            Challenge: Name {number} {category}
          </h2>
          <input
            type="text"
            value={itemInput}
            onChange={(e) => setItemInput(e.target.value)}
            onKeyUp={handleItemInput}
            placeholder="Enter item"
          />
          <ul>
            {items.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default App;
