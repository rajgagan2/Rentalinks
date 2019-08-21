const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const passport = require("passport");
const cors = require("cors");
const dotenvConfig = require("dotenv").config();

const routes = require("./routes");

const app = express();
app.use(cors());

//routerconfig
app.set("view engine", "ejs");

//stylesheets
app.use(express.static(__dirname + "/public"));

// Bodyparser middleware
app.use(
  bodyParser.urlencoded({
    extended: false
  })
);
app.use(bodyParser.json());

// DB Config
const db = require("./config/keys").mongoURI;

// Connect to MongoDB
mongoose
  .connect(db, { useNewUrlParser: true })
  .then(() => console.log("MongoDB successfully connected"))
  .catch(err => console.log(err));

// Passport middleware
app.use(passport.initialize());

// Passport config
require("./config/passport")(passport);

// Routes
app.use("/", routes);

const port = process.env.PORT;

app.listen(port, () => console.log(`Server up and running on port ${port}`));
