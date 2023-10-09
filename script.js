window.addEventListener('scroll', function() {
    const aboutMeSection = document.querySelector('.about-me');
    const sectionTop = aboutMeSection.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    const fadeInThreshold = windowHeight * 0.8; // 80% of the viewport height for fading in
    const fadeOutThreshold = windowHeight * 0.6; // 60% of the viewport height for fading out
    
    if (sectionTop < fadeInThreshold) {
        aboutMeSection.classList.add('show');
    } else if (sectionTop > fadeOutThreshold) {
        aboutMeSection.classList.remove('show');
    }
});

document.getElementById('mobile-menu').addEventListener('click', function() {
    var nav = document.querySelector('.nav ul');
    nav.classList.toggle('show');
});
