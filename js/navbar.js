document.getElementById('mobile-menu').addEventListener('click', function() {
    toggleMenu();
});

document.getElementById('overlay').addEventListener('click', function() {
    if (document.querySelector('.menu').classList.contains('show')) {
        toggleMenu();
    }
});

// Agrega un evento de clic a cada enlace del menú
document.querySelectorAll('.menu a').forEach(function(link) {
    link.addEventListener('click', function() {
        toggleMenu();
    });
});

function toggleMenu() {
    document.querySelector('.menu').classList.toggle('show');
    document.querySelector('#overlay').classList.toggle('show');
}
