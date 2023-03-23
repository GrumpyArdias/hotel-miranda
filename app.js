const burguerbutton = document.querySelector(".header__burguer__menu");
const closeIcon = document.querySelector("#header__burguer__menu__close__icon");
const burguerMenuIcon = document.querySelector("#header__burguer__menu__icon");
const popUpMenu = document.querySelector(".pop__up__menu");
let menuOpen = false;

console.log(burguerbutton);

// Burguer menu functionality
burguerbutton.addEventListener("click", () => {
  if (menuOpen) {
    popUpMenu.style.display = "none";
    burguerMenuIcon.style.display = "block";
    closeIcon.style.display = "none";
    menuOpen = false;
  } else {
    popUpMenu.style.display = "block";

    burguerMenuIcon.style.display = "none";
    closeIcon.style.display = "block";
    menuOpen = true;
  }
});

//Swipers

const swiper = new Swiper(".swiper", {
  // Optional parameters
  direction: "horizontal",
  loop: true,

  pagination: {
    el: ".swiper-pagination",
  },

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  scrollbar: {
    el: ".swiper-scrollbar",
  },
});

const swiperFeatures = new Swiper(".swiper-features", {
  // Optional parameters
  direction: "horizontal",

  pagination: {
    el: ".swiper-pagination",
  },

  scrollbar: {
    el: ".swiper-scrollbar",
  },
});

const swiperMenu = new Swiper(".swiper-menu", {
  // Optional parameters
  direction: "horizontal",

  pagination: {
    el: ".swiper-pagination",
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  scrollbar: {
    el: ".swiper-scrollbar",
  },
});
