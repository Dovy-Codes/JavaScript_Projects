// Basic Object
let house = {
    colour: "red",
    type: "terraced",
    bedroomCount: 3,
};

// Variable for testing
let cat = "Vasily";

/* Won't work due to using defer in script tag but 
if I don't use defer tag I can't use getElementById */
document.write(cat);

// Tested if I can use typeof on object properties, it works
console.log(typeof house.bedroomCount);

// I used this to get NaN as an answer
function myFunction() {
    document.getElementById("test").innerHTML = 0/0;
};

// Testing isNaN on string
function is_nan_check() {
    document.getElementById("test2").innerHTML = isNaN(house.type)
};

// Testing isNaN on number
function is_nan_check2() {
    document.getElementById("test3").innerHTML = isNaN(house.bedroomCount)
};

// Displaying infinity
document.getElementById("infinity").innerHTML = 3E310;

// Displaying negative infinity
document.getElementById("negInfinity").innerHTML = -3E310; 

// I commented these out to work on && and || in the same elements
// document.getElementById("true").innerHTML = 10>2; 

// document.getElementById("false").innerHTML = 2>10;

console.log(4>5); // Testing for false in console.log

console.log("4" + 5); // Testing for type coercion




/* Testing type inclusive equality and type non-inclusive equality 
-----------------------------------------------------------------*/
console.log( 4 == 4);

console.log(5 == 4);

console.log(5 === 5);

console.log(5 === "five");

console.log(5 === "5");

console.log(5 === 6);




/* Here I tested how &&, || and ! works 
--------------------------------------*/

document.getElementById("true").innerHTML += " Answer to 6 > 4 AND 10 > 8 is: " + (6 > 4 && 10 > 8);

document.getElementById("false").innerHTML += " Answer to 4 > 4 AND 10 > 8 is: " + (4 > 4 && 10 > 8);

document.getElementById("true2").innerHTML += " Answer to 4 > 4 OR 10 > 8 is: " + (4 > 4 || 10 > 8);

document.getElementById("false2").innerHTML += " Answer to 3 > 4 OR 6 > 8 is: " + (3 > 4 || 6 > 8);

function notFunction() {
    document.getElementById("not").innerHTML = "NOT(10 > 4) will return: " + !(10 > 4);
};

function notFunction2() {
    document.getElementById("not").innerHTML += "<br>NOT(5 > 8) will return: " + !(5 > 8);
};