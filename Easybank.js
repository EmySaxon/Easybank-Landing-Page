const topNav = document.getElementById('topNav');
const hamburger = document.getElementById('hamburger-menu');
const mobileNav = document.getElementById('mobile-nav-overlay');
const navOverlay = document.getElementById('navOverlay');
const closeIcon = document.getElementById('close-icon');

hamburger.addEventListener('click', () => {
    mobileNav.style.display = 'flex';
    hamburger.classList.remove('hamburger-menu');
    hamburger.classList.add('close-icon');
    closeIcon.style.display = 'block';
});

closeIcon.addEventListener('click', () => {
    mobileNav.style.display = 'none';
    hamburger.classList.remove('close-icon');
    hamburger.classList.add('hamburger-menu');
    closeIcon.style.display = 'none';
});