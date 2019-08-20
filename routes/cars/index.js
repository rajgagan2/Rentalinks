const router = require("express").Router();
const passport = require("passport");

// Load input validation
const validateAddCarsInput = require("../../validation/addCars");

// Load Car model
const Car = require("../../models/cars");

// @route GET cars/getCars
// @desc get cars details
// @access Public
router.get("/getCars", (req, res) => {
  // Find user by email
  Car.find().then(cars => {
    // Check if cars exists
    if (!cars) {
      return res.json({ noCarsFound: "No cars found" });
    }

    // Get cars
    if (cars) {
      return res.status(200).json({ cars: cars, success: true });
    }
  });
});

// @route POST cars/addCars
// @desc add cars to database
// @access Public
router.post("/addCars", (req, res) => {
  // Form validation

  const { errors, isValid } = validateAddCarsInput(req.body);

  // Check validation
  if (!isValid) {
    return res.status(400).json(errors);
  }

  Car.findOne({ registration: req.body.registration }).then(car => {
    if (car) {
      return res.status(400).json({
        carAlreadyExists: "This vehicle already exists in the database"
      });
    } else {
      const newCar = new Car({
        category: req.body.category,
        brand: req.body.brand,
        model: req.body.model,
        registration: req.body.registration,
        price: req.body.price,
        location: req.body.location,
        available: req.body.available,
        seats: req.body.seats,
        transmission: req.body.transmission,
        excessCost: req.body.excessCost
      });

      newCar
        .save()
        .then(car => res.status(201).json(car))
        .catch(err => console.log(err));
    }
  });
});

module.exports = router;
