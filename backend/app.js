const express = require('express');
const app = express();
const redis = require('redis');

// Redis client
const client = redis.createClient({ host: 'redis' });

app.get('/', (req, res) => {
  client.incr('visits', (err, visits) => {
    if (err) return res.status(500).send('Error accessing Redis');
    res.send(`Hello, DevOps! This page has been visited ${visits} times.`);
  });
});

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Backend is running on port ${PORT}`);
});

