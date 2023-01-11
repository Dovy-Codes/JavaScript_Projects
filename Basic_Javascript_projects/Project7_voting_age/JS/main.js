function ageCheck() {
    let age = parseInt(document.getElementById("age").value);
    let answer = (age >= 18) ? "You are old enough to vote":"You are not old enough to vote";
    document.getElementById("vote").innerHTML = answer;
}