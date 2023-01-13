// Declaring a global variable
let x = 5;

// Using Local variable
function function1 () {
    let y = 10;
    document.getElementById("test").innerHTML = 15 - y;
}

/* Intentionally using local variable from other 
function and then checking console log in chrome */
function function2 () {
    console.log(20 - y);
}

/* This function greets user differently depending on the time of the day */
function getTime() {
    let time = new Date().getHours();
    let reply;
    if (time >= 5  && time < 12) { //between 5am and 12pm
        reply = "Good morning Sir/Madam";
    }

    else if (time >= 12  && time < 18) { //between 12pm and 6pm
       reply = "Good afternoon Sir/Madam"; 
    }

    else if (time >= 18  && time < 22) { //between 6pm and 10pm
       reply = "Good evening Sir/Madam"; 
    }

    else {reply = "Good night Sir/Madam";} //between 10pm and 5am
    
    document.getElementById("greet").innerHTML = reply;
};

// This function return different text depending on user input in select field
function multiPetDiscount() {
    let petCount = document.getElementById("petCount").value;
    let answer;
    if (petCount == 1) {
        answer = "Average price to insure your dog would be 20£"
    }

    else if (petCount == 2) {
        answer = "Average price per dog insurance: 18£ you get 10% multi dog insurance savings!"
    }

    
    else if (petCount == 3) {
        answer = "Average price per dog insurance: 16£ you get 20% multi dog insurance savings!"
    }

    else if (petCount == 4) {
        answer = "Average price per dog insurance: 15£ you get 25% multi dog insurance savings!"
    }

    else {answer = "Please choose a number"}

    document.getElementById("answer").innerHTML = answer;
};
