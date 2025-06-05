document.addEventListener('DOMContentLoaded', () => {
    const socialToggle = document.querySelector('.social-toggle');
    const socialIcons = document.querySelector('.social-icons');

    socialToggle.addEventListener('click', () => {
      socialIcons.classList.toggle('active');
    });
  });

// Toggle menu
const toggleBtn = document.getElementById('menu-toggle');
const navbar = document.getElementById('navbar');

toggleBtn.addEventListener('click', () => {
  navbar.classList.toggle('active');
});