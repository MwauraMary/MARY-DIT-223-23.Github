
// Function to display a specific section and hide the others
function showSection(sectionId) {
    // Select all sections in the document
    const sections = document.querySelectorAll('section');
    // Loop through each section
    sections.forEach(section => {
        // Hide each section by setting its display to 'none'
        section.style.display = 'none';
    });

    // Display the selected section by setting its display to 'block'
    document.getElementById(sectionId).style.display = 'block';
}

// Ensure the 'home' section is displayed when the page first loads
window.onload = function() {
    showSection('home');
};
