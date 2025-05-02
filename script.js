// script.js – Handles dark mode toggle and mobile navigation

document.addEventListener('DOMContentLoaded', function () {
  // Dark mode toggle
  const darkModeToggle = document.getElementById('darkModeToggle');
  const body = document.body;
  darkModeToggle.addEventListener('click', function () {
    body.classList.toggle('dark');
    // Optionally, persist mode in localStorage
    if (body.classList.contains('dark')) {
      localStorage.setItem('theme', 'dark');
    } else {
      localStorage.setItem('theme', 'light');
    }
  });
  // Load theme from localStorage
  if (localStorage.getItem('theme') === 'dark') {
    body.classList.add('dark');
  }

  // Mobile nav toggle
  const navToggle = document.querySelector('.nav-toggle');
  const navLinks = document.querySelector('.nav-links');
  navToggle.addEventListener('click', function () {
    navLinks.classList.toggle('open');
  });
});
