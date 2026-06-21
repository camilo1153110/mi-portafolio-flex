const menuBtn = document.getElementById("menuBtn");
const menu = document.getElementById("menuBtn");

menuBtn.addEventListener("click", function () {
  menu.classList.toggle("activo");
});

const enlaces = document.querySelectorAll(".nav a");

enlaces.forEach((enlace) => {
  enlace.addEventListener("click", function () {
    menu.classList.remove("activo");
  });
});