class Slider {
  constructor() {
    this.slides = document.querySelectorAll(".slides img");
    this.prevBtn = document.querySelector("#prev");
    this.nextBtn = document.querySelector("#next");

    this.current = 0;

    this.init();
  }

  init() {
    this.show(this.current);

    this.prevBtn.addEventListener("click", () => this.previous());
    this.nextBtn.addEventListener("click", () => this.next());
  }

  show(index) {
    this.slides.forEach((slide) => slide.classList.remove("active"));

    this.slides[index].classList.add("active");
  }

  next() {
    this.current = (this.current + 1) % this.slides.length;
    this.show(this.current);
  }

  previous() {
    this.current = (this.current - 1 + this.slides.length) % this.slides.length;

    this.show(this.current);
  }
}

document.addEventListener("DOMContentLoaded", () => {
  new Slider();
});
