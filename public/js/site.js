$( document ).ready(function() {

    $('html').addClass('ready');

    function navBarFunction() {
        document.getElementsByClassName("navbar")[0].classList.toggle("responsive");
        document.getElementsByClassName("div_navbar_items")[0].classList.toggle("fade-in");
    }
});