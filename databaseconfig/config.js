//for data base confrigation

/*
const mysql = require('mysql');

const config = mysql.createConnection({
  host:'localhost',
  user:'prisma',
  password:'CHIrag9460@',
  database:'youtube',
  port:'3307'
});

config.connect(function(err) {
  if (err) {
    console.error('Error connecting to MySQL database: ');
    return;
  }
  console.log('Connected to MySQL database as ' );
});
*/

const config = {
  host: "localhost",
  user: "prisma",
  password: "CHIrag9460@",
  database: "youtube",
  port: "3307",
};

module.exports = config;
