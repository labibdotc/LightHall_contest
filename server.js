const express = require('express');
const dotenv = require('dotenv');
const app = express();
dotenv.config();
let count = 0;

app.get('/count', (req, res) => {
  res.json({ count });
});

app.post('/increment', (req, res) => {
  count += 1;
  res.sendStatus(200);
});

app.get('/api/location', (req, res) => {
  const { ip } = req.query;

  axios.get(`https://api.geoapify.com/v1/ipinfo?ip=${ip}&apiKey=cf9699b579fe4aab8c92d78a8783de4a`)

    .then(response => res.json(response.data))
    .catch(error => res.status(500).send(error.message));
});
const port = process.env.PORT || 3006;

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});