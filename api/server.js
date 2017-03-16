var express = require('express');
var links = require('./data/links.json');

const app = express();

app.get('/api', (req, res) => {
  res.json(links);
});

const PORT = process.env.PORT || 3031;

app.listen(PORT, (err) => {
  if (err) {
    console.error(err);
    return;
  } else {
    console.info(`API listening at http://localhost:3031/api`);
  }
});
