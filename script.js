// Smooth fade-in effect on scroll
const sections = document.querySelectorAll('.section');

window.addEventListener('scroll', () => {
  sections.forEach((sec) => {
    const rect = sec.getBoundingClientRect();
    if (rect.top < window.innerHeight - 100) {
      sec.style.opacity = 1;
      sec.style.transform = 'translateY(0)';
    }
  });
});

// Initial state
sections.forEach((sec) => {
  sec.style.opacity = 0;
  sec.style.transform = 'translateY(50px)';
  sec.style.transition = 'all 0.6s ease-out';
});

