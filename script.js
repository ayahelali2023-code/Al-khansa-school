// script.js

const slides = document.querySelectorAll(".slide");

const dots = document.querySelectorAll(".dot");

let currentSlide = 0;



function showSlide(index){

    slides.forEach((slide) => {

        slide.classList.remove("active-slide");

    });



    dots.forEach((dot) => {

        dot.classList.remove("active-dot");

    });



    slides[index].classList.add("active-slide");

    dots[index].classList.add("active-dot");

}



/* NEXT */

function nextSlide(){

    currentSlide++;

    if(currentSlide >= slides.length){

        currentSlide = 0;

    }

    showSlide(currentSlide);

}



/* PREVIOUS */

function prevSlide(){

    currentSlide--;

    if(currentSlide < 0){

        currentSlide = slides.length - 1;

    }

    showSlide(currentSlide);

}



/* AUTO SLIDE */

setInterval(() => {

    nextSlide();

}, 4000);