function callLoop() {
    let i = 0;
    while (i < 10) {
        document.getElementById("result").innerHTML += "<br>Hi there";
        i++;
    }
};

function checkLength() {
    let length = document.getElementById("sentence").value.length;
    document.getElementById("result2").innerHTML = length;
};