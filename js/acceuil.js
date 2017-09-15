$(function() {

    let elem = $('#video');

    if (elem.requestFullscreen) {
      elem.requestFullscreen();
    } else if (elem.mozRequestFullScreen) {
      elem.mozRequestFullScreen();
    } else if (elem.webkitRequestFullscreen) {
      elem.webkitRequestFullscreen();
    }
    
});

function play() {
    $('section').hide();
    $('#skip').click(function() {
        $('#video').hide();
        $('.btn-group').hide();
        $('section').show();
    });

    $('#sound').click(function() {
        $('#video').prop('muted', false);
    });

    $('#mute').click(function() {
        $('#video').prop('muted', true);
    });
}