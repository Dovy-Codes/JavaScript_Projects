/* This is function in which I test use of Ternary operator
    I ask user to input their height and it returns if they are tall enough */
function rideFunction() {
    let height, canRide;
    height = parseInt(document.getElementById("height").value);
    canRide = (height < 52) ? "You are too short":"You are tall enough";
    document.getElementById("ride").innerHTML = canRide + " to ride."
};


// Object constructor for class pet
function pet(name, species, breed, color) {
    this.petName = name;
    this.petSpecies = species;
    this.petBreed = breed;
    this.petColor = color;
};

// Here I made new Objects for each persons pet
let Will = new pet("Fluffy", "Dog", "Border Collie", "Black & White");
let Sarah = new pet("Princilla", "Cat", "Siberian", "Marbled Tabby");

/* This function builds a sentence from a newly created object and 
    and adds this sentence to Index.html*/
function construct() {
    document.getElementById("newAndThis").innerHTML = "Wills pet is " +
    Will.petName + " a beautiful " + Will.petColor + " " + Will.petBreed;
};

// Testing a simple nested function
function nested() {
    document.getElementById("nestedFunction").innerHTML = count();
    function count() {
        let Math = 10*2;
        return Math;
    };
};