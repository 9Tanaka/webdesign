const navElement = document.querySelector(".navbar-collapse");
const hamburger = document.querySelector(".hamburger");

hamburger.addEventListener("click", () => {
    navElement.classList.toggle("active");
    hamburger.classList.toggle("open");
});