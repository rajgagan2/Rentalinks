const transmissionAuto = document.getElementById("transmission-auto");
const transmissionManual = document.getElementById("transmission-manual");
const hatchback = document.getElementById("hatchback"); 
const sedan = document.getElementById("sedan"); 


//price filters

$("#pricelowtohigh").on("click", function(){
    var $wrapper = $("#wrapper"),
        $cars = $wrapper.find('.car-container');
        [].sort.call($cars,function(a,b){
            return +$(a).attr("data-weight") - +$(b).attr("data-weight");
        });
        $cars.each(function(){
            $wrapper.append(this);
        });
});

$("#pricehightolow").on("click", function(){
    var $wrapper = $("#wrapper"),
        $cars = $wrapper.find('.car-container');
        [].sort.call($cars,function(a,b){
            return +$(b).attr("data-weight") - +$(a).attr("data-weight");
        });
        $cars.each(function(){
            $wrapper.append(this);
        });
});

//CarType Filters
hatchback.addEventListener("click", function(){
    const cars = document.getElementsByClassName("car-container");
    Array.from(cars).forEach(function(car){
        const value = car.querySelector("#category").textContent.trim().toLowerCase();
        console.log(value);
        if(value!="hatchback")
        {
            if(car.style.display == 'none'){
                car.style.display = '';
            }
            else {
                car.style.display = 'none';
            }
        }
    })
});

// sedan.addEventListener("click", function(){
//     const cars = document.getElementsByClassName("car-container");
//     Array.from(cars).forEach(function(car){
//         const value = car.querySelector("#category").textContent.trim().toLowerCase();
//         console.log(value);
//         if(value!="sedan")
//         {
//             if(car.style.display == 'none'){
//                 car.style.display = '';
//             }
//             else {
//                 car.style.display = 'none';
//             }
//         }
//     })
// });

sedan.addEventListener("click", carGroupFilter());

function carGroupFilter(){
    const cars = document.getElementsByClassName("car-container");
    Array.from(cars).forEach(function(car){
        const value = car.querySelector("#category").textContent.trim().toLowerCase();
        console.log(value);
        if(value!== "sedan")
        {
            if(car.style.display == 'none'){
                car.style.display = '';
            }
            else {
                car.style.display = 'none';
            }
        }
    })
};


//Transmission filters
transmissionAuto.addEventListener("click",function(){
    
    const cars = document.getElementsByClassName("car-container");
    Array.from(cars).forEach(function(car){
        const value = car.querySelector("#transmission").textContent.trim();
        if(value!="automatic")
        {
            if(car.style.display == 'none'){
                car.style.display = '';
            }
            else {
                car.style.display = 'none';
            }
        }
    })
});

transmissionManual.addEventListener("click",function(){
    
    const cars = document.getElementsByClassName("car-container");
    Array.from(cars).forEach(function(car){
        const value = car.querySelector("#transmission").textContent.trim();
        if(value!="manual")
        {
            if(car.style.display == 'none'){
                car.style.display = '';
            }
            else {
                car.style.display = 'none';
            }
        }
    })
});
