document.addEventListener('DOMContentLoaded', function(event){

    hue = document.querySelector('#hue__input');

    color = document.querySelector('.color');

    saturate_box = document.querySelector('.saturate');

    saturate = document.querySelector('#saturate__input');

    image1 = document.querySelector('.image1');

    color.style.backgroundcolor = 'red';

    hue.addEventListener('input', function (evt) {
        color.style.filter = 'hue-rotate(' + hue.value + 'deg)';
        saturate_box.style.filter = 'hue-rotate(' + hue.value + 'deg)';
    });
    
    saturate.addEventListener('input', function (evt) {
        image1.style.filter = 'saturate(' + saturate.value + '%)'
        if (image1.style.filter == 'saturate(0%)') {
            color.style.backgroundColor = 'black';
        }
        else {
            color.style.backgroundColor = 'red';
        };
    });

});