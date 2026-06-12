document.addEventListener('DOMContentLoaded', function () {
  const buttons = document.querySelectorAll('.menu-toggle');

  buttons.forEach(function (button) {
    const navId = button.getAttribute('aria-controls');
    const nav = document.getElementById(navId);

    if (!nav) return;

    button.addEventListener('click', function () {
      const isOpen = button.getAttribute('aria-expanded') === 'true';
      button.setAttribute('aria-expanded', String(!isOpen));
      button.setAttribute('aria-label', isOpen ? 'Abrir menu' : 'Fechar menu');
      nav.classList.toggle('is-open', !isOpen);
    });

    nav.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        button.setAttribute('aria-expanded', 'false');
        button.setAttribute('aria-label', 'Abrir menu');
        nav.classList.remove('is-open');
      });
    });
  });

  window.addEventListener('resize', function () {
    if (window.innerWidth > 720) {
      buttons.forEach(function (button) {
        const nav = document.getElementById(button.getAttribute('aria-controls'));
        button.setAttribute('aria-expanded', 'false');
        button.setAttribute('aria-label', 'Abrir menu');
        if (nav) nav.classList.remove('is-open');
      });
    }
  });
});
