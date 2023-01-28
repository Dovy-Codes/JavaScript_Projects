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
