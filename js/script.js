$(function () {

  let elem = $('#video');

  if (elem.requestFullscreen) {
    elem.requestFullscreen();
  } else if (elem.mozRequestFullScreen) {
    elem.mozRequestFullScreen();
  } else if (elem.webkitRequestFullscreen) {
    elem.webkitRequestFullscreen();
  }

  if ($(window).width() <= 768) {
    $("#myCarousel").on('slid.bs.carousel', function () {
      $('.item p').animate({
        opacity: 0
      }, 3000);
      $('div.active > img').fadeOut(3000);

    });
  }

  if ($(window).width() <= 768) {
    $("#myCarousel").on('slide.bs.carousel	', function () {
      $('div.active > img').fadeIn(3000);
      $('.item p').animate({
        opacity: 1
      }, 3000);
    });
  }

  $(".stamps01").hover(function () {
    $(".c1").slideToggle("slow");
  });

  $(".stamps02").hover(function () {
    $(".c2").slideToggle("slow");
  });

  $(".stamps03").hover(function () {
    $(".c3").slideToggle("slow");
  });

  $(".stamps04").hover(function () {
    $(".c4").slideToggle("slow");
  });

  if ($(window).width() <= 768) {
    $('iframe').attr('width', '350px');
  }
});

function play() {
  $('section').hide();
  $('#skip').click(function () {
    $('#video').hide();
    $('.btn-group').hide();
    if ($(window).width() > 768) {
      $('body').css('paddingTop', '190px');
    }
    if ($(window).width() <= 768) {
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

function myFunction1() {
  var bordeaux = './images/bordeaux.jpg';
  $('body').css('background-image', 'url(' + bordeaux + ')');
};

function myFunction2() {
  var biarritz = './images/biarritz4.jpg';
  $('body').css('background-image', 'url(' + biarritz + ')');
};