// This function starts the countdown that appears on HTML
function countdown() {
    // We get the amount of seconds before the alert function gets called from this user input
    let seconds = document.getElementById("seconds").value;

    tick(); // Tick function gets called here

    function tick() {
        seconds = seconds - 1;
        timer.innerHTML = seconds;
        setTimeout(tick, 1000);// Here we set up 1s interval
        if (seconds == -1) { // This coditional statement checks when we run out of time 
            alert("Time's up!")
        };
    };
};