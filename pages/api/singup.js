const express = require("express");
const mysql = require("mysql");
const config = require("./config");

const app = express();

app.use(express.json());

app.post("/singup", (req,res) => {
    const{firstName, email, password} = req.body;
    const conn = mysql.createConnection(config);
    conn.query(`INSERT into users (firstName, email, password) VALUES('${firstName}','${email}','${password}')`,(err,results) => {
        conn.end;
        if (err) {
            console.error("error in inserting data ");
            return res.status(500).json({error: "error occured"});
        }

        // 201 for created successfully
        return res.status(201).json({message : "data inserted sucessfully"})
    })
})
app.listen(4000, ()=>{
    console.log("server started on 4000");
})
