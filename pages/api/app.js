const express = require('express');
const mysql = require('mysql');
const config = require('./config');

const app = express();

app.use(express.json());

app.post('/login', (req, res) => {
  const { email, password } = req.body;

  //making connection to the database table and checking data is valid or not
  const conn = mysql.createConnection(config);
  conn.query(`SELECT * FROM users WHERE email = '${email}' AND password = '${password}'`, (err, results) => {
    conn.end();
    if (err) {
      console.log(err);
      res.status(500).json({ message: 'Internal server error' });
    } else if (results.length === 0) {
      res.status(401).json({ message: 'Invalid login' });
    } else {
      res.json({ message: 'Login successful' });
    }
  });
});

//listning the live server
app.listen(4000, () => {
  console.log('Server started on port 4000');
});
