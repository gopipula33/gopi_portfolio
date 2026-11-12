const words = ["Python", "Machine Learning", "Web Development", "SQL"];
const typedWord = document.getElementById("typedWord");
let wordIndex = 0;
let charIndex = words[0].length;
let deleting = false;

function typeEffect() {
  const current = words[wordIndex];
  if (!deleting) {
    charIndex++;
    typedWord.textContent = current.slice(0, charIndex);
    if (charIndex >= current.length) {
      deleting = true;
      setTimeout(typeEffect, 1150);
      return;
    }
  } else {
    charIndex--;
    typedWord.textContent = current.slice(0, charIndex);
    if (charIndex <= 0) {
      deleting = false;
      wordIndex = (wordIndex + 1) % words.length;
    }
  }
  setTimeout(typeEffect, deleting ? 55 : 105);
}
setTimeout(typeEffect, 1400);

const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");
menuToggle.addEventListener("click", () => {
  const isOpen = navLinks.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(isOpen));
  menuToggle.textContent = isOpen ? "✕" : "☰";
});
navLinks.querySelectorAll("a").forEach(link => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.textContent = "☰";
  });
});

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });
document.querySelectorAll(".reveal").forEach(element => observer.observe(element));
document.getElementById("year").textContent = new Date().getFullYear();
