// Object constructor for class Vehicle
function Vehicle(Make, Model, Year, Color) {
    this.Vehicle_Make = Make;
    this.Vehicle_Model = Model;
    this.Vehicle_Year = Year;
    this.Vehicle_Color = Color;
};

// Here I made new Objects for each persons car
let Jack = new Vehicle("Dodge", "Viper", 2020, "Red");
let Emily = new Vehicle("Jeep", "Trail Hawk", 2019, "White and Black");
let Erick = new Vehicle("Ford", "Pinto", 1971, "Mustard");

// This function returns a string constructed out of object to html
function myFunction() {
    document.getElementById("Keywords_and_Constructors").innerHTML 
    = "Erick drives a " + Erick.Vehicle_Color + "-colored " + Erick.Vehicle_Model + 
    " manufactured in " + Erick.Vehicle_Year;
};