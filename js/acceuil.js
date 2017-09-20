$(function () {

    let elem = $('#video');

    if (elem.requestFullscreen) {
        elem.requestFullscreen();
    } else if (elem.mozRequestFullScreen) {
        elem.mozRequestFullScreen();
    } else if (elem.webkitRequestFullscreen) {
        elem.webkitRequestFullscreen();
    }
    
    $("#myCarousel").on('slid.bs.carousel', function () {
        $('.item p').animate({
            opacity: 0
        }, 3000);
        $('div.active > img').fadeOut(3000);
        
    });

    $("#myCarousel").on('slide.bs.carousel	', function () {
        $('div.active > img').fadeIn(3000);
        $('.item p').animate({
            opacity: 1
        }, 3000);
    });
});

function play() {
    $('section').hide();
    $('#skip').click(function () {
        $('#video').hide();    
        $('.btn-group').hide();
        if($(window).width() > 768) {
            $('body').css('paddingTop', '190px');
        } 
        if($(window).width() <= 768) {
            $('body').css('paddingTop', '50px'); 
        }
        $('section').show();
    });

    $('#sound').click(function () {
        $('#video').prop('muted', false);
    });

    $('#mute').click(function () {
        $('#video').prop('muted', true);
    });
}