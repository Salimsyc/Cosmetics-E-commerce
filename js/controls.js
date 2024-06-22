let currentSlide = 0;

const previousButton = document.querySelector(".previous-slide");
const nextButton = document.querySelector(".next-slide");

const slides = document.querySelectorAll('.carousel-content');
const totalSlides = slides.length;

function showSlide(index) {
    if (index >= totalSlides) {
        currentSlide = 0;
    } else if (index < 0) {
        currentSlide = totalSlides - 1;
    } else {
        currentSlide = index;
    }

    const newTransform = -currentSlide * 100 + "%";
    document.querySelector(".carousel-content").style.transform = `translateX(${newTransform})`;

    slides.forEach((slide, i) => {
        slide.classList.toggle("active", i === currentSlide);
    });
}

// Initialize the first slide
setInterval(nextSlide, 3000);

function previousSlide() {
    showSlide(currentSlide - 1);
}

function nextSlide() {
    showSlide(currentSlide + 1);
}

previousButton.addEventListener("click", previousSlide);
nextButton.addEventListener("click", nextSlide);


const customerTestimonialsRightbtnScroll = document.querySelector(".testimonials-rightbtn-scroll");
const customerTestimonialsLeftbtnScroll = document.querySelector(".testimonials-leftbtn-scroll");
const customersTestimonialsContainer = document.querySelector(".customers-container");

customersTestimonialsContainer.addEventListener("wheel", (event) => {
    event.preventDefault();
    customersTestimonialsContainer.scrollLeft += event.deltaY;
});

customerTestimonialsLeftbtnScroll.addEventListener("click", ()=> {
    customersTestimonialsContainer.scrollLeft += 400;
});

customerTestimonialsRightbtnScroll.addEventListener("click", () => {
    customersTestimonialsContainer.scrollLeft -= 400;
});

