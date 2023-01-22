function colourFunction() {
    let colour = document.getElementById("colour").value;
    let niceColour = ", that's a nice colour!";
    let answer;
    switch(colour) {
        case "Green":
            answer = "Green" + niceColour;
        break;
        case "Red":
            answer = "Red" + niceColour;
        break;
        case "Blue":
            answer = "Blue" + niceColour;
        break;
        case "Purple":
            answer = "Purple" + niceColour;
        break;
        case "Yellow":
            answer = "Yellow" + niceColour;
        break;
        default:
            answer = "Please choose one of the options";
    }
    document.getElementById("colourReturn").innerHTML = answer;
}