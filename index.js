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
const buttonText = document.querySelector('.show-all__text');
const brandsWrapper = document.querySelector(".brands__container");

brandsShowAll.addEventListener('click', () => {
    buttonText.classList.toggle('rotate180');
    brandsWrapper.classList.toggle('expanded');

    if (buttonText.classList.contains('rotate180')) {
        buttonText.textContent = 'Скрыть';
    } else {
        buttonText.textContent = 'Показать все';
    }
});

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


