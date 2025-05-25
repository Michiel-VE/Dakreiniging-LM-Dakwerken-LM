const navToggle = document.getElementById('navToggle');
const navMenu = document.getElementById('navMenu');

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

document.querySelectorAll('#navMenu a').forEach(link => {
  link.addEventListener('click', () => {
    if (window.innerWidth < 768) {
      navToggle.setAttribute('aria-expanded', 'false');
      navMenu.classList.remove('opacity-100', 'scale-100');
      navMenu.classList.add('opacity-0', 'scale-95');
      setTimeout(() => {
        navMenu.classList.add('hidden');
      }, 300);
    }
  });
});
