const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

app.use(bodyParser.json());

app.post('/api/save-challenge', (req, res) => {
  const { number, category, items, timeTaken } = req.body;
  // Save the challenge and time taken to the database (implement as needed)
  console.log(`Challenge: ${number} ${category}, Items: ${items}, Time Taken: ${timeTaken}ms`);
  res.send({ message: 'Challenge saved successfully' });
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
