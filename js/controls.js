
let slideIndex = 0;

function moveCarousel(n) {
    const slides = document.querySelectorAll('.text-carousel');
    slideIndex += n;
    if (slideIndex >= slides.length) {
        slideIndex = 0;
    }
    if (slideIndex < 0) {
        slideIndex = slides.length - 1;
    }
    slides.forEach(slide => slide.style.transform = 'translateX(-${slideIndex * 100}%)');
}