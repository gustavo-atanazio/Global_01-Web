// Lógica do slider
function slider(slideSelector, slidesContainerSelector, time) {
    let counter = 0;
    const slidesElements = document.querySelectorAll(slideSelector);

    setInterval(() => {
        counter++;
        if (counter >= slidesElements.length) counter = 0;

        document.querySelector(slidesContainerSelector).style.transform = `translateX(-${counter * 100}%)`;
    }, time);
}

slider('.slide', '.slides', 5000);

// Slider da seção 2
slider('.slide_section', '.slides_section', 4000);