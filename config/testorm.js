// Dependencies
var orm = require("./orm");
var connection = require("./connection");

// Comment Out Which To Test

// Select All
// orm.selectAll("burgers", function (data) {
//     console.log('\nTesting Select All Function (orm.selectAll)...\n');

//     console.log('====== Burger Menu ======\n');
//     // Loop thru data
//     for (let i = 0; i < data.length; i++) {
//         console.log('Burger ID: ' + data[i].id);
//         console.log('Burger Name: ' + data[i].burger_name);
//         console.log('Available: ' + data[i].devoured);
//         console.log("\n");  
//     };
// });

// Find One Entry
// orm.insertOneBurger('burgers', ['burger_name', 'devoured'], ['Nom Nom Burger', false], function (data) {
//         console.log('\nTesting Insert One Burger Function (orm.insertOneBurger)...\n');
//         console.log("\nNew Data Row Added with ID: " + data.insertID + " \n");
// });

// Update Entry
// orm.updateOneBurger("burgers", { devoured: true }, "id = 2", function (data) {
//     console.log('\nTesting Update One Burger Function (orm.updateOneBurger)...\n');
//     console.log("Result: " + data.message);
// });

connection.end();