// Знаходимо кнопку і навігацію
const menuToggle = document.querySelector(".menu-toggle");
const nav = document.querySelector("nav");
const navLinks = document.querySelectorAll("nav a");

// Відкриття/закриття меню
menuToggle.addEventListener("click", () => {
  nav.classList.toggle("active");
});

// Закриття меню при кліку на будь-який пункт
navLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    // Плавний скрол до розділу
    const targetId = link.getAttribute("href");
    const targetSection = document.querySelector(targetId);
    if (targetSection) {
      e.preventDefault(); // зупиняємо дефолтну поведінку
      targetSection.scrollIntoView({ behavior: "smooth" });
    }
    // Закриваємо меню
    nav.classList.remove("active");
  });
});

// Закриття меню при кліку поза пунктами
nav.addEventListener("click", (e) => {
  if (e.target === nav) {
    // якщо клік по самому затемненню
    nav.classList.remove("active");
  }
});
