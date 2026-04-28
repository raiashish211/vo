// Automatic sliding images (already handled by CSS)
// Optional: Pause on hover
document.addEventListener('DOMContentLoaded', () => {
  const slider = document.querySelector('.slider-track');
  if (slider) {
    slider.style.animation = 'slideShow 18s infinite ease-in-out';
  }
});