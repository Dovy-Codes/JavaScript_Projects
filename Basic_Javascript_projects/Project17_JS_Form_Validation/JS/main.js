function validateForm(){
    document.getElementById("formAlert").innerHTML = ""
    let answer;
    let input = document.forms["myForm"]["clientName"].value;
    if (input == "") {
        document.getElementById("formAlert").innerHTML += "Please add you Name*<br>"
        answer = false;
    }
    let input2 = document.forms["myForm"]["phoneNumber"].value;
    if (input2 == "") {
        document.getElementById("formAlert").innerHTML += "Please add you Phone Number*<br>"
        answer = false;
    }
    let input3 = document.forms["myForm"]["email"].value;
    if (input3 == "") {
        document.getElementById("formAlert").innerHTML += "Please add you Email address*<br>"
        answer = false;
    }
    let input4 = document.forms["myForm"]["message"].value;
    if (input4 == "") {
        document.getElementById("formAlert").innerHTML += "Please add Message*<br>"
        answer = false;
    }
    return answer;
}

