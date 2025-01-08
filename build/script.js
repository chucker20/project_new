const navToggle = document.querySelector('.nav_open_btn');
const navBar = document.querySelector('.navbar');
const allLinks = document.querySelectorAll('a');  // Select all links
const body = document.querySelector('body');

// Toggle nav menu when the button is clicked
navToggle.addEventListener('click', (event) => {
  navBar.classList.toggle('hidden');
  toggleIcon();
  event.stopPropagation();  // Prevent the click from bubbling to document
});

// Close nav when any link is clicked
allLinks.forEach(link => {
  link.addEventListener('click', () => {
    if (!navBar.classList.contains('hidden')) {
      navBar.classList.add('hidden');
      toggleIcon();
    }
  });
});

// Close nav when clicking outside the nav
document.addEventListener('click', (event) => {
  if (!navBar.classList.contains('hidden') && !navBar.contains(event.target) && event.target !== navToggle) {
    navBar.classList.add('hidden');
    toggleIcon();
  }
});

// Close nav when scrolling
window.addEventListener('scroll', () => {
  if (!navBar.classList.contains('hidden')) {
    navBar.classList.add('hidden');
    toggleIcon();
  }
});

// Toggle between menu and close icons
function toggleIcon() {
  if (navBar.classList.contains('hidden')) {
    navToggle.innerHTML = '&#9776;';  // Menu icon
  } else {
    navToggle.innerHTML = '<i class="fa-solid fa-xmark"></i>';  // Close icon
  }
}



document.addEventListener('DOMContentLoaded', () => {
    const faqContainer = document.getElementById('faq-container');
  
    faqContainer.addEventListener('click', (e) => {
      const clickedButton = e.target.closest('button');
      if (!clickedButton) return;
  
      const content = clickedButton.nextElementSibling;
      const icon = clickedButton.querySelector('i');
      const isHidden = content.classList.contains('hidden');
  
      // Close all FAQs
      const allFAQs = faqContainer.querySelectorAll('div.border');
      allFAQs.forEach(faq => {
        const faqContent = faq.querySelector('div');
        const faqIcon = faq.querySelector('i');
  
        faqContent.classList.add('hidden');
        faqIcon.classList.remove('fa-minus');
        faqIcon.classList.add('fa-plus');
      });
  
      // Toggle the clicked one
      if (isHidden) {
        content.classList.remove('hidden');
        icon.classList.remove('fa-plus');
        icon.classList.add('fa-minus');
      }
    });
});
  
const form = document.getElementById('myForm');

form.addEventListener('submit', function(event) {
  // Optional: Perform form validation or other checks here
  
  // Allow the form to submit naturally
  setTimeout(() => {
      // Clear all input fields and textareas after submission
      const inputs = form.querySelectorAll('input, textarea');
      inputs.forEach(input => input.value = '');
  }, 10);  // Small delay to ensure submission completes first
});

