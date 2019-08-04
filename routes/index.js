const express = require("express");
const router = express.Router();

//import api file for each operation
const users = require("./users");
const cars = require("./cars");

//creating route to the imported location
router.use("/users", users);
router.use("/cars", cars);

module.exports = router;
