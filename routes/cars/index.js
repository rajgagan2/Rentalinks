const router = require("express").Router();
const passport = require("passport");

// Load Car model
const Car = require("../../models/cars");

// @route POST cars/getCars
// @desc get cars
// @access Public
router.get("/getCars", (req, res) => {
  // Find user by email
  Car.find().then(cars => {
    // Check if cars exists
    if (!cars) {
      return res.status(404).json({ carsNotFound: "Cars not found" });
    }

    // Get cars
    if (cars) {
      return res.status(404).json({ cars: cars });
    }
  });
});

module.exports = router;
