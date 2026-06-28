/* ==========================================
   TAILWIND CONFIG
========================================== */
tailwind.config = {
  theme: {
    extend: {
      colors: {
        primary: "#ff8800",
      },
      fontFamily: {
        orbitron: ["Orbitron", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
      },
    },
  },
};

/* ==========================================
   DOCUMENT READY
========================================== */
document.addEventListener("DOMContentLoaded", () => {

  // /* ==========================
  //    MOBILE MENU
  // ========================== */

  // const menuBtn = document.getElementById("menu-btn");
  // const mobileMenu = document.getElementById("mobile-menu");

  // if (menuBtn && mobileMenu) {
  //   menuBtn.addEventListener("click", () => {
  //     mobileMenu.classList.toggle("hidden");
  //   });
  // }
  

  /* ==========================
     CUSTOM CURSOR
  ========================== */

  const cursor = document.querySelector(".cursor");

  if (cursor) {
    window.addEventListener("mousemove", (e) => {
      cursor.style.left = `${e.clientX}px`;
      cursor.style.top = `${e.clientY}px`;
    });
  }

  /* ==========================
     PARTICLES
  ========================== */

  const particles = document.getElementById("particles");

  if (particles) {
    for (let i = 0; i < 70; i++) {

      const span = document.createElement("span");

      const size = Math.random() * 5 + 2;

      span.style.width = `${size}px`;
      span.style.height = `${size}px`;

      span.style.left = `${Math.random() * 100}%`;
      span.style.top = `${Math.random() * 100}%`;

      span.style.opacity = Math.random() * 0.6 + 0.2;

      span.style.animationDuration = `${Math.random() * 15 + 10}s`;
      span.style.animationDelay = `${Math.random() * 8}s`;

      particles.appendChild(span);
    }
  }

  /* ==========================
     TYPING EFFECT
  ========================== */

  const typingText = document.getElementById("typing-text");

  if (typingText) {

    const words = [
      "Full Stack Developer",
      "Frontend Designer",
      "PHP & MySQL Developer",
      "Modern UI Creator",
    ];

    let wordIndex = 0;
    let charIndex = 0;
    let deleting = false;

    function typeEffect() {

      const currentWord = words[wordIndex];

      if (!deleting) {
        typingText.textContent = currentWord.substring(0, charIndex++);
      } else {
        typingText.textContent = currentWord.substring(0, charIndex--);
      }

      let speed = deleting ? 50 : 100;

      if (!deleting && charIndex === currentWord.length + 1) {
        deleting = true;
        speed = 1500;
      }

      if (deleting && charIndex === 0) {
        deleting = false;
        wordIndex = (wordIndex + 1) % words.length;
      }

      setTimeout(typeEffect, speed);
    }

    typeEffect();
  }

  /* ==========================
     LOAD HTML SECTIONS
  ========================== */

  async function loadSection(containerId, filePath) {

    try {

      const response = await fetch(filePath);

      if (!response.ok) {
        throw new Error(`Could not load ${filePath}`);
      }

      const html = await response.text();

      const container = document.getElementById(containerId);

      if (container) {
        container.innerHTML = html;
      }

    } catch (error) {

      console.error(error);

    }

  }

  loadSection("about-section", "about.html");
  loadSection("skills-section", "skills.html");
  loadSection("services-section", "services.html");
  loadSection("projects-section", "projects.html");
  loadSection("testimonials-section", "testimonials.html");

});

const menuBtn = document.getElementById("menu-btn");
const mobileMenu = document.getElementById("mobile-menu");

menuBtn.addEventListener("click", () => {

  if (mobileMenu.classList.contains("max-h-0")) {

    mobileMenu.classList.remove("max-h-0", "opacity-0");
    mobileMenu.classList.add("max-h-96", "opacity-100");

  } else {

    mobileMenu.classList.remove("max-h-96", "opacity-100");
    mobileMenu.classList.add("max-h-0", "opacity-0");

  }

});
document.querySelectorAll("#mobile-menu a").forEach(link => {

  link.addEventListener("click", () => {

    mobileMenu.classList.remove("max-h-96", "opacity-100");
    mobileMenu.classList.add("max-h-0", "opacity-0");

  });

});