// Dependencies
var express = require("express");
var router = express.Router();
var burger = require("../models/burger");

// Routes
router.get("/", function (req, res) {
    burger.selectAll(function (data) {
        res.json(data);
    });
});

router.post("/", function (req, res) {
    burger.insertOneBurger(["burger_name"], [req.body.burger_name], function (data) {
        res.json(data);
    });
});

router.put("/:id", function (req, res) {
    var condition = "id = " + req.params.id;

    console.log("condition", condition);

    burger.updateOneBurger({ devoured: true }, condition, function (data) {
        res.json(data);
    });
});

// Export routes
module.exports = router;