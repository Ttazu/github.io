// 1) CONTACT FORM HANDLER WITH SPINNER & TOAST
const form     = document.getElementById('contact-form');
const btn      = form.querySelector('button');
const toast    = document.createElement('div');

toast.className = 'toast';
document.body.appendChild(toast);

form.addEventListener('submit', async function(e) {
  e.preventDefault();
  // disable button + add spinner
  btn.disabled = true;
  btn.innerHTML = `<span class="spinner"></span> Sending...`;

  // simulate network delay
  await new Promise(res => setTimeout(res, 1500));

  // show toast
  toast.textContent = '✅ Message sent! I’ll get back shortly.';
  toast.classList.add('visible');
  setTimeout(() => toast.classList.remove('visible'), 3000);

  // reset form + button
  this.reset();
  btn.disabled = false;
  btn.textContent = 'Send Message';
});

// 2) SMOOTH SCROLL & ACTIVE LINK HIGHLIGHT
const links = document.querySelectorAll('.navbar .menu a');
const sections = Array.from(links).map(l => document.querySelector(l.hash));

links.forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    // smooth scroll
    document.querySelector(link.hash)
      .scrollIntoView({ behavior: 'smooth', block: 'start' });
  });
});

// IntersectionObserver to highlight active menu item
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    const idx = sections.indexOf(entry.target);
    if (idx > -1) {
      links[idx].classList.toggle('active', entry.isIntersecting);
    }
  });
}, { threshold: 0.6 });

sections.forEach(sec => observer.observe(sec));

// 3) FADE‑IN ANIMATION ON SCROLL
const faders = document.querySelectorAll('.section, .card');
const appearOptions = { threshold: 0.2, rootMargin: '0px 0px -50px 0px' };

const appearOnScroll = new IntersectionObserver((entries, obs) => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    entry.target.classList.add('appear');
    obs.unobserve(entry.target);
  });
}, appearOptions);

faders.forEach(el => {
  el.classList.add('fade');
  appearOnScroll.observe(el);
});
