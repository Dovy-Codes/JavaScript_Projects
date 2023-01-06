let btn = document.getElementById("btn"); //Storing element in a variable
let text = document.getElementById("text"); //Storing element in a variable
document.write(btn,text); //Printing the elements descriptions

// This function will check if we press button and change text when we do press it
btn.onclick = function btnclicked() {
    let changedText = "You clicked me!";
    document.getElementById("btn").innerHTML = changedText;
};

// This function will concatenate text in p element when we press on it
function myFunction() {
    let sentence = "Hello";
    sentence += " there";
    document.getElementById("concatenate").innerHTML = sentence;
};