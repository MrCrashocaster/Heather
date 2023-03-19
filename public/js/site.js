$( document ).ready(function() {

    $('html').addClass('ready');

    function navBarFunction() {
        document.getElementsByClassName("navbar")[0].classList.toggle("responsive");
        document.getElementsByClassName("div_navbar_items")[0].classList.toggle("fade-in");
    }

    $('.fade-up, .fade-down, .fade-right, .fade-left').each(function() {
        var crrnt = $(this);
        if (crrnt.visible( true )) {
            crrnt.addClass('show');
        }
        else if (!crrnt.visible( true )) {
            crrnt.removeClass('show');
        }
    });
});

$(window).on('scroll', function(){
    $('.fade-up, .fade-down, .fade-right, .fade-left').each(function() {
        var crrnt = $(this);
        if (crrnt.visible( true )) {
            crrnt.addClass('show');
        }
        else if (!crrnt.visible( true )) {
            crrnt.removeClass('show');
        }
    });
});