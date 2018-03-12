// Dependencies
var orm = require("../config/orm");

// Burger Object
var burger = {
    
    // Select All
    selectAll: function (cb) {
        orm.selectAll("burgers", function (res) {
            cb(res);
        });
    },

    // Insert One Burger
    insertOneBurger: function (cols, vals, cb) {
        orm.insertOneBurger("burgers", cols, vals, function (res) {
            cb(res);
        });
    },

    // Update One Burger
    updateOneBurger: function (objVals, id, cb) {
        orm.updateOneBurger("burgers", objVals, condition, function (res) {
            cb(res);
        });
    }
};

// Export module
module.exports = burger;