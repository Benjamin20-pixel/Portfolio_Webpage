// script.js
document.addEventListener("DOMContentLoaded", function () {
    // Update the copyright year dynamically
    const copyrightSpan = document.querySelector(".footer-content span:first-child");
    const currentYear = new Date().getFullYear();
    if (copyrightSpan) {
        copyrightSpan.innerHTML = `© All Rights Reserved ${currentYear}`;
    }

    // Add click event listener to the first button in the home section
    const mainButton = document.querySelector('button');
    if (mainButton) {
        mainButton.addEventListener('click', function () {
            alert('Let\'s get started!');
        });
    }

    // Add click event listeners to all case study buttons
    const caseStudyButtons = document.querySelectorAll('.case-study button');
    caseStudyButtons.forEach(button => {
        button.addEventListener('click', function () {
            const caseStudyTitle = this.parentElement.querySelector('h2').textContent;
            alert('Case study button clicked: ' + caseStudyTitle);
        });
    });

    // Add click event listeners to all "Know more" buttons in the recent work section
    const knowMoreButtons = document.querySelectorAll('.know-more');
    knowMoreButtons.forEach(button => {
        button.addEventListener('click', function () {
            alert('More information about this work coming soon!');
        });
    });

    // Add form submission event listener for the Get In Touch section
    const form = document.querySelector('form');
    if (form) {
        form.addEventListener('submit', function (event) {
            event.preventDefault();
            alert('Form submitted!');
        });
    }
});