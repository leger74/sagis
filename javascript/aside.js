
let slideIndex = 0;
const slides = document.querySelectorAll('.carousel-item');
const slideContainer = document.querySelector('.carousel-slide');

function showSlide(index) {
    // Loop infinito
    if (index >= slides.length) {
        slideIndex = 0;
    } else if (index < 0) {
        slideIndex = slides.length - 1;
    } else {
        slideIndex = index;
    }
    // Mueve el contenedor
    slideContainer.style.transform = `translateX(-${slideIndex * 100}%)`;
}

function nextSlide() {
    showSlide(slideIndex + 1);
}

function prevSlide() {
    showSlide(slideIndex - 1);
}

// Inicializar carrusel
showSlide(slideIndex);