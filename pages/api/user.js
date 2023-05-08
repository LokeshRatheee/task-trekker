// //importing Sql
// const mysql = require('mysql2/promise');
// //importing sql configration module
// const config =require('./config');

// async function getUserById(id, password) {
//     const conn = await mysql.createConnection(config);
//     const [rows] = await conn.query('SELECT * from youtube_channel where id = ?',[id]);
//     await conn.end();

//     console.log(rows.length);
//     if(rows.length === 0){
//         return {success: false, message:'id and password is not valid'};
//     }

//     const user = rows[0];
//     if(user.password !== password){
//         return {success: false, message:'invalid id or password'};
//     }

//     return {success:true, message:'login successful'};
// }

// console.log(getUserById());

// module.exports = getUserById; 