function Slider(sliderEl) {
  this.sliderEl = sliderEl;

  if (!(sliderEl instanceof Element)) {
    throw new Error('No slider passed in');
  }

  this.slides = sliderEl.querySelector('.slides');
  this.prevButton = sliderEl.querySelector('.goToPrev');
  this.nextButton = sliderEl.querySelector('.goToNext');

  this.move = this.move.bind(this);

  this.startSlider();
  this.applyClasses();

  this.prevButton.addEventListener('click', () => this.move('back'));
  this.nextButton.addEventListener('click', this.move);
}

Slider.prototype.applyClasses = function() {
  this.current.classList.add('current');
  this.previous.classList.add('prev');
  this.next.classList.add('next');
};

Slider.prototype.startSlider = function() {
  this.current =
    this.sliderEl.querySelector('.current') || this.slides.firstElementChild;
  this.previous =
    this.current.previousElementSibling || this.slides.lastElementChild;
  this.next = this.current.nextElementSibling || this.slides.firstElementChild;
  console.log({
    current: this.current,
    previous: this.previous,
    next: this.next,
  });
};

Slider.prototype.move = function(direction) {
  const classesToRemove = ['prev', 'current', 'next'];
  this.previous.classList.remove(...classesToRemove);
  this.current.classList.remove(...classesToRemove);
  this.next.classList.remove(...classesToRemove);

  if (direction === 'back') {
    [this.previous, this.current, this.next] = [
      this.previous.previousElementSibling || this.slides.lastElementChild,
      this.previous,
      this.current,
    ];
  } else {
    [this.previous, this.current, this.next] = [
      this.current,
      this.next,
      this.next.nextElementSibling || this.slides.firstElementChild,
    ];
  }
  this.applyClasses();
};

const mySlider = new Slider(document.querySelector('.slider'));
const dogSlider = new Slider(document.querySelector('.dog-slider'));
