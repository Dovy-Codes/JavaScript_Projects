// function that uses concat()
function concatenate() {
    let text1 = "I took some text";
    let text2 = " and joined ";
    let text3 = "it together";
    let textUnited = text1.concat(text2, text3);
    document.getElementById("concatenatedText").innerHTML = textUnited;
};

concatenate();

// function to test use of slice(), search(), toUpperCase()
function sliceIt() {
    let sentence = "Some say life is not so great";
    let section = sentence.slice(9, 16) + sentence.slice(23, 29);
    document.getElementById("slice").innerHTML = section.toUpperCase();
    console.log(sentence.search(/life/i)) // testing search method
};

// function that uses toString()
function change() {
    let number = 99;
    document.getElementById("toString").innerHTML = number.toString();
};

// function that uses toPrecision()
function precision() {
    let number = 13.456
    document.getElementById("precisionTest").innerHTML = number.toPrecision(4);
};

// function that uses toFixed()
function fixedString() {
    let number = 45.347
    document.getElementById("fixed").innerHTML = number.toFixed(2);
};

// function that uses valueOf()
function primitiveValue() {
    let camera = {
        brand: "nikon",
        model: "Z50",
        price: "700£"
    }
    document.getElementById("value").innerHTML = camera.brand.valueOf();
};