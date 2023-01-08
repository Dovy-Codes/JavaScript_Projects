/* I have written out various functions here all of them are named after what they perform
I have used parseFloat to change input values from string to floating point numbers*/


//------------------Addition-------------
function addition() {
     let val1 = parseFloat(document.getElementById("input1").value);
     let val2 = parseFloat(document.getElementById("input2").value);
     let calculate = val1 + val2;
     document.getElementById("result1").innerHTML= "Result: " + calculate;
 };

//------------------Substraction-------------
function substraction() {
    let val1 =  parseFloat(document.getElementById("input3").value);
    let val2 =  parseFloat(document.getElementById("input4").value);
    let calculate = val1 - val2;
    document.getElementById("result2").innerHTML = "Result: " + calculate;  
};


//------------------Multiplication-------------
function multiplication() {
    let val1 =  parseFloat(document.getElementById("input5").value);
    let val2 =  parseFloat(document.getElementById("input6").value);
    let calculate = val1 * val2;
    document.getElementById("result3").innerHTML = "Result: " + calculate;  
};


//------------------Division------------------
function division() {
    let val1 = parseFloat(document.getElementById("input7").value);
    let val2 = parseFloat(document.getElementById("input8").value);
    let calculate = val1 / val2;
    document.getElementById("result4").innerHTML = "Result: " + calculate;
};


//------------------Modulus------------------
function modulus() {
    let val1 = parseFloat(document.getElementById("input9").value);
    let val2 = parseFloat(document.getElementById("input10").value);
    let calculate = val1 % val2;
    document.getElementById("result5").innerHTML = "Result: " + calculate;
};

//------------------Increment------------------
function increment() {
    let val1 = parseFloat(document.getElementById("input11").value);
    val1++;
    document.getElementById("result6").innerHTML = val1;
};

//------------------Decrement------------------
function decrement() {
    let val1 = parseFloat(document.getElementById("input12").value);
    val1--;
    document.getElementById("result7").innerHTML = val1;
};


//-------Random number generator---------------
function randomNumber() {
    let random = (Math.round(Math.random() * 1000));
    document.getElementById("math8").innerHTML = random;
};


//----------Testing other operations here-----
function multipleOperations() {
    let calculate = 2 + 2 - 6 * 6 / 5;
    document.getElementById("result").innerHTML = "Result: " + calculate;
};

function negationOpertor() {
    let x = 10;
    document.getElementById("result").innerHTML = -x;
};
