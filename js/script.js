const btn = document.querySelector(".toggle_btn");
const nav = document.querySelector(".nav");

btn.onclick = function () {
  nav.classList.toggle("nav_open");
};
