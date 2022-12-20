const express = require('express');
const getApplicants = express.Router();
const mysql = require('mysql');
const pool = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "S18gRTY;kleS",
    database: "applications",
    port: "3306"
})

getApplicants.get("/application/all", (req, res) => {
    pool.getConnection((err, connection) => {
        connection.query(`SELECT * FROM applicants WHERE Id>0`, (err, rows) => {
            connection.release();

            if(err) {
                res.status(500).send({
                    error: 10,
                    message: "Database error",
                    err
                })
                return
            }

            let data = JSON.stringify(rows);
            data = JSON.parse(data);

            if(data.length > 0){
                res.status(200).json({
                    error: 0,
                    data: data
                })
            }else{
                res.status(500).json({
                    error: 13,
                    message: "applicants was not found"
                })
            }
        })

    })
})

module.exports = getApplicants;