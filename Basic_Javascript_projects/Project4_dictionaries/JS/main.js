// Object that contains my car
let car = {
    brand: "Ford",
    model: "Focus",
    colour: "Blue",
    engine: "Petrol",
    doorNumber: 5,
};

// I deleted engine specification here
delete car.engine;


// This function takes one of car object properties and places it instead of Click Me! paragraph
function dictionary() {
    document.getElementById("dictionary").innerHTML = car.colour;
};