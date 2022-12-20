const express = require('express');
const getAppStatus = express.Router();
const mysql = require('mysql');
const pool = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "S18gRTY;kleS",
    database: "applications",
    port: "3306"
})

getAppStatus.get("/application", (req, res) => {
    const walletId = req.query.wallet;

    console.log(walletId)

    pool.getConnection((err, connection) => {
        connection.query(`SELECT * FROM applicants WHERE walletId='${walletId}'`, (err, rows) => {
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
                    status: data[0].status
                })
            }else{
                res.status(500).json({
                    error: 13,
                    status: "Wallet is not registered"
                })
            }
        })

    })
})

module.exports = getAppStatus;