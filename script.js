// Get theme toggle button
const themeToggleBtn = document.getElementById('theme-toggle');

// Toggle dark mode class on <html> element for Tailwind
themeToggleBtn.addEventListener('click', () => {
  document.documentElement.classList.toggle('dark');
  
  // Switch button icon between moon and sun
  if (document.documentElement.classList.contains('dark')) {
    themeToggleBtn.textContent = '☀️';
  } else {
    themeToggleBtn.textContent = '🌙';
  }
});