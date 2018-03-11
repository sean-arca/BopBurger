// Dependencies
var burger = require("./burger");
var connection = require("../config/connection");

// Comment Out Which To Test

// Select All
// burger.selectAll(function (data) {
//     console.log('\nTesting Select All Function (burger.selectAll)...\n');

//     console.log('====== Burger Menu ======\n');
//     // Loop thru data
//     for (let i = 0; i < data.length; i++) {
//         console.log('Burger ID: ' + data[i].id);
//         console.log('Burger Name: ' + data[i].burger_name);
//         console.log('Available: ' + data[i].devoured);
//         console.log("\n");  
//     };
// });

// Insert Entry
// burger.insertOneBurger(['burger_name', 'devoured'], ['Double Nom Nom Burger', false], function (data) {
//         console.log('\nTesting Insert One Burger Function (burger.insertOneBurger)...\n');
//         console.log("\nNew Data Row Added with ID: " + data.insertId + " \n");
// });

// Update Entry
// burger.updateOneBurger({ devoured: true }, "id = 10", function (data) {
//     console.log('\nTesting Update One Burger Function (burger.updateOneBurger)...\n');
//     console.log("Result: " + data.message);
// });

connection.end();