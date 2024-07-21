document
  .querySelector(".hamburger-menu")
  .addEventListener("click", function () {
    this.classList.toggle("active");
    document.querySelector(".main-nav").classList.toggle("active");
    document.querySelector(".search-bar").classList.toggle("active");
  });
