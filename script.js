document.getElementById('mobile-menu').addEventListener('click', function() {
    var nav = document.querySelector('.nav ul');
    nav.classList.toggle('show');
});

window.addEventListener('scroll', function() {
    var header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 0);
});