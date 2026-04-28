// Dark/Light Mode Toggle Functionality
(function() {
  // Check for saved theme preference
  const savedTheme = localStorage.getItem('theme');
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  
  // Set initial theme
  if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
    document.documentElement.setAttribute('data-theme', 'dark');
  } else {
    document.documentElement.setAttribute('data-theme', 'light');
  }
  
  // Toggle theme function
  function toggleTheme() {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    
    // Optional: Add animation feedback
    const toggleBtn = document.getElementById('themeToggle');
    if (toggleBtn) {
      toggleBtn.style.transform = 'scale(0.95)';
      setTimeout(() => {
        toggleBtn.style.transform = 'scale(1)';
      }, 200);
    }
  }
  
  // Add event listener to toggle button
  document.addEventListener('DOMContentLoaded', () => {
    const toggleBtn = document.getElementById('themeToggle');
    if (toggleBtn) {
      toggleBtn.addEventListener('click', toggleTheme);
    }
  });
})();