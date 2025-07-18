const navToggle = document.getElementById('navToggle');
const navMenu = document.getElementById('navMenu');

const dienstenToggle = document.getElementById('dienstenToggle');
const dienstenDropdown = document.getElementById('dienstenDropdown');

// Toggle main nav
navToggle.addEventListener('click', () => {
  const isOpen = navToggle.getAttribute('aria-expanded') === 'true';
  navToggle.setAttribute('aria-expanded', String(!isOpen));

  if (isOpen) {
    navMenu.classList.remove('opacity-100', 'scale-100');
    navMenu.classList.add('opacity-0', 'scale-95');
    setTimeout(() => {
      navMenu.classList.add('hidden');
    }, 300);
  } else {
    navMenu.classList.remove('hidden');
    requestAnimationFrame(() => {
      navMenu.classList.remove('opacity-0', 'scale-95');
      navMenu.classList.add('opacity-100', 'scale-100');
    });
  }
});

// Close nav on mobile when clicking a link
document.querySelectorAll('#navMenu a').forEach(link => {
  link.addEventListener('click', () => {
    if (window.innerWidth < 768) {
      navToggle.setAttribute('aria-expanded', 'false');
      navMenu.classList.remove('opacity-100', 'scale-100');
      navMenu.classList.add('opacity-0', 'scale-95');
      setTimeout(() => {
        navMenu.classList.add('hidden');
        closeDienstenDropdown();
      }, 300);
    }
  });
});

// Toggle dropdown for "Onze Diensten"
if (dienstenToggle && dienstenDropdown) {
  dienstenToggle.addEventListener('click', (e) => {
    const isExpanded = dienstenToggle.getAttribute('aria-expanded') === 'true';
    dienstenToggle.setAttribute('aria-expanded', String(!isExpanded));

    if (isExpanded) {
      dienstenDropdown.classList.remove('opacity-100', 'scale-100');
      dienstenDropdown.classList.add('opacity-0', 'scale-95');
      setTimeout(() => {
        dienstenDropdown.classList.add('hidden');
      }, 200);
    } else {
      dienstenDropdown.classList.remove('hidden');
      requestAnimationFrame(() => {
        dienstenDropdown.classList.remove('opacity-0', 'scale-95');
        dienstenDropdown.classList.add('opacity-100', 'scale-100');
      });
    }
  });

  // Close dropdown if clicking outside
  document.addEventListener('click', (e) => {
    if (
      !dienstenToggle.contains(e.target) &&
      !dienstenDropdown.contains(e.target)
    ) {
      closeDienstenDropdown();
    }
  });
}

// Exposed so it can be used above too
function closeDienstenDropdown() {
  if (!dienstenToggle || !dienstenDropdown) return;

  dienstenToggle.setAttribute('aria-expanded', 'false');
  dienstenDropdown.classList.remove('opacity-100', 'scale-100');
  dienstenDropdown.classList.add('opacity-0', 'scale-95');
  setTimeout(() => {
    dienstenDropdown.classList.add('hidden');
  }, 200);
}
