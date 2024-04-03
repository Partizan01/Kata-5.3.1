const tablet = window.matchMedia("(min-width: 768px)");
const activeClasses = document.querySelectorAll(".slide");

let brandSwiper = new Swiper('.brands__container', {
  pagination: {
    el: '.brands__pagination',
    clickable: true
  },
  direction: "horizontal",
  spaceBetween: 16,
  width: 224,
  init: false
})

const brandsShowAll = document.querySelector('.brands__show-all');

brandsShowAll.addEventListener('click', (e) => {
    e.preventDefault;
    const buttonText = document.querySelector('.show-all__text');
    const brandsWrapper = document.querySelector(".brands__container");
    buttonText.textContent = buttonText.textContent === 'Показать все' ? 'Скрыть' : 'Показать все';
    buttonText.classList.toggle('rotate180');
    brandsWrapper.classList.toggle('expanded');
})

for (let i = 0; i < activeClasses.length; i++) {
  if (!tablet.matches) {
    brandSwiper.init();
    }
}

tablet.addEventListener('change', (e) => {
    for (let i = 0; i < activeClasses.length; i++) {
      if (e.matches) {
        activeClasses[i].classList.remove('swiper-slide');
        brandSwiper.destroy();
      } else {
        activeClasses[i].classList.add('swiper-slide');
        brandSwiper.init();
      }
    }
  });


