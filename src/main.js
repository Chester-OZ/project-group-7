(() => {
  const mobileMenu = document.querySelector('.backdrop');
  const openMenuBtn = document.querySelector('.header-menu-open-btn');
  const closeMenuBtn = document.querySelector('.header-menu-close-btn');
  // добавили доп класс что бы закрыть после нажатия на ссылку
  const menuLinks = document.querySelectorAll('.header-mobile-menu-link');

  const toggleMenu = () => {
    const isMenuOpen =
      openMenuBtn.getAttribute('aria-expanded') === 'true' || false;
    openMenuBtn.setAttribute('aria-expanded', !isMenuOpen);
    mobileMenu.classList.toggle('is-open');

    const scrollLockMethod = !isMenuOpen
      ? 'disableBodyScroll'
      : 'enableBodyScroll';
    bodyScrollLock[scrollLockMethod](document.body);
  };

  //  добавили что бы закрывалось при нажатии на ссылку
  menuLinks.forEach(menuLink => {
    menuLink.addEventListener('click', toggleMenu);
  });

  // стандартно из скрипта от Репеты
  openMenuBtn.addEventListener('click', toggleMenu);
  closeMenuBtn.addEventListener('click', toggleMenu);

  // Close the mobile menu on wider screens if the device orientation changes
  window.matchMedia('(min-width: 768px)').addEventListener('change', e => {
    if (!e.matches) return;
    mobileMenu.classList.remove('is-open');
    openMenuBtn.setAttribute('aria-expanded', false);
    bodyScrollLock.enableBodyScroll(document.body);
  });
})();
