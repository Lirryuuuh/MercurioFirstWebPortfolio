document.addEventListener("DOMContentLoaded", function () {
  // Typewriter effect
  const wordEl = document.getElementById("typewriter-word");
  const words = ["Developer", "Designer"];
  let wordIndex = 0;
  let charIndex = 0;
  let isDeleting = false;

  function typeWriterEffect() {
    const currentWord = words[wordIndex];

    if (isDeleting) {
      charIndex--;
      wordEl.textContent = currentWord.substring(0, charIndex);
    } else {
      charIndex++;
      wordEl.textContent = currentWord.substring(0, charIndex);
    }

    if (!isDeleting && charIndex === currentWord.length) {
      setTimeout(() => isDeleting = true, 1500);
    } else if (isDeleting && charIndex === 0) {
      isDeleting = false;
      wordIndex = (wordIndex + 1) % words.length;
    }

    const speed = isDeleting ? 50 : 120;
    setTimeout(typeWriterEffect, speed);
  }

  typeWriterEffect();

  // Fade in sections on scroll
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  }, { threshold: 0.2 });

  document.querySelectorAll(".fade-section, .fade-up").forEach((section) => {
    observer.observe(section);
  });

  // Dark mode toggle (desktop)
  const toggleBtn = document.getElementById("mode-toggle");
  if (toggleBtn) {
    const icon = toggleBtn.querySelector("i");
    toggleBtn.addEventListener("click", () => {
      document.body.classList.toggle("dark-mode");

      if (document.body.classList.contains("dark-mode")) {
        icon?.classList.replace("fa-moon", "fa-sun");
      } else {
        icon?.classList.replace("fa-sun", "fa-moon");
      }
    });
  }

  // Mobile menu toggle
  const hamburger = document.getElementById("hamburger");
const mobileMenu = document.getElementById("mobileMenu");

if (hamburger && mobileMenu) {
  hamburger.addEventListener("click", () => {
    const isOpen = mobileMenu.classList.contains("open");

    if (isOpen) {
      mobileMenu.classList.remove("open");
      document.body.classList.remove("menu-open"); // Restore nav z-index or scroll
    } else {
      mobileMenu.classList.add("open");
      document.body.classList.add("menu-open"); // Push nav behind or disable scroll
    }
  });
}

// Optional: close menu when any link is clicked
document.querySelectorAll(".mobile-menu .menu-links a").forEach(link => {
  link.addEventListener("click", () => {
    mobileMenu.classList.remove("open");
    document.body.classList.remove("menu-open");
  });
});


  // Mobile dark mode toggle (optional if separate icon)
  const mobileDarkToggle = document.getElementById("mobileDarkToggle");
  if (mobileDarkToggle) {
    mobileDarkToggle.addEventListener("click", () => {
      document.body.classList.toggle("dark-mode");
    });
  }
});



