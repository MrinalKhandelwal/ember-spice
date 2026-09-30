/* Shared beginner-friendly interactions for Ember & Spice. */
document.addEventListener('DOMContentLoaded', () => {
  // Keep the copyright year current without editing every page.
  document.querySelectorAll('[data-year]').forEach((element) => {
    element.textContent = new Date().getFullYear();
  });

  // Mobile navigation opens and closes from the menu button.
  const menuButton = document.querySelector('.menu-toggle');
  const navigation = document.querySelector('.primary-nav');
  if (menuButton && navigation) {
    menuButton.addEventListener('click', () => {
      const isOpen = menuButton.getAttribute('aria-expanded') === 'true';
      menuButton.setAttribute('aria-expanded', String(!isOpen));
      navigation.classList.toggle('open', !isOpen);
    });
  }

  // Featured dish buttons are ready to filter cards by their data-category.
  const filterButtons = document.querySelectorAll('[data-filter]');
  const dishCards = document.querySelectorAll('.dish-card[data-category]');
  filterButtons.forEach((button) => {
    button.addEventListener('click', () => {
      const selectedCategory = button.dataset.filter;
      filterButtons.forEach((item) => {
        const selected = item === button;
        item.classList.toggle('active', selected);
        item.setAttribute('aria-pressed', String(selected));
      });
      dishCards.forEach((card) => {
        card.hidden = selectedCategory !== 'all' && card.dataset.category !== selectedCategory;
      });
    });
  });

  // This demo form checks common mistakes in the browser. It does not submit data.
  const contactForm = document.querySelector('#contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', (event) => {
      event.preventDefault();
      const name = contactForm.elements.name;
      const email = contactForm.elements.email;
      const message = contactForm.elements.message;
      const status = document.querySelector('#form-status');
      const errors = [
        { input: name, output: document.querySelector('#name-error'), text: 'Please enter at least 2 characters for your name.' },
        { input: email, output: document.querySelector('#email-error'), text: 'Please enter a valid email address.' },
        { input: message, output: document.querySelector('#message-error'), text: 'Please add a short message (at least 10 characters).' }
      ];
      let isValid = true;

      errors.forEach(({ input, output, text }) => {
        const fieldIsValid = input.checkValidity();
        input.closest('.form-row').classList.toggle('invalid', !fieldIsValid);
        output.textContent = fieldIsValid ? '' : text;
        if (!fieldIsValid) isValid = false;
      });

      status.classList.toggle('success', isValid);
      status.textContent = isValid
        ? 'Thanks! Your details look good. This demo does not send the inquiry; connect a form service to receive submissions.'
        : 'Please correct the highlighted fields and try again.';
      if (!isValid) contactForm.querySelector('.invalid input, .invalid textarea')?.focus();
    });
  }
});
