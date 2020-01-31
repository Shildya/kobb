document.addEventListener('DOMContentLoaded', function() {

    // HUE SYSTEM //

    hueInput = document.querySelector('#hue__input');
    color = document.querySelector('.color');

    hueInput.addEventListener('input', function() {
        if (hueInput.value < 256) {
            color.style.backgroundColor = 'rgb(255, 0, '+hueInput.value+')';
        }
        else if (255 < hueInput.value && hueInput.value < 511) {
            color.style.backgroundColor = 'rgb('+(510-hueInput.value)+', 0, 255)';
        }
        else if (510 < hueInput.value && hueInput.value < 766) {
            color.style.backgroundColor = 'rgb(0,'+(hueInput.value-510)+', 255)';
        }
        else if (765 < hueInput.value && hueInput.value < 1021) {
            color.style.backgroundColor = 'rgb(0, 255,'+(1020-hueInput.value)+')';
        }
        else if (1020 < hueInput.value && hueInput.value < 1276) {
            color.style.backgroundColor = 'rgb('+(hueInput.value-1020)+', 255, 0)';
        }
        else if (1275 < hueInput.value && hueInput.value < 1530) {
            color.style.backgroundColor = 'rgb(255,'+(1530-hueInput.value)+', 0)';
        };

        // SATURATION BAR COLOR CHANGE //

        saturateBar.style.backgroundImage = 'linear-gradient(to right, gray, '+color.style.backgroundColor+')';
    });

    // SATURATION SYSTEM //

    saturateInput = document.querySelector('#saturate__input');
    saturateBar = document.querySelector('.saturate__bar');
    image1 = document.querySelector('.image1');

    saturateInput.addEventListener('input', function() {
        image1.style.filter = 'saturate('+saturateInput.value+'%)';
    });

});