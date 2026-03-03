function scrollToSection(id) {
  document.getElementById(id).scrollIntoView({ behavior: "smooth" });
}

// Scroll-triggered animations
const sections = document.querySelectorAll("section");
const bars = document.querySelectorAll(".progress-bar");

window.addEventListener("scroll", () => {
  const trigger = window.innerHeight / 1.3;

  sections.forEach((section) => {
    const top = section.getBoundingClientRect().top;
    if (top < trigger) {
      section.classList.add("active");
    }
  });

  bars.forEach((bar) => {
    const top = bar.getBoundingClientRect().top;
    if (top < window.innerHeight) {
      bar.style.width = bar.dataset.width;
    }
  });
});

console.log("CV Website Loaded");

// Smooth reveal for sections on page load
document.addEventListener("DOMContentLoaded", () => {
  function revealSections() {
    sections.forEach((section) => {
      const position = section.getBoundingClientRect().top;
      if (position < window.innerHeight - 120) {
        section.classList.add("visible");
      }
    });
  }
  window.addEventListener("scroll", revealSections);
  revealSections();
});

// ======================
// Hamburger Menu Toggle
// ======================
const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("nav-links");

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("active");
  hamburger.classList.toggle("open");
});

// Close menu when any link is clicked (mobile)
navLinks.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    if (navLinks.classList.contains("active")) {
      navLinks.classList.remove("active");
      hamburger.classList.remove("open");
    }
  });
});

// =======================
// ESSAY UPLOAD
// =======================
const essayUpload = document.getElementById("essayUpload");
const essayList = document.getElementById("essayList");

essayUpload?.addEventListener("change", function () {
  const file = this.files[0];
  if (file) {
    const fileURL = URL.createObjectURL(file);
    const essayCard = document.createElement("div");
    essayCard.className = "project";
    essayCard.innerHTML = `<h4>${file.name}</h4>
      <a href="${fileURL}" download>Download Essay</a>`;
    essayList?.appendChild(essayCard);
  }
});

// =======================
// VIDEO UPLOAD
// =======================
const videoUpload = document.getElementById("videoUpload");
const videoList = document.getElementById("videoList");

videoUpload?.addEventListener("change", function () {
  const file = this.files[0];
  if (file) {
    const fileURL = URL.createObjectURL(file);
    const videoCard = document.createElement("div");
    videoCard.className = "project";
    videoCard.innerHTML = `<h4>${file.name}</h4>
      <video width="100%" controls class="portrait-video">
        <source src="${fileURL}" type="${file.type}">
      </video>`;
    videoList?.appendChild(videoCard);
  }
});
