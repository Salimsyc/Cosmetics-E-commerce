let slideIndex = 0;

function moveCarousel(n) {
  console.log("Move carousel called");
  slideIndex += n;
  const slides = document.querySelectorAll('.text');
  if (slideIndex >= slides.length) {
    slideIndex = 0;
  }
  if (slideIndex < 0) {
    slideIndex = slides.length - 1;
  }
  const offset = -slideIndex * 100;
  document.querySelector('.text-carousel').style.transform = `translateX(${offset}%)`;
  console.log("Offset:", offset);
}
