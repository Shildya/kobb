document.addEventListener('DOMContentLoaded', function() {

    sizeButtons = document.querySelectorAll('.size__button');

    for (i = 0; i < sizeButtons.length; i++) {
        sizeButtons[i].addEventListener('click', sizeSelect(i));
    }

    function sizeSelect(i) {
        return function() {
            sizeButtons[i].classList.add('selected');
            for (j = 0; j < sizeButtons.length; j++) {
                if (sizeButtons[j] == sizeButtons[i]) {
                    sizeButtons[j].classList.add('selected');
                }
                else {
                    sizeButtons[j].classList.remove('selected');
                }
            }
        };
     }

});