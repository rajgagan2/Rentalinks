const router    = require("express").Router(),
        Car     = require("../../models/cars");

router.get("/products",function(req,res){
    Car.find().then(cars =>{
        if (!cars) {
            return res.status(404).json({ noCarsFound: "No cars found" });
          }
        // Get cars
        if (cars) {
            return res.render("./products/products", { cars: cars });
            }
    });
});

module.exports = router;

