// Lógica do slider
let counter = 0;
const slides = document.querySelectorAll('.slide');

setInterval(() => {
    counter++;
    if (counter >= slides.length) counter = 0;

    document.querySelector('.slides').style.transform = `translateX(-${counter * 100}%)`;
}, 5000);