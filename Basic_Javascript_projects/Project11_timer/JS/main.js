function countdown() {
    let seconds = document.getElementById("seconds").value;

    tick();
    function tick() {
        seconds = seconds - 1;
        timer.innerHTML = seconds;
        setTimeout(tick, 1000);
        if (seconds == -1) {
            alert("Time's up!")
        };
    };
};