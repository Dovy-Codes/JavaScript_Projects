/* Testing a While loop, this loop will print Hi there 10 times 
everytime we press corresponding button in HTML */
function callLoop() {
    let i = 0;
    while (i < 10) {
        document.getElementById("result").innerHTML += "<br>Hi there";
        i++;
    }
};

/* This Function takes user input text and 
checks the length of that sentence including spaces*/ 
function checkLength() {
    let sentenceLength = document.getElementById("sentence").value.length;
    document.getElementById("result2").innerHTML = sentenceLength;
};

/* This Function prints a shopping list 
for a user when he clicks the button */
function shop() {
    let products = ["Milk", "Tea", "Eggs", "Bread", "Sausage"];
    for (let i = 0; i < products.length; i++) {
        document.getElementById("shoppingList").innerHTML +=  
        products[i] + "<br>";
    };
};

/* This function builds an array and prints one of the elements it to HTLM */
function arrayFunction() {
    let colleagues = [];
    colleagues[0] = "Micheal";
    colleagues[1] = "Jack";
    colleagues[2] = "Ionut";
    colleagues[3] = "Hitesh";
    document.getElementById("array").innerHTML = 
    "My favorite workmate is " + colleagues[3]; // Don't say to anyone :\
};


/* I'll use this function to test changing Constant objects properties */
const laptop = {
    colour: "Silver",
    brand: "Lenovo",
    ram: "8Gb"
};

laptop.colour = "Red"; // Changing property in laptop object
laptop.Vram = "4Gb"; // Adding property to laptop object

// This function displays properties from laptop object to HTML
function constTest() {
    document.getElementById("constResult").innerHTML = 
    "You'll notice my " + laptop.colour + " " + laptop.brand + " laptop on the desk."
}


/* Here I will test Function Return, this program will multiply users 
    input number by itself (square) and return it to input field*/
function returnTest() {
    let input = document.getElementById("return").value;
    let result = input * input;
    return document.getElementById("return").value = result;
}


// I will test using Object method here
let nikkorLens = {
    brand: "Nikkor",
    zoom: "44mm - 86mm",
    smallestAperature: 22,
    largestAperatture: 3.5,
    info: function() {
        return "Here we have a " + this.brand + " lens with aparatures from " 
        + this.smallestAperature + " to " + this.largestAperatture + " and the Zoom is: " + this.zoom;
    }
}

function objectMethod() { // this function calls object method and returns results to HTML
    document.getElementById("object").innerHTML = nikkorLens.info()
}


/* Here I will test how to use Continue and Break statements the code will 
iterate over an array and Break if any element in the array is not a number 
and it will skip that iteration if the value at the current index is 5*/
let array = [0, 2, 5, 4, 2, 3, 5, 6, 8, 7, 3];
function findNumberThree() {
    for (let i = 0; i < array.length; i++) {
        if (typeof(array[i]) != typeof(0)){ // Here I check if the arrays elements are numbers
            document.getElementById("breakReturn").innerHTML = "The Array includes not just number values";
            break 
        }
        else if (array[i] === 5){ // Here I skip iteration if the number is equal to 5  
            continue
        }
        else {
            document.getElementById("breakReturn").innerHTML += " " + array[i]; // I return array values to HTML without 5s
        }

    }
};
