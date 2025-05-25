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
    fetch(form.action, {
      method: 'POST',
      body: formData,
      headers: { 'Accept': 'application/json' }
    }).then(response => {
      if (response.ok) {
        form.reset();
        showToast("Bedankt! Je aanvraag is verzonden.", "success");
      } else {
        showToast("Er ging iets mis. Probeer het opnieuw.", "error");
      }
    }).catch(() => {
      showToast("Verbindingsfout. Probeer het later opnieuw.", "error");
    });
  });
});
