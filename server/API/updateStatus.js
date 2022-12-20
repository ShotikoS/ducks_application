const express = require('express');
const updateStatus = express.Router();
const mysql = require('mysql');
const pool = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "S18gRTY;kleS",
    database: "applications",
    port: "3306"
})

updateStatus.put("/application", (req, res) => {
    const walletId = req.body.walletAddress;
    const status = req.body.status;

    pool.getConnection((err, connection) => {
        connection.query(`UPDATE applicants SET status=${status} WHERE walletId='${walletId}'`, (err, rows) => {
            connection.release();

            if(err) {
                res.status(500).send({
                    error: 10,
                    message: "Database error"
                })
                return
            }

            let data = JSON.stringify(rows);
            data = JSON.parse(data);

            if(data.affectedRows > 0){
                res.status(200).json({
                    error: 0,
                    message: "Status changed"
                })
            }else{
                res.status(500).json({
                    error: 13,
                    message: "wallet address was not found"
                })
            }
        })

    })
})

module.exports = updateStatus;