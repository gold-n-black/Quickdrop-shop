// scripts.js

// Function to handle the submission of forms
function handleFormSubmission(event) {
    event.preventDefault(); // Prevent the default form submission

    // Collect form data
    const formData = new FormData(event.target);
    const data = {};
    formData.forEach((value, key) => {
        data[key] = value;
    });

    // Display a simple alert for demonstration
    alert(`Thank you, ${data.name || ''}! Your message has been sent!`);
}

// Add event listeners to contact form and user input form
document.addEventListener('DOMContentLoaded', () => {
    const contactForm = document.querySelector('form[action="submit_form.php"]');
    const userInputForm = document.querySelector('form[action="submit_input.php"]');

    if (contactForm) {
        contactForm.addEventListener('submit', handleFormSubmission);
    }

    if (userInputForm) {
        userInputForm.addEventListener('submit', handleFormSubmission);
    }

    // Smooth scrolling for internal links
    const links = document.querySelectorAll('nav a');
    links.forEach(link => {
        link.addEventListener('click', (event) => {
            event.preventDefault(); // Prevent default anchor click behavior
            const targetId = link.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({ behavior: 'smooth' }); // Smooth scroll to the section
            }
        });
    });
});
