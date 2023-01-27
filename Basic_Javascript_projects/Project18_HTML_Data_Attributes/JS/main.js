function getCar(car){
    let displayCar = car.getAttribute("data-available-cars");
    document.getElementById("availableCar").innerHTML = "From " + 
    car.innerHTML + " range we currently have: " + displayCar;
};
