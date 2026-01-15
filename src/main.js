const navToggle = document.getElementById('navToggle');
const mobileMenu = document.getElementById('mobileMenu');

function toggleMobileMenu() {
    const icon = navToggle.querySelector('i');
    const isActive = mobileMenu.classList.toggle('active');
    
    icon.className = isActive ? 'fa-solid fa-xmark' : 'fa-solid fa-bars';
    navToggle.setAttribute('aria-label', isActive ? 'Fechar menu' : 'Abrir menu');
    navToggle.setAttribute('aria-expanded', isActive);
    document.body.style.overflow = isActive ? 'hidden' : '';
}

navToggle.addEventListener('click', toggleMobileMenu);

document.querySelectorAll('.mobile-nav-link').forEach(link => {
    link.addEventListener('click', () => {
        if (mobileMenu.classList.contains('active')) toggleMobileMenu();
    });
});

document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && mobileMenu.classList.contains('active')) toggleMobileMenu();
});

window.addEventListener('resize', () => {
    if (window.innerWidth >= 768 && mobileMenu.classList.contains('active')) toggleMobileMenu();
});