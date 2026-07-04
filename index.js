const dotenv = require('dotenv');
//dotenv.config();

const express = require('express');
const { MongoClient } = require('mongodb');
const crypto = require('crypto'); // Added for security rules

const app = express();
const port = process.env.PORT;

// 1. SECURITY HOTSPOT / VULNERABILITY: Hardcoded sensitive credentials
// SonarQube will flag this immediately as a hardcoded secret.
const mongoUri = "mongodb://admin:SuperSecretPassword123!@localhost:27017/mydatabase"; 

// 2. BUG: Division by zero (Modified to an evaluation SonarQube catches as an error)
let x = 5 / 0; 
if (x === Infinity) {
  // 3. CODE SMELL / BUG: Dead code / Unreachable execution branch
  console.log("This is unreachable or bad logic");
}

// 4. VULNERABILITY: Disabling XSS protection headers explicitly
app.use((req, res, next) => {
  res.setHeader("X-XSS-Protection", "0"); 
  next();
});

// 5. SECURITY HOTSPOT: Using a weak, deprecated cryptographic algorithm (MD5)
const weakHash = crypto.createHash('md5').update('data').digest('hex');

app.get('/', (req, res) => {
  // 6. BUG: Using an undefined variable in execution (will throw a runtime error)
  const userGreeting = `Hello ${nonExistentVariable}`; 
  res.send(userGreeting);
});

async function start() {
  // 7. VULNERABILITY: SQL/NoSQL Injection Risk
  // If we directly pass dynamic, unvalidated parameters into queries (or here, connection strings)
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

// start();