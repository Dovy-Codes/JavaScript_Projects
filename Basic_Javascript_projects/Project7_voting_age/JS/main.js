// This function checks someones age
function ageCheck() {
    let age = parseInt(document.getElementById("age").value); // Using parseInt to get a number and not a string
    let answer = (age >= 18) ? "You are old enough to vote":"You are not old enough to vote";
    document.getElementById("vote").innerHTML = answer;
}