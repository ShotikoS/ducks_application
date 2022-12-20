const mysql = require("mysql")
const pool = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "S18gRTY;kleS",
    port: 3306,
    database: "calculator"
})

module.exports = pool