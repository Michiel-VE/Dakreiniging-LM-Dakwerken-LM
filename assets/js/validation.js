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

    const setError = (field, errorId, message) => {
      const errorEl = document.getElementById(errorId);
      errorEl.classList.remove('hidden');
      errorEl.textContent = message;
      field.setAttribute('aria-invalid', 'true');
    };

    const clearError = (field, errorId) => {
      const errorEl = document.getElementById(errorId);
      errorEl.classList.add('hidden');
      errorEl.textContent = '';
      field.setAttribute('aria-invalid', 'false');
    };

    if (naam.value.trim() === "") {
      setError(naam, 'error-naam', 'Naam is verplicht.');
      valid = false;
    } else {
      clearError(naam, 'error-naam');
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email.value.trim())) {
      setError(email, 'error-email', 'Voer een geldig e-mailadres in.');
      valid = false;
    } else {
      clearError(email, 'error-email');
    }

    if (!dienst.value) {
      setError(dienst, 'error-dienst', 'Selecteer een dienst.');
      valid = false;
    } else {
      clearError(dienst, 'error-dienst');
    }

    if (onderwerp.value.trim().length < 5) {
      setError(onderwerp, 'error-onderwerp', 'Onderwerp moet minstens 5 tekens bevatten.');
      valid = false;
    } else {
      clearError(onderwerp, 'error-onderwerp');
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
    })
      .then(res => res.json())
      .then(data => {
        if (data.success) {
          form.reset();
          form.querySelectorAll('[aria-invalid]').forEach(el => el.setAttribute('aria-invalid', 'false'));
          showToast("Bedankt! Je aanvraag is verzonden.", "success");
        } else if (data.errors) {
          for (const [key, message] of Object.entries(data.errors)) {
            const field = document.getElementById(key);
            const errorEl = document.getElementById('error-' + key);
            if (field && errorEl) {
              errorEl.textContent = message;
              errorEl.classList.remove('hidden');
              field.setAttribute('aria-invalid', 'true');
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
