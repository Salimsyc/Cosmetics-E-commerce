document.addEventListener("DOMContentLoaded", () => {
    const carousel = new CarouselText();
    carousel.init();
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
