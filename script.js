// Simple “fake” submit handler:
document.getElementById('contact-form').addEventListener('submit', function(e) {
  e.preventDefault();
  const status = document.getElementById('status');
  status.textContent = 'Sending…';
  // Simulate network delay
  setTimeout(() => {
    status.textContent = 'Thanks for your message! I’ll get back to you soon.';
    this.reset();
  }, 1500);
});

// Smooth scroll for nav links
document.querySelectorAll('.navbar .menu a').forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href'))
      .scrollIntoView({ behavior: 'smooth' });
  });
});
