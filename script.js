document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('contactForm');
  const msg = document.getElementById('formMessage');

  // Only run on the Contact page where the form exists
  if (!form || !msg) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = form.name.value.trim();
    const email = form.email.value.trim();
    const message = form.message.value.trim();

    // Clear previous message
    msg.textContent = '';
    msg.style.color = '';

    // Required fields
    if (!name || !email || !message) {
      msg.textContent = 'Please fill in all required fields.';
      msg.style.color = '#f97373'; // red
      return;
    }

    // Simple email pattern
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      msg.textContent = 'Please enter a valid email address.';
      msg.style.color = '#f97373';
      return;
    }

    // Message length check
    if (message.length < 10) {
      msg.textContent = 'Please provide a bit more detail in your message.';
      msg.style.color = '#f97373';
      return;
    }

    // Success (demo only)
    msg.textContent = 'Thank you! Your message has been sent (demo).';
    msg.style.color = '#22c55e'; // green
    form.reset();
  });
});