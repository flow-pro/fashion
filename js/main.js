var menuButton = document.querySelector(".menu-button");
menuButton.addEventListener("click", function () {
  document
    .querySelector(".header-menu")
    .classList.toggle("header-menu--visible");
});
