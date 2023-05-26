const hamburger = document.querySelector('.hamburger');
const menu = document.querySelector('.menu');

hamburger.addEventListener('click', () => {
  menu.classList.toggle('open');
});

// const descriptionQuestion = document
//   .querySelector('.description__question')
//   .textContent.toUpperCase();
