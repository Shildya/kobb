document.addEventListener('DOMContentLoaded', function() {

    product = document.querySelector('.product');

    product.addEventListener('load', function() {

        product.classList.add('loaded');
    });
    
});