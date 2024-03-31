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
const brandsWrapper = document.querySelector(".brands__wrapper");
const brandsShowAllImg = document.querySelector(".brands__show-all > .show-all__img");
const brandsShowAllText = document.querySelector(".brands__show-all > .show-all__text");

let brandsListShown = false;

const showBrandsButtonOn = function () {
  brandsListShown = true;
  brandsShowAllImg.style.transform = "rotate(180deg)";
  brandsShowAllText.textContent = "Скрыть";
  brandsWrapper.style.height = "100%";

}

const showBrandsButtonOff = function () {
  brandsListShown = false;
  brandsShowAllImg.style.transform = "rotate(0deg)";
  brandsShowAllText.textContent = "Показать все";
  brandsWrapper.style.height = "170px";
}

brandsShowAll.addEventListener('click', function () {
  if (!brandsListShown) {
    showBrandsButtonOn();
  } else {
    showBrandsButtonOff();
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


