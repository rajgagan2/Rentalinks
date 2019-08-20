const mongoose = require("mongoose");
const autoIncrement = require("mongoose-auto-increment");
const db = require("../config/keys").mongoURI;

const connection = mongoose.createConnection(db);
autoIncrement.initialize(connection, { useNewUrlParser: true });
console.log("Autoincrement connection established");

const Schema = mongoose.Schema;

// Create Schema
const carSchema = new Schema({
  category: {
    type: String,
    required: true
  },
  brand: {
    type: String,
    required: true
  },
  model: {
    type: String,
    required: true
  },
  registration: {
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
    default: true
  },
  seats: {
    type: Number,
    required: true
  },
  transmission: {
    type: String,
    required: true,
    enum: ["automatic", "manual"]
  },
  excessCost: {
    type: Number,
    required: true
  }
});

carSchema.plugin(autoIncrement.plugin, {
  model: "cars",
  field: "id"
});

module.exports = Car = mongoose.model("cars", carSchema);
