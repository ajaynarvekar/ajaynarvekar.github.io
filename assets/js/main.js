/*
 * Main JavaScript for Ajay Narvekar's personal portfolio site
 *
 * This script handles toggling between light and dark themes,
 * showing and hiding the mobile navigation menu and updating
 * the footer year automatically. It saves the user's preferred
 * theme in localStorage so that the choice persists across visits.
 */

document.addEventListener('DOMContentLoaded', () => {
  const darkModeToggle = document.getElementById('dark-mode-toggle');
  const navToggleLabel = document.querySelector('.nav-toggle-label');
  const navLinks = document.querySelector('nav ul');

  // Apply saved theme preference on load
  const savedMode = localStorage.getItem('darkMode');
  if (savedMode === 'true') {
    document.body.classList.add('dark-mode');
  }

  // Initialise the dark mode button with an icon depending on the state
  function updateDarkModeButton() {
    const isDark = document.body.classList.contains('dark-mode');
    // Use emoji icons for visual indication
    darkModeToggle.textContent = isDark ? '☀️' : '🌙';
    darkModeToggle.setAttribute('aria-label', isDark ? 'Switch to light mode' : 'Switch to dark mode');
  }
  updateDarkModeButton();

  // Toggle dark mode when the button is clicked
  darkModeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    const isDark = document.body.classList.contains('dark-mode');
    localStorage.setItem('darkMode', isDark);
    updateDarkModeButton();
  });

  // Toggle navigation menu on small screens
  if (navToggleLabel && navLinks) {
    navToggleLabel.addEventListener('click', () => {
      navLinks.classList.toggle('active');
    });
  }

  // Update the year in the footer
  const yearSpan = document.getElementById('current-year');
  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
  }
});