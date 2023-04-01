import { SlideNav } from './slide.js';

const slide = new SlideNav('.slide', '.wrapper')
slide.init()
slide.addArrow('.prev', '.next')

slide.addControl('.custom-controls')

function showButton() {
  if(window.scrollY <= 150) {
     document.querySelector('.back-top img').style.display = 'none';
  } else {
     document.querySelector('.back-top img').style.display = 'block';
  }
}

function animaScroll() {
   const sections = document.querySelectorAll('.js-scroll')
   const windowMetade = window.innerHeight * 0.7
   sections.forEach((section) => {
      const sectionTop = section.getBoundingClientRect().top - windowMetade
      if (sectionTop < 0) {
         section.classList.add('anima-ativo')
      }
   })
 }

window.addEventListener('scroll', showButton);
window.addEventListener('scroll', animaScroll);
document.querySelector('.back-top img').addEventListener('click', slide.subirTela)
