lucide.createIcons();

// Auto-update copyright year
document.getElementById('current-year').textContent = new Date().getFullYear();

// Mobile Menu Toggle
const mobileMenuBtn = document.getElementById('mobile-menu-btn');
const mobileMenu = document.getElementById('mobile-menu');
const menuIcon = document.getElementById('menu-icon');
const closeIcon = document.getElementById('close-icon');

mobileMenuBtn.addEventListener('click', () => {
  const isActive = mobileMenu.classList.contains('active');

  if (isActive) {
    mobileMenu.classList.remove('active');
    menuIcon.classList.remove('hidden');
    closeIcon.classList.add('hidden');
  } else {
    mobileMenu.classList.add('active');
    menuIcon.classList.add('hidden');
    closeIcon.classList.remove('hidden');
  }
});

const mobileLinks = document.querySelectorAll('.mobile-link');
mobileLinks.forEach(link => {
  link.addEventListener('click', () => {
    mobileMenu.classList.remove('active');
    menuIcon.classList.remove('hidden');
    closeIcon.classList.add('hidden');
  });
});

// Intersection Observer for scroll-triggered animations
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('animate-visible');
      // Optional: Stop observing after animation triggers once
      observer.unobserve(entry.target);
    }
  });
}, observerOptions);

// Observe all elements with animation classes
const animatedElements = document.querySelectorAll(
  '.animate-fadeInUp, .animate-fadeIn, .animate-slideInLeft, .animate-slideInRight, .animate-scaleIn'
);

animatedElements.forEach(element => {
  observer.observe(element);
});