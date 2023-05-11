// pages/api/testDatabaseConnection.js

import mysql from 'mysql';
import config from '../../databaseconfig/config';

const testConnection = (connection) => {
  return new Promise((resolve, reject) => {
    connection.ping((err) => {
      if (err) {
        reject(err);
      } else {
        resolve(true);
      }
    });
  });
};

export default async (req, res) => {
  if (req.method === 'GET') {
    const conn = mysql.createConnection(config);

    try {
      await testConnection(conn);
      conn.end();
      res.status(200).json({ message: 'Database connected successfully' });
    } catch (err) {
      console.log(err);
      conn.end();
      res.status(500).json({ message: 'Failed to connect to the database' });
    }
  } else {
    res.setHeader('Allow', ['GET']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
};
