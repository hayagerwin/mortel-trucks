// Navbar scroll effect
window.addEventListener("scroll", function () {
  const navbar = document.getElementById("navbar");
  if (window.scrollY > 100) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});

// Scroll animations
const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -50px 0px",
};

const observer = new IntersectionObserver(function (entries) {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("animated");
    }
  });
}, observerOptions);

document.querySelectorAll(".animate-on-scroll").forEach((el) => {
  observer.observe(el);
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  });
});

// Form submission
document.querySelector(".contact-form").addEventListener("submit", function (e) {
  e.preventDefault();
  const btn = this.querySelector(".submit-btn");
  const originalText = btn.textContent;
  btn.textContent = "Sending...";
  btn.style.background = "#28a745";

  setTimeout(() => {
    btn.textContent = "Message Sent!";
    setTimeout(() => {
      btn.textContent = originalText;
      btn.style.background = "";
      this.reset();
    }, 2000);
  }, 1500);
});
