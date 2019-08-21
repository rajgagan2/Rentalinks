const express = require("express");
const router = express.Router();

//import api file for each operation
const users = require("./users");
const cars = require("./cars");
const home = require("./home");
const products = require("./products");


//creating route to the imported location
router.use("/users", users);
router.use("/cars", cars);
router.use(home);
router.use(products);

module.exports = router;
