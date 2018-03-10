// Dependencies
var mysql = require("mysql");

// MySQL Connection Info
var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "Lollersk8!",
    database: "burgers_db"
});

// Create the Connection to the DB
connection.connect(function (err) {
    if (err) {
        throw err;
    };

    console.log('\nMySQL: Connected to Burger database as id ' + connection.threadId + '\n');
})

module.exports = connection;
