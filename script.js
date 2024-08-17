// Function to check if an element is in the viewport
function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top <= window.innerHeight && 
        rect.bottom >= 0
    );
}

// Function to add 'in-view' class to sections in the viewport
function checkSectionsInView() {
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        if (isInViewport(section)) {
            section.classList.add('in-view');
        } else {
            section.classList.remove('in-view');
        }
    });
}

// Check on scroll and on initial load
window.addEventListener('scroll', checkSectionsInView);
window.addEventListener('load', checkSectionsInView);

// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});