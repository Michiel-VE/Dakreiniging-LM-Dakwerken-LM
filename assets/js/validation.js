import { showToast } from './notifications.js';

document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('contactForm');

  // Add * to all required labels
  function markRequiredFields() {
    form.querySelectorAll('input[required], select[required], textarea[required]').forEach(input => {
      const label = form.querySelector(`label[for="${input.id}"]`);
      if (label && !label.querySelector('.required-asterisk')) {
        const asterisk = document.createElement('span');
        asterisk.textContent = ' *';
        asterisk.classList.add('text-red-600', 'required-asterisk');
        label.appendChild(asterisk);
      }
    });
  }

  // Restrict inputs with .only-numbers class to numbers only
  function enforceNumericInput() {
    document.querySelectorAll('.only-numbers').forEach(input => {
      input.addEventListener('input', (e) => {
        const maxLength = input.getAttribute('maxlength') || 999;
        e.target.value = e.target.value.replace(/\D/g, '').slice(0, maxLength);
      });

      input.addEventListener('keypress', (e) => {
        if (!/\d/.test(e.key)) e.preventDefault();
      });

      input.addEventListener('paste', (e) => {
        const paste = (e.clipboardData || window.clipboardData).getData('text');
        if (!/^\d+$/.test(paste)) e.preventDefault();
      });
    });
  }

  markRequiredFields();
  enforceNumericInput();

  form.addEventListener('submit', function (e) {
    e.preventDefault();

    const naam = document.getElementById('naam');
    const email = document.getElementById('email');
    const gsmField = document.getElementById('gsm');
    const straat = document.getElementById('straat');
    const nummer = document.getElementById('nummer');
    const postcode = document.getElementById('postcode');
    const gemeente = document.getElementById('gemeente');
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

    // Validations
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

    const rawGsm = gsmField.value;
    const cleanedGsm = rawGsm.replace(/[\s\-\.]/g, '').trim();
    const gsmRegex = /^(?:\+32|0032)?0?(4[5-9]\d{7}|[1-9]\d{7})$/;
    if (!gsmRegex.test(cleanedGsm)) {
      setError(gsmField, 'error-gsm', 'Voer een geldig GSM-nummer in.');
      valid = false;
    } else {
      clearError(gsmField, 'error-gsm');
    }

    if (straat.value.trim() === "") {
      setError(straat, 'error-straat', 'Straat is verplicht.');
      valid = false;
    } else {
      clearError(straat, 'error-straat');
    }

    if (nummer.value.trim() === "") {
      setError(nummer, 'error-nummer', 'Nummer is verplicht.');
      valid = false;
    } else {
      clearError(nummer, 'error-nummer');
    }

    const postcodeRegex = /^\d{4}$/;
    if (!postcodeRegex.test(postcode.value.trim())) {
      setError(postcode, 'error-postcode', 'Voer een geldige postcode in (4 cijfers).');
      valid = false;
    } else {
      clearError(postcode, 'error-postcode');
    }

    if (gemeente.value.trim() === "") {
      setError(gemeente, 'error-gemeente', 'Gemeente is verplicht.');
      valid = false;
    } else {
      clearError(gemeente, 'error-gemeente');
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

    // Encryption
    const encrypt = new JSEncrypt();
    encrypt.setPublicKey(`-----BEGIN PUBLIC KEY-----
MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAzv4vZXSdrpkIzPFVRx8F
xPU5dD8g2nHwmDgOEG/w8H8wKnMvrXq+f7eyjRrlwAvhAgQsryX5xArUeZHkTQgX
5erCxRVeDeMvedxTLIIVSrGZTlCngYgbHmC0unKvyBsaI2GpTzWNMidGFK8CPhSa
Bs+7YOrFeG8hjZdmDdSqk+2uNZsa8cl3v36ITMczjoxxuRlsgJfIqyY999hdqDaE
biMOdQSR89qoogGsT9yZLuZ+4PFxS3k5neX+Nhi+J+6nls8Z8c0cwn3Mn3LPciR7
aVEMrW2ELS/faiqcEbvGPvTL0hhz11dkg/iXbL7w06lcGTL3AVbWwnqn4Ck6K8ac
GwIDAQAB
-----END PUBLIC KEY-----`);

    const encryptedData = {
      naam: encrypt.encrypt(naam.value.trim()),
      email: encrypt.encrypt(email.value.trim()),
      gsm: encrypt.encrypt(cleanedGsm),
      straat: encrypt.encrypt(straat.value.trim()),
      nummer: encrypt.encrypt(nummer.value.trim()),
      postcode: encrypt.encrypt(postcode.value.trim()),
      gemeente: encrypt.encrypt(gemeente.value.trim()),
      dienst: encrypt.encrypt(dienst.value.trim()),
      onderwerp: encrypt.encrypt(onderwerp.value.trim()),
    };

    for (const [key, value] of Object.entries(encryptedData)) {
      if (!value) {
        showToast(`Encryptie fout op veld: ${key}`, "error");
        return;
      }
    }

    const formData = new FormData();
    for (const [key, value] of Object.entries(encryptedData)) {
      formData.append(key, value);
    }
    formData.append('website', ''); // honeypot

    // ReCAPTCHA + AJAX submission
    grecaptcha.ready(function () {
      grecaptcha.execute('6LepJJsrAAAAAJd8sFU5DexBd0aQzQwHsMtzO5_U', { action: 'submit' }).then(function (token) {
        formData.append('recaptcha_token', token);

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
  });
});
