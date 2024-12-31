/* script.js */

// Mobile nav toggle
const mobileToggle = document.getElementById('mobile-toggle');
const navLinks = document.querySelector('.nav-links');

mobileToggle.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

// Footer year auto-update
const footerYear = document.getElementById('footer-year');
footerYear.textContent = new Date().getFullYear();

// Modal logic
const openModalButtons = document.querySelectorAll('[data-modal-target]');
const closeModalButtons = document.querySelectorAll('[data-close-button]');
const overlay = document.querySelector('.overlay');

openModalButtons.forEach(button => {
  button.addEventListener('click', () => {
    const modalId = button.getAttribute('data-modal-target');
    const modal = document.querySelector(modalId);
    if (modal) {
      openModal(modal);
    }
  });
});

closeModalButtons.forEach(button => {
  button.addEventListener('click', () => {
    const modal = button.closest('.modal');
    closeModal(modal);
  });
});

function openModal(modal) {
  if (!modal) return;
  modal.classList.add('active');
}

function closeModal(modal) {
  if (!modal) return;
  modal.classList.remove('active');
}

// (Optional) Close modal when clicking outside or pressing ESC
window.addEventListener('click', (e) => {
  const modals = document.querySelectorAll('.modal');
  modals.forEach((modal) => {
    if (e.target === modal) {
      closeModal(modal);
    }
  });
});

window.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    const modals = document.querySelectorAll('.modal.active');
    modals.forEach((modal) => {
      closeModal(modal);
    });
  }
});

