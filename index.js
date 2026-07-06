const dotenv = require('dotenv');
dotenv.config();

const express = require('express');
const { MongoClient } = require('mongodb');

const app = express();
const port = process.env.PORT ;
const mongoUri = process.env.MONGO_URI ;



function duplicate1() {
  console.log("line1");
  console.log("line2");
  console.log("line3");
  console.log("line4");
  console.log("line5");
  console.log("line6");
  console.log("line7");
  console.log("line8");
  console.log("line9");
  console.log("line10");
}

function duplicate2() {
  console.log("line1");
  console.log("line2");
  console.log("line3");
  console.log("line4");
  console.log("line5");
  console.log("line6");
  console.log("line7");
  console.log("line8");
  console.log("line9");
  console.log("line10");
}


function complex(a, b, c, d) {
  if (a) {
    if (b) {
      if (c) {
        if (d) {
          console.log(1);
        } else {
          console.log(2);
        }
      } else {
        console.log(3);
      }
    } else {
      console.log(4);
    }
  } else {
    console.log(5);
  }
}

let value = null;

console.log(value.length);

app.get('/backend-apis', (req, res) => {
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

duplicate1();
duplicate2();

complex(true, true, true, false);