// const express = require('express');
// const mysql = require('mysql');
// const config = require('../../databaseconfig/config');

// const app = express();

// app.use(express.json());

// app.post('/login', (req, res) => {
//   const { email, password } = req.body;

//   //making connection to the database table and checking data is valid or not
//   const conn = mysql.createConnection(config);
//   conn.query(`SELECT * FROM users WHERE email = '${email}' AND password = '${password}'`, (err, results) => {
//     conn.end();
//     if (err) {
//       console.log(err);
//       res.status(500).json({ message: 'Internal server error' });
//     } else if (results.length === 0) {
//       res.status(401).json({ message: 'Invalid login' });
//     } else {
//       res.json({ message: 'Login successful' });
//     }
//   });
// });

// //listning the live server
// app.listen(3000, () => {
//   console.log('Server started on port 4000');
// });


// pages/api/login.js

import mysql from 'mysql';
import config from '../../databaseconfig/config';

const executeQuery = (conn, query) => {
  return new Promise((resolve, reject) => {
    conn.query(query, (err, results) => {
      if (err) {
        reject(err);
      } else {
        resolve(results);
      }
    });
  });
};

export default async (req, res) => {
  if (req.method === 'POST') {
    const { email, password } = req.body;
    const conn = mysql.createConnection(config);

    try {
      const results = await executeQuery(conn, `SELECT * FROM users WHERE email = '${email}' AND password = '${password}'`);
      conn.end();

      if (results.length === 0) {
        res.status(401).json({ message: 'Invalid login' });
      } else {
        res.json({ message: 'Login successful' });
      }
    } catch (err) {
      console.log(err);
      conn.end();
      res.status(500).json({ message: 'Internal server error' });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
};
