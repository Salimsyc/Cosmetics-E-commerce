document.addEventListener("DOMContentLoaded", () => {
    const carousel = new CarouselText();
    carousel.init();
    
    const testimonialsCarousel = new CarouselTestimonials();
    testimonialsCarousel.init();
});

class CarouselText {
    constructor() {
        this.currentCarouselText = 0;
        this.prevBtn = document.querySelector(".carousel-text-left-controller");
        this.nextBtn = document.querySelector(".carousel-text-right-controller");
        this.carouselItems = document.querySelectorAll(".carousel-content");
    }
    
    init() {
        this.showCurrentItem();
        this.prevBtn.addEventListener("click", () => this.showPrevItem());
        this.nextBtn.addEventListener("click", () => this.showNextItem());
        
        // Optionally start auto advance
        setInterval(() => this.showNextItem(), 3000);
    }
    
    showCurrentItem() {
        this.carouselItems.forEach((item, index) => {
            item.classList.toggle('active', index === this.currentCarouselText);
        });
    }
    
    showNextItem() {
        this.currentCarouselText = (this.currentCarouselText + 1) % this.carouselItems.length;
        this.showCurrentItem();
    }
    
    showPrevItem() {
        this.currentCarouselText = (this.currentCarouselText - 1 + this.carouselItems.length) % this.carouselItems.length;
        this.showCurrentItem();
        
    }
}


// ================================ class for the testimonials controlls

class CarouselTestimonials {
    constructor() {
        this.container = document.getElementById("customers-container");
        this.cards = this.container.querySelectorAll(".customer-card");
        this.cardWidth = this.cards.length > 0 ? this.cards[0].offsetWidth + 20 : 0; // Assuming card width with margin
        this.visibleCards = 5; // Number of visible cards
        this.scrollAmount = 0;
        this.init();
    }

    init() {
        this.rightBtn = document.querySelector(".testimonials-rightbtn-scroll");
        this.leftBtn = document.querySelector(".testimonials-leftbtn-scroll");

        this.rightBtn.addEventListener('click', () => {
            this.moveCarousel(-1); // Move carousel to the left
        });
        this.leftBtn.addEventListener('click', () => {
            this.moveCarousel(1); // Move carousel to the right
        });
    }
    
    moveCarousel(direction) {
        const maxScroll = (this.cards.length - this.visibleCards) * this.cardWidth;
        
        this.scrollAmount += direction * this.cardWidth * this.visibleCards;

        if (this.scrollAmount < 0) {
            this.scrollAmount = 0;
        } else if (this.scrollAmount > maxScroll) {
            this.scrollAmount = maxScroll;
        }

        this.container.style.transform = `translateX(-${this.scrollAmount}px)`;
    }
}