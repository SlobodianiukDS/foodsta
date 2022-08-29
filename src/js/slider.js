let offset = 0;
const sliderLine = document.querySelector('.slider__carousel');

document
  .querySelector('.button-roul--bef')
  .addEventListener('click', function () {
    offset = offset + 100 / 3;
    if (offset > 68) {
      offset = 0;
    }
    sliderLine.style.transform = 'translateX(' + -offset + '%)';
  });

document
  .querySelector('.button-roul--aft')
  .addEventListener('click', function () {
    offset = offset - 33.33333;
    if (offset < 0) {
      offset = 66.66666;
    }
    sliderLine.style.transform = 'translateX(' + -offset + '%)';
  });
