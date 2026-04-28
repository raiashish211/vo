document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('contactForm');
  const feedback = document.getElementById('formFeedback');
  
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = document.getElementById('contactName')?.value.trim();
      const email = document.getElementById('contactEmail')?.value.trim();
      const msg = document.getElementById('contactMsg')?.value.trim();
      
      if (name && email && msg) {
        feedback.innerHTML = '✅ Thank you! Vinayak Overseas team will contact you within 24 hours.';
        feedback.style.color = '#16a34a';
        feedback.style.padding = 'var(--spacing-sm)';
        form.reset();
        setTimeout(() => { feedback.innerHTML = ''; }, 5000);
      } else {
        feedback.innerHTML = '⚠️ Please fill all required fields.';
        feedback.style.color = 'var(--primary-red)';
        feedback.style.padding = 'var(--spacing-sm)';
        setTimeout(() => { feedback.innerHTML = ''; }, 3000);
      }
    });
  }
});