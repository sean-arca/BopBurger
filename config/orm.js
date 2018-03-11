// Dependencies
var connection = require("./connection");

// Functions for MySQL Syntax
function pushQuestionMark (num) {
    var arr = [];
    for (var i = 0; i < num; i++) {
        arr.push("?");  
    };
    return arr.toString();
};

function turnToObj (obj) {
    var arr = [];
    for (var key in obj) {
        arr.push(key + "=" + obj[key]);
    };
    return arr.toString();
};

// ORM Object
var orm = {

    // Function to Show All Table Entries
    selectAll: function (input, cb) {
        // Query String
        var queryString = "SELECT * FROM " + input + ";";

        // Query to Database
        connection.query(queryString,function (err, res) {
            if (err) {
                throw err;
            };

            // Show callback (cb) results
            cb(res);
        });
    },

    // Function to Insert Single Entry
    insertOneBurger: function (table, cols, vals, cb) {
        // Query String
        var queryString = "INSERT INTO " + table;

        queryString += " (";
        queryString += cols.toString();
        queryString += ") ";
        queryString += "VALUES (";
        queryString += pushQuestionMark(vals.length);
        queryString += ") ";

        // Test Query String
        console.log(queryString);

        // Query to Database
        connection.query(queryString, vals, function (err, res) {
            if (err) {
                console.log(err);
            };

            // Show callback(cb) results
            cb(res);
        });
    },

    // Function to Update Single Entry
    updateOneBurger: function (table, objVals, condition, cb) {
        // Query String
        var queryString = "UPDATE " + table;

        queryString += " SET ";
        queryString += turnToObj(objVals);
        queryString += " WHERE ";
        queryString += condition;
        // Test Query String
        console.log(queryString);

        // Query to Database
        connection.query(queryString, function (err, res) {
            if (err) {
                throw err;
            };

            // Show callback(cb) results
            cb(res);
        });
    }
};

// Export ORM
module.exports = orm;