const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

app.use(bodyParser.json());

app.post('/api/save-challenge', (req, res) => {
  const { number, category, items } = req.body;
  // Save the challenge to the database (implement as needed)
  res.send({ message: 'Challenge saved successfully' });
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
