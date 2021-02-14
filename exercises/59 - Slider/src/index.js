function Slider(sliderEl) {
  if (!(sliderEl instanceof Element)) {
    throw new Error('No slider passed in');
  }
  let current;
  let previous;
  let next;

  function applyClasses() {
    current.classList.add('current');
    previous.classList.add('prev');
    next.classList.add('next');
  }

  const slides = sliderEl.querySelector('.slides');
  const prevButton = sliderEl.querySelector('.goToPrev');
  const nextButton = sliderEl.querySelector('.goToNext');

  function startSlider() {
    current = sliderEl.querySelector('.current') || slides.firstElementChild;
    previous = current.previousElementSibling || slides.lastElementChild;
    next = current.nextElementSibling || slides.firstElementChild;
    console.log({ current, previous, next });
  }

  function move(direction) {
    const classesToRemove = ['prev', 'current', 'next'];
    previous.classList.remove(...classesToRemove);
    current.classList.remove(...classesToRemove);
    next.classList.remove(...classesToRemove);

    if (direction === 'back') {
      [previous, current, next] = [
        previous.previousElementSibling || slides.lastElementChild,
        previous,
        current,
      ];
    } else {
      [previous, current, next] = [
        current,
        next,
        next.nextElementSibling || slides.firstElementChild,
      ];
    }
    applyClasses();
  }

  startSlider();
  applyClasses();

  prevButton.addEventListener('click', () => move('back'));
  nextButton.addEventListener('click', move);
}

const slider = document.querySelector('.slider');
const slider2 = document.querySelector('.dog-slider');

const mySlider = Slider(slider);
const dogSlider = Slider(slider2);
