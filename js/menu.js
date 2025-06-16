document.addEventListener('DOMContentLoaded', () => {
  const toggle = document.getElementById('menu-toggle');
  const close = document.getElementById('menu-close');
  const menu = document.getElementById('mobile-menu');
  const overlay = document.getElementById('menu-overlay');
  const internalLinks = document.querySelectorAll('.scroll-close');

  function openMenu() {
    menu.classList.remove('hidden');
    overlay.classList.remove('hidden');
  }

  function closeMenu() {
    menu.classList.add('hidden');
    overlay.classList.add('hidden');
  }

  toggle.addEventListener('click', openMenu);
  close.addEventListener('click', closeMenu);
  overlay.addEventListener('click', closeMenu);

  // Sluit menu als je op een interne anchor klikt (zoals #aanbod)
  internalLinks.forEach(link => {
    link.addEventListener('click', () => {
      closeMenu();
      const targetId = link.getAttribute('href').split('#')[1];
      const targetEl = document.getElementById(targetId);
      if (targetEl) {
        setTimeout(() => {
          targetEl.scrollIntoView({ behavior: 'smooth' });
        }, 50);
      }
    });
  });
});
