var express = require('express');
var links = require('./data/links.json');

const HOST = process.env.HOST || '127.0.0.1';
const PORT = process.env.PORT || 3031;
const ENV = process.env.NODE_ENV || 'production';

const app = express();

app.get('/api', (req, res) => {
  res.json(links);
});

app.listen(PORT, (err) => {
  if (err) {
    console.error(err);
    return;
  } else {
    console.info(`API listening at http://${HOST}:${PORT}/api [${ENV}]`);
  }
});
