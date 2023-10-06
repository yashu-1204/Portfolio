// JavaScript code for adding interactivity to the portfolio

// Get all project elements
const portfoliooElements = document.querySelectorAll('.portfolioo');

// Add a click event listener to each project element
portfoliooElements.forEach((portfolioo) => {
    const title = portfolioo.querySelector('h3');
    const description = portfolioo.querySelector('p');
    
    // Add a click event listener to the project title
    title.addEventListener('click', () => {
        // Toggle the visibility of the project description
        description.classList.toggle('show-description');
    });
});