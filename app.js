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
