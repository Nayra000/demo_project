const dotenv = require('dotenv');
dotenv.config();

const express = require('express');
const { MongoClient } = require('mongodb');

const app = express();
const port = process.env.PORT ;
const mongoUri = process.env.MONGO_URI ;

app.get('/', (req, res) => {
  res.send('Hello from demo app');
});

async function start() {
  const client = new MongoClient(mongoUri);
  try {
    await client.connect();
    console.log('Connected to MongoDB');

    app.listen(port, () => {
      console.log(`Demo app listening on ${port}`);
    });
  } catch (err) {
    console.error('Failed to connect to MongoDB', err);
    process.exit(1);
  }
}

start();