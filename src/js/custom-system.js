document.addEventListener('DOMContentLoaded', function() {

    // SELECTION //

    var counter = 0;

    var images = document.querySelectorAll('.image');
    var imagesOrder = [images[0], images[1], images[9], images[2], images[3], images[4], images[5], images[6], images[10], images[8], images[7]];
    images = imagesOrder;
    var image = images[counter];

    var blacks = document.querySelectorAll('.black');
    var blacksOrder = [blacks[0], blacks[1], blacks[9], blacks[2], blacks[3], blacks[4], blacks[5], blacks[6], blacks[10], blacks[8], blacks[7]];
    blacks = blacksOrder;
    var black = blacks[counter];

    var whites = document.querySelectorAll('.white');
    var whitesOrder = [whites[0], whites[1], whites[9], whites[2], whites[3], whites[4], whites[5], whites[6], whites[10], whites[8], whites[7]];
    whites = whitesOrder;
    var white = whites[counter];

    var lastHue = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    var lastSaturation = [100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100];
    var lastLuminosity = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    
    var titles = ['Manchette D', 'Manche D', 'Bandes D', 'Bas', 'Torse', 'Col', 'Zips', 'Logo', 'Bandes G', 'Manche G', 'Manchette G'];

    var partTitle = document.querySelector('.part__title');

    partTitle.innerHTML = titles[counter];

    var leftArrow = document.querySelector('.left-arrow');
    var rightArrow = document.querySelector('.right-arrow');

    leftArrow.addEventListener('click', function() {

        if (counter > 0) {

            counter--;
            image = images[counter];
            black = blacks[counter];
            white = whites[counter];
            partTitle.innerHTML = titles[counter];
            hueInput.value = lastHue[counter];
            saturateInput.value = lastSaturation[counter];
            luminosityInput.value = lastLuminosity[counter];
            saturateBar.style.filter = 'hue-rotate('+hueInput.value+'deg)';
            rightArrow.style.fill = 'black';


        };

        if (counter == 0) {
            leftArrow.style.fill = 'gray';
        };

    });

    rightArrow.addEventListener('click', function() {

        if (counter < 10) {

            counter++;
            image = images[counter];
            black = blacks[counter];
            white = whites[counter];
            partTitle.innerHTML = titles[counter];
            hueInput.value = lastHue[counter];
            saturateInput.value = lastSaturation[counter];
            luminosityInput.value = lastLuminosity[counter];
            saturateBar.style.filter = 'hue-rotate('+hueInput.value+'deg)';
            leftArrow.style.fill = 'black';

        };

        if (counter == 10) {
            rightArrow.style.fill = 'gray';
        }

    });

    // HUE SYSTEM //

    var hueInput = document.querySelector('#hue__input');

    hueInput.addEventListener('input', function() {
        lastHue[counter] = hueInput.value;
        image.style.filter = 'hue-rotate('+hueInput.value+'deg) saturate('+saturateInput.value+'%)';
        saturateBar.style.filter = 'hue-rotate('+hueInput.value+'deg)';
    });

    // SATURATION SYSTEM //

    var saturateInput = document.querySelector('#saturate__input');
    var saturateBar = document.querySelector('.saturate__bar');

    saturateInput.addEventListener('input', function() {
        lastSaturation[counter] = saturateInput.value;
        image.style.filter = 'hue-rotate('+hueInput.value+'deg) saturate('+saturateInput.value+'%)';
    });

    // LUMINOSITY SYSTEM //

    luminosityInput = document.querySelector('#luminosity__input');

    luminosityInput.addEventListener('input', function() {
        lastLuminosity[counter] = luminosityInput.value;
        if (luminosityInput.value < 0) {
            black.style.opacity = (luminosityInput.value / -100);
            white.style.opacity = 0;
        }
        else if (luminosityInput.value > 0) {
            white.style.opacity = (luminosityInput.value / 100);
            black.style.opacity = 0;
        }
        else {
            black.style.opacity = 0;
            white.style.opacity = 0;
        }
    });

});