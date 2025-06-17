document.addEventListener('DOMContentLoaded', () => {
  const toggle = document.getElementById('menu-toggle');
  const close = document.getElementById('menu-close');
  const menu = document.getElementById('mobile-menu');
  const overlay = document.getElementById('menu-overlay');
  const internalLinks = document.querySelectorAll('.scroll-close');

  function openMenu() {
    if (menu && overlay) {
      menu.classList.remove('hidden');
      menu.classList.add('flex');
      overlay.classList.remove('hidden');
    }
  }

  function closeMenu() {
    if (menu && overlay) {
      menu.classList.add('hidden');
      menu.classList.remove('flex');
      overlay.classList.add('hidden');
    }
  }

  if (toggle) toggle.addEventListener('click', openMenu);
  if (close) close.addEventListener('click', closeMenu);
  if (overlay) overlay.addEventListener('click', closeMenu);

  if (internalLinks && internalLinks.length > 0) {
    internalLinks.forEach(link => {
      link.addEventListener('click', (e) => {
        const href = link.getAttribute('href');
        if (href && href.includes('#')) {
          closeMenu();
          const targetId = href.split('#')[1];
          const targetEl = document.getElementById(targetId);
          if (targetEl) {
            setTimeout(() => {
              targetEl.scrollIntoView({ behavior: 'smooth' });
            }, 50);
          }
        }
      });
    });
  }
});


// Toggle Info dropdown (desktop)
document.addEventListener("DOMContentLoaded", function () {
  const infoToggle = document.getElementById("info-toggle");
  const infoMenu = document.getElementById("info-menu");

  let isInfoOpen = false;

  infoToggle.addEventListener("click", (e) => {
    e.preventDefault();
    isInfoOpen = !isInfoOpen;
    infoMenu.classList.toggle("hidden", !isInfoOpen);
  });

  // Sluiten bij klik buiten menu
  document.addEventListener("click", (e) => {
    if (!infoMenu.contains(e.target) && !infoToggle.contains(e.target)) {
      infoMenu.classList.add("hidden");
      isInfoOpen = false;
    }
  });
});


// Mobile info toggle
const mobileInfoToggle = document.getElementById("mobile-info-toggle");
const mobileInfoMenu = document.getElementById("mobile-info-menu");

if (mobileInfoToggle && mobileInfoMenu) {
  mobileInfoToggle.addEventListener("click", () => {
    mobileInfoMenu.classList.toggle("hidden");
  });
}
