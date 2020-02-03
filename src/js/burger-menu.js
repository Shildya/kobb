document.addEventListener('DOMContentLoaded', function() {

    burgerMenu = document.querySelector('.burger-menu')
    menu = document.querySelector('.menu')
    
    burgerMenu.addEventListener('click', function() {
        burgerMenu.classList.toggle('isOpen')
        menu.classList.toggle('isOpen')
    });
    
    links = document.querySelectorAll('.menu li')
    
    links.forEach(link => {
        link.addEventListener('click', function() {
            burgerMenu.classList.remove('isOpen')
            menu.classList.remove('isOpen')
        });
    });
    
});