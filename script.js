// Make the header sticky on scroll
const header = document.querySelector("header");

window.addEventListener("scroll", function () {
  header.classList.toggle("sticky", window.scrollY > 0);
});

// Toggle mobile menu visibility
let menu = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");

menu.onclick = () => {
  menu.classList.toggle("bx-x");
  navbar.classList.toggle("active");
};

// Remove mobile menu when scrolling
window.onscroll = () => {
  menu.classList.remove("bx-x");
  navbar.classList.remove("active");
};

// Smooth scrolling functionality
document.addEventListener('DOMContentLoaded', function () {
  const scroll = new SmoothScroll('a[href*="#"]', {
    speed: 800,
    speedAsDuration: true
  });
});

// Ensure the CV download works (placeholder function, ensure the download link is correct)
document.querySelector('.d-btn').addEventListener('click', function () {
  // No additional code needed as the link itself handles the download
  // If any additional functionality is needed, it can be added here
});

// Responsive Navbar - Close menu on link click
const navLinks = document.querySelectorAll('.navbar a');
navLinks.forEach(link => {
  link.addEventListener('click', () => {
    menu.classList.remove("bx-x");
    navbar.classList.remove("active");
  });
});


document.addEventListener("DOMContentLoaded", function () {
  const scrollToTopBtn = document.getElementById("scrollToTop");

  // Show the button when scrolled down 100px from the top of the document
  window.addEventListener("scroll", function () {
    if (window.scrollY > 100) {
      scrollToTopBtn.style.display = "block";
    } else {
      scrollToTopBtn.style.display = "none";
    }
  });

  // Smooth scroll to top when the button is clicked
  scrollToTopBtn.addEventListener("click", function () {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });
});


