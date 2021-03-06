const Validator = require("validator");
const isEmpty = require("is-empty");

module.exports = function validateAddCarsInput(data) {
  let errors = {};

  // Convert empty fields to an empty string so we can use validator functions
  data.category = !isEmpty(data.category) ? data.category : "";
  data.brand = !isEmpty(data.brand) ? data.brand : "";
  data.model = !isEmpty(data.model) ? data.model : "";
  data.registration = !isEmpty(data.registration) ? data.registration : "";
  data.price = !isEmpty(data.price) ? data.price : "";
  data.location = !isEmpty(data.location) ? data.location : "";
  data.seats = !isEmpty(data.seats) ? data.seats : "";
  data.transmission = !isEmpty(data.transmission) ? data.transmission : "";
  data.excessCost = !isEmpty(data.excessCost) ? data.excessCost : "";

  // Category checks
  if (Validator.isEmpty(data.category)) {
    errors.category = "Category is required";
  }
  // Brand checks
  if (Validator.isEmpty(data.brand)) {
    errors.brand = "Brand field is required";
  }
  // Model checks
  if (Validator.isEmpty(data.model)) {
    errors.model = "Car's Model is required";
  }
  // Registration checks
  if (Validator.isEmpty(data.registration)) {
    errors.registration = "Car's Registration is required";
  }
  // Price checks
  if (Validator.isEmpty(data.price)) {
    errors.price = "Price is required";
  }
  // Location checks
  if (Validator.isEmpty(data.location)) {
    errors.location = "Location is required";
  }
  // seats checks
  if (Validator.isEmpty(data.seats)) {
    errors.seats = "Number of seats is required";
  }
  // transmission checks
  if (Validator.isEmpty(data.transmission)) {
    errors.transmission = "Transmission type is required";
  }
  // excessCost checks
  if (Validator.isEmpty(data.excessCost)) {
    errors.excessCost = "Excess cost is required";
  }

  return {
    errors,
    isValid: isEmpty(errors)
  };
};
