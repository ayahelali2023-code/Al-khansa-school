// CARD ANIMATION DELAY

const cards = document.querySelectorAll(".card");

cards.forEach((card, index) => {

    card.style.animationDelay = `${index * 0.4}s`;

});