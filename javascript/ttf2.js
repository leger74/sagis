document.addEventListener("DOMContentLoaded", function() {
    const slides = document.querySelectorAll(".slide");
    let currentSlide = 0;

    function nextSlide() {
        // Quita la clase activa de la imagen actual
        slides[currentSlide].classList.remove("active");
        
        // Pasa a la siguiente (y vuelve a 0 si es la última)
        currentSlide = (currentSlide + 1) % slides.length;
        
        // Añade la clase activa a la nueva imagen
        slides[currentSlide].classList.add("active");
    }

    // Cambia la imagen cada 4 segundos
    setInterval(nextSlide, 4000);
});