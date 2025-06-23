const express = require('express');
const mongoose = require('mongoose');
const client = require('prom-client');
const { collectDefaultMetrics, Registry } = client;
const app = express();

const register = new Registry();
collectDefaultMetrics({ register });

mongoose.connect('mongodb://mongo:27017/testdb', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

app.get('/', (req, res) => {
  res.json({ message: 'Hello from backend!' });
});

app.get('/metrics', async (req, res) => {
  res.set('Content-Type', register.contentType);
  res.end(await register.metrics());
});

app.listen(3001, () => console.log('Backend running on port 3001'));
