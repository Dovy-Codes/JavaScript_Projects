let btn = document.getElementById("btn").innerHTML; //Storing element in a variable
let text = document.getElementById("text").innerHTML; //Storing element in a variable
document.write(btn,text); //Printing the elements descriptions

// This function will check if we press button and change text when we do press it
function btnclicked() {
    let changedText = "You clicked me!";
    document.getElementById("btn").innerHTML = changedText;
};

// This function will concatenate text in p element when we press on it
function myFunction() {
    let sentence = "Hello";
    sentence += " there";
    document.getElementById("concatenate").innerHTML = sentence;
};

// This function multiplies values in the input fields
function multiply() {
    let val_1 = document.getElementById("value-1").value;
    let val_2 = document.getElementById("value-2").value;
    let calculated = val_1*val_2;
    document.getElementById("result").innerHTML = calculated;
};