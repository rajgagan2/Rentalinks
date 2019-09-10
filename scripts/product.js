const transmissionAuto = document.getElementById("transmission-auto");
const transmissionManual = document.getElementById("transmission-manual"); 

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
