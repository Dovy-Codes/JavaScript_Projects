/* Testing a While loop, this loop will print 
    Hi there 10 times everytime we press it */
function callLoop() {
    let i = 0;
    while (i < 10) {
        document.getElementById("result").innerHTML += "<br>Hi there";
        i++;
    }
};

/* This Function taskes user input text and 
checks the length of that sentence including spaces*/ 
function checkLength() {
    let length = document.getElementById("sentence").value.length;
    document.getElementById("result2").innerHTML = length;
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
    "My favorite workmate is " + colleagues[3];
};