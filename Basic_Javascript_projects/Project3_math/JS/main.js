 function addition() {
     let val1 = parseFloat(document.getElementById("input1").value);
     let val2 = parseFloat(document.getElementById("input2").value);
     let calculate = val1 + val2;
     document.getElementById("result").innerHTML= "Result: " + calculate;
 };

function substraction() {
    let val1 =  parseFloat(document.getElementById("input1").value);
    let val2 =  parseFloat(document.getElementById("input1").value);
    let calculate = val1 + val2;
    document.getElementById("result").innerHTML = "Result: " + calculate;  
};

function multiplication() {
    let val1 =  parseFloat(document.getElementById("input1").value);
    let val2 =  parseFloat(document.getElementById("input1").value);
    let calculate = val1 * val2;
    document.getElementById("result").innerHTML = "Result: " + calculate;  
};

function division() {
    let val1 = parseFloat(document.getElementById("input1").value);
    let val2 = parseFloat(document.getElementById("input2").value);
    let calculate = val1 / val2;
    document.getElementById("result").innerHTML = "Result: " + calculate;
};

function modulus() {
    let val1 = parseFloat(document.getElementById("input1").value);
    let val2 = parseFloat(document.getElementById("input2").value);
    let calculate = val1 % val2;
    document.getElementById("result").innerHTML = "Result: " + calculate;
};

function multipleOperations() {
    let calculate = 2 + 2 - 6 * 6 / 5;
    document.getElementById("result").innerHTML = "Result: " + calculate;
};