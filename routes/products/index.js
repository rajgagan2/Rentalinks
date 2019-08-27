const router    = require("express").Router(),
        Car     = require("../../models/cars"),
        moment  = require("moment");

router.post("/products",function(req,res){

    var hours = calBookingHours(req.body.pickDate,req.body.pickTime,req.body.dropDate,req.body.dropTime);
    var data = {
        bookingHours: hours,
        pickDate: moment(req.body.pickDate).format("Do MMM"),
        pickTime: moment(req.body.pickTime, "HH:mm:ss").format("hh[:]mm a"),
        dropDate: moment(req.body.dropDate).format("Do MMM"),
        dropTime: moment(req.body.dropTime, "HH:mm:ss").format("hh[:]mm a"),
        location: req.body.location
    };
    console.log(data.bookingHours,data.location);
    console.log(req.body);

    Car.find().then(cars =>{
        if (!cars) {
            return res.status(404).json({ noCarsFound: "No cars found" });
          }
        // Get cars
        if (cars) {
            return res.render("./products/products", { cars: cars, data:data });
            }
    });
});

function calBookingHours(pd,pt,dd,dt){

    const pickDateTime = moment(`${pd} ${pt}`, 'YYYY-MM-DD HH:mm:ss');
    const dropDateTime = moment(`${dd} ${dt}`, 'YYYY-MM-DD HH:mm:ss');
    console.log(pickDateTime,dropDateTime);

    // console.log(dropDateTime.diff(pickDateTime,"hours"));
   
    return dropDateTime.diff(pickDateTime,"hours");
}

module.exports = router;

