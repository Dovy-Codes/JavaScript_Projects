// I am testing get by Class name here
function classFunction() {
    let elements = document.getElementsByClassName("text")
    elements[0].innerHTML = "I changed!"
}

// We set the canvas 1 here
let canvas = document.getElementById("myCanvas");
let context = canvas.getContext("2d");

// Gradient
let gradient = context.createRadialGradient(150, 100, 50, 150, 100, 250);
gradient.addColorStop(0, "purple");
gradient.addColorStop(1, "blue");

// Fill Gradient
context.fillStyle = gradient;
context.fillRect(0, 0, 500, 250);   


// We set the canvas 2 here
let canvas2 = document.getElementById("myCanvas2");
let context2 = canvas2.getContext("2d");

// Gradient
let gradient2 = context2.createLinearGradient(0, 0, 350, 0);
gradient2.addColorStop(0, "Green");
gradient2.addColorStop(1, "Yellow");

// Fill Gradient
context2.fillStyle = gradient2;
context2.fillRect(0, 0, 500, 250);   

