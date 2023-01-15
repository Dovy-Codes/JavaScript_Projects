/* --------Slideshow------------
-------------------------------*/

/*
let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
    showSlides(slideIndex += n)
}

// Thumbnail image control
function currentSlide(n) {
    showSlides(slideIndex = n)
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("slide");
    let dots = document.getElementsByClassName("dot");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
        console.log("Loop ran")
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active"
}
*/

/* ---Automatic Slideshow--------
-------------------------------*/
let slideIndex = 0;
showSlides();

function showSlides() {
    let i;
    let slides = document.getElementsByClassName("slide");
    for (i= 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}
    slides[slideIndex - 1].style.display = "block";
    setTimeout(showSlides, 3000); //Changes image every three seconds
}


/* I hid all the elements that I used with non Automatic slideshow 
    there must be a better way to do this I will figure it out*/
let hide = document.getElementsByClassName("prev");
let hide2 = document.getElementsByClassName("next");
let hide3 = document.getElementsByClassName("dotGroup");
hide[0].style.display = "none";
hide2[0].style.display = "none";
hide3[0].style.display = "none";
