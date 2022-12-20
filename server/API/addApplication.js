const express = require('express');
const addApp = express.Router();
const mysql = require('mysql');
const pool = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "S18gRTY;kleS",
    database: "applications",
    port: "3306"
})

addApp.post("/application/create", (req, res) => {
    const walletId = req.body.walletAddress;
    const twitterData = req.body.twitter;
    const category = req.body.category;
    const questions = req.body.questions;
    const links = req.body.links;
    const status = "pending"

    pool.getConnection((err, connection) => {
        connection.query(`INSERT INTO applicants(walletId, twitterData, category, questions, links, status) VALUES('${walletId}', '${twitterData}', '${category}', '${questions}', '${links}', '${status}')`, (err, rows) => {
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
                    message: "new application added"
                })
            }else{
                res.status(500).json({
                    error: 13,
                    message: "Something unexpected happened"
                })
            }
        })

    })
})

module.exports = addApp;