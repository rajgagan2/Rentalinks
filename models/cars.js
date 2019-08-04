const mongoose = require("mongoose");
var autoIncrement = require("mongoose-auto-increment");
const Schema = mongoose.Schema;

// Create Schema
const carSchema = new Schema({
  category: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  location: {
    type: String,
    required: true
  },
  available: {
    type: Boolean,
    required: true
  }
});

carSchema.plugin(autoIncrement.plugin, {
  model: "cars",
  field: "id"
});

module.exports = Car = mongoose.model("cars", carSchema);
