document.addEventListener('DOMContentLoaded', function() {

    window.addEventListener("resize",function(){
        var container = document.querySelector('.reload');
        var content = container.innerHTML;
        container.innerHTML= content; 
    });

});