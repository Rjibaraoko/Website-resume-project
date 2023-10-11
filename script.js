window.addEventListener('scroll', function() {
    const aboutMeSection = document.querySelector('.about-me');
    const sectionTop = aboutMeSection.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;
    const fadeInThreshold = windowHeight * 1; // 80% of the viewport height for fading in
    const fadeOutThreshold = windowHeight * 0.6; // 60% of the viewport height for fading out
    
    if (sectionTop < fadeInThreshold) {
        aboutMeSection.classList.add('show');
    } else if (sectionTop > fadeOutThreshold) {
        aboutMeSection.classList.remove('show');
    }
});

// Function to handle fade-in effect for sections
function handleIntersection(entries, observer) {
    entries.forEach(entry => {
        if (entry.intersectionRatio > 0) {
            entry.target.classList.add('fade-in');
        } else {
            entry.target.classList.remove('fade-in');
        }
    });
}

const options = {
    threshold: 0.00000001 // Trigger the callback when 100% of the section is visible
};

const observer = new IntersectionObserver(handleIntersection, options);

// Select all sections and observe them for intersection
const sections = document.querySelectorAll('section');
sections.forEach(section => {
    section.classList.remove('fade-in'); // Initially, remove 'fade-in' class from all sections
    observer.observe(section);
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const targetId = this.getAttribute('href').substring(1); // Remove '#' from href
        const targetElement = document.getElementById(targetId);

        targetElement.scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Button scroller script

const scrollToTopButton = document.getElementById('scrollToTopBtn');


// Show the scroll-to-top button when user scrolls down 20px from the top
window.addEventListener('scroll', () => {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        scrollToTopButton.style.display = 'block';
    } else {
        scrollToTopButton.style.display = 'none';
    }
});

// Scroll to the top of the document when the button is clicked
scrollToTopButton.addEventListener('click', () => {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE, and Opera
});

// Scroll to specific sections when corresponding buttons are clicked
scrollButtons.forEach(button => {
    button.addEventListener('click', () => {
        const targetId = button.getAttribute('data-target');
        const targetElement = document.getElementById(targetId);
        
        targetElement.scrollIntoView({
            behavior: 'smooth'
        });
    });
});

document.getElementById('mobile-menu').addEventListener('click', function() {
    var nav = document.querySelector('.nav ul');
    nav.classList.toggle('show');
});
