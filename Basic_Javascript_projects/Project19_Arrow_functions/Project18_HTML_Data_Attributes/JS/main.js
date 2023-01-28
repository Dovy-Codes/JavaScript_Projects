// Testing Arrow Functions
const lendingOffer = () => {
    let loanSize = document.getElementById("loanSize").value;
    let deposit = document.getElementById("deposit").value;
    let valueBorrowed = loanSize - deposit;
    let rate = 0;
    let answer;
    if (deposit >= (loanSize*0.150)) {
        rate = "4.9%"
        answer = "You would borrow £" + valueBorrowed + " with the rate of: " + rate;
    }
    else if (deposit >= (loanSize*0.10) && loanSize > 1) {
        rate = "5.5%"
        answer = "You would borrow £" + valueBorrowed + " with the rate of: " + rate; 
    }
    else {
        answer = "We do not offer loans under 10% deposit"
    }
    document.getElementById("return").innerHTML = answer;
} 

// Testing Sort with Arrow Function within
const numbers = [45, 4, 9, 16, 25];
let someOver18 = numbers.some(t => t > 18);
document.getElementById("demo").innerHTML = "Some over 18 is " + someOver18;
