// Знаходимо кнопку і навігацію
const menuToggle = document.querySelector(".menu-toggle");
const nav = document.querySelector("nav");
const navLinks = document.querySelectorAll("nav a");
const heartsContainer = document.querySelector(".hearts-container");

// Відкриття/закриття меню
menuToggle.addEventListener("click", () => {
  nav.classList.toggle("active");

  const count = 660; // кількість сердечок

  for (let i = 0; i < count; i++) {
    const heart = document.createElement("span");
    heart.classList.add("heart");
    heart.textContent = "❤️";

    // Випадкова стартова позиція по горизонталі
    heart.style.left = `${Math.random() * 100}%`;

    // Випадкова швидкість анімації
    heart.style.animationDuration = `${1.8 + Math.random() * 1.7}s`;

    // Випадкове масштабування
    heart.style.transform = `scale(${1.5 + Math.random() * 0.5})`;

    // Випадкове горизонтальне коливання
    heart.style.setProperty("--rand", Math.random());

    heartsContainer.appendChild(heart);

    heart.addEventListener("animationend", () => heart.remove());
  }
});

// Закриття меню при кліку на будь-який пункт
navLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    const targetId = link.getAttribute("href");
    const targetSection = document.querySelector(targetId);
    if (targetSection) {
      e.preventDefault();
      targetSection.scrollIntoView({ behavior: "smooth" });
    }
    nav.classList.remove("active");
  });
});

// Закриття меню при кліку поза пунктами
nav.addEventListener("click", (e) => {
  if (e.target === nav) {
    nav.classList.remove("active");
  }
});
