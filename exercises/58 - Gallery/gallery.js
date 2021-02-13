function Gallery(gallery) {
  if (!gallery) {
    throw new Error('Gallery reference not passed');
  }

  const images = Array.from(gallery.querySelectorAll('img'));
  const modal = document.querySelector('.modal');
  const prevButton = modal.querySelector('.prev');
  const nextButton = modal.querySelector('.next');
  let currentImage;

  function showNextImage() {
    showImage(currentImage.nextElementSibling || gallery.firstElementChild);
  }

  function showPrevImage() {
    showImage(currentImage.previousElementSibling || gallery.lastElementChild);
  }

  function openModal() {
    if (modal.matches('.open')) return;
    console.log('open modal', modal);
    modal.classList.add('open');

    nextButton.addEventListener('click', showNextImage);
    prevButton.addEventListener('click', showPrevImage);
  }

  function closeModal() {
    modal.classList.remove('open');
    nextButton.removeEventListener('click', showNextImage);
    prevButton.removeEventListener('click', showPrevImage);
  }

  function handleClickOutside(event) {
    if (event.target === event.currentTarget) {
      closeModal();
    }
  }

  function handleKeyUp(event) {
    if (event.key === 'Escape') return closeModal();
    if (event.key === 'ArrowRight') return showNextImage();
    if (event.key === 'ArrowLeft') return showPrevImage();
  }

  function showImage(el) {
    if (!el) {
      return console.info('no image to show');
    }
    modal.querySelector('img').src = el.src;
    modal.querySelector('h2').textContent = el.title;
    modal.querySelector('figure p').textContent = el.dataset.description;
    currentImage = el;
    openModal();
  }

  images.forEach(img => {
    img.addEventListener('click', event => showImage(event.currentTarget));
  });

  images.forEach(img => {
    img.addEventListener('keyup', event => {
      if (event.key === 'Enter') showImage(event.currentTarget);
    });
  });

  modal.addEventListener('click', handleClickOutside);
  window.addEventListener('keyup', handleKeyUp);
}

const gallery1 = Gallery(document.querySelector('.gallery1'));
const gallery2 = Gallery(document.querySelector('.gallery2'));
