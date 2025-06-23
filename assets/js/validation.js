import { showToast } from './notifications.js';

document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('contactForm');

  form.addEventListener('submit', function (e) {
    e.preventDefault();

    const naam = document.getElementById('naam');
    const email = document.getElementById('email');
    const dienst = document.getElementById('dienst');
    const onderwerp = document.getElementById('onderwerp');

    let valid = true;

    if (naam.value.trim() === "") {
      document.getElementById('error-naam').classList.remove('hidden');
      valid = false;
    } else {
      document.getElementById('error-naam').classList.add('hidden');
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email.value.trim())) {
      document.getElementById('error-email').classList.remove('hidden');
      valid = false;
    } else {
      document.getElementById('error-email').classList.add('hidden');
    }

    if (!dienst.value) {
      document.getElementById('error-dienst').classList.remove('hidden');
      valid = false;
    } else {
      document.getElementById('error-dienst').classList.add('hidden');
    }

    if (onderwerp.value.trim().length < 5) {
      document.getElementById('error-onderwerp').classList.remove('hidden');
      valid = false;
    } else {
      document.getElementById('error-onderwerp').classList.add('hidden');
    }

    if (!valid) {
      showToast("Controleer de invoervelden aub.", "error");
      return;
    }

    const formData = new FormData(form);
    console.log(form.action);
    

    fetch(form.action, {
      method: 'POST',
      body: formData,
      headers: { 'Accept': 'application/json' }
    })
      .then(res => res.json())
      .then(data => {
        if (data.success) {
          form.reset();
          showToast("Bedankt! Je aanvraag is verzonden.", "success");
        } else if (data.errors) {
          // Show server-side validation errors
          for (const [key, message] of Object.entries(data.errors)) {
            const errorEl = document.getElementById('error-' + key);
            if (errorEl) {
              errorEl.textContent = message;
              errorEl.classList.remove('hidden');
            }
          }
          showToast("Er zijn enkele fouten. Controleer je invoer.", "error");
        } else {
          showToast("Onbekende fout. Probeer opnieuw.", "error");
        }
      })
      .catch(() => {
        showToast("Verbindingsfout. Probeer het later opnieuw.", "error");
      });
  });
});
