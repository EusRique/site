
$( document ).ready(function() {

if (($('body').hasClass('phone')) || ($('body').hasClass('tablet')) || ($('body').hasClass('phone'))) {
    $('#keyboard').hide();
}


    $('#fullpage').fullpage({
                'menu': '#menuList',
                'anchors':['home', 'intro', 'intro2', 'cases', 'servicos', 'sobre', 'contato'],
                'scrollingSpeed': 500,
                'css3': true,
                // 'fixedElements': '#case-1',
                'controlArrows': true,
                'loopHorizontal': false,
                'scrollBar': false,
                'easingcss3':'cubic-bezier(.77,.11,.8,.41)',
                'slidesNavigation': true,
                'slidesNavPosition': 'bottom',
                // 'scrollOverflow': false,

                // MENU FADE IN AND OUT + COLORING
                onLeave: function(index, nextIndex, direction){
                    var leavingSection = $(this);
                    $("#toggle").fadeOut(200);
                    $('#load-case-1').blur();
                },

                afterLoad: function(anchorLink, index){
                    var loadedSection = $(this);
                    var isCover = $('body').find('.slide.cover.active');
                    var numCover = (isCover.length);
                    if(index == 1) {
                      $("#badges").show();
                    }
                    else {
                      $("#badges").hide();
                    }

                    if(index == 1 || (index == 4 && numCover == 1) || index == 5 || index == 8){
                        $("#toggle").removeClass().addClass('black').fadeIn(200);
                    }
                    else {
                        $("#toggle").removeClass().addClass('white').fadeIn(200);
                    }
                    $.fn.fullpage.setScrollingSpeed(500);
                    var activeSection = $('.fp-section').eq(index - 1);
                    var activeSlide = activeSection.find('.fp-slide.active');
                    var activeSlideIndex = activeSlide.index();
                    if (activeSlide.hasClass('s2')) {
                      $('#load-case-1').focus();
                    } else if (activeSlide.hasClass('s3')) {
                      $('#load-case-2').focus();
                    } else if (activeSlide.hasClass('s4')) {
                      $('#load-case-3').focus();
                    } else if (activeSlide.hasClass('s5')) {
                      $('#load-case-4').focus();
                    } else if (activeSlide.hasClass('s6')) {
                      $('#load-case-5').focus();
                    } else {
                      $('#load-case-1').blur();
                      $('#load-case-2').blur();
                      $('#load-case-3').blur();
                      $('#load-case-4').blur();
                      $('#load-case-5').blur();
                    }
                },

                onSlideLeave: function( anchorLink, index, slideIndex, direction){
                    var leavingSlide = $(this);
                    $("#toggle").fadeOut().delay(100);
                    $(".fp-slidesNav").fadeOut(200);
                    $('#load-case-1').blur();
                },

                afterSlideLoad: function( anchorLink, index, slideAnchor, slideIndex){
                    var loadedSlide = $(this);
                    var cases = $('body').find('.case');
                    var numCases = (cases.length)+1;
                    //first slide of the second section
                    if((index == 4 && slideIndex == 0)||(index == 4 && slideIndex == numCases)){
                        $(".fp-slidesNav").removeClass('white').fadeIn(200);
                        $("#toggle").removeClass().addClass('black').fadeIn(200);
                    }
                    else {
                        $(".fp-slidesNav").addClass('white').fadeIn(200);
                        $("#toggle").removeClass().addClass('white').fadeIn(200);
                    }
                    $.fn.fullpage.setScrollingSpeed(1000);

                    if(loadedSlide.hasClass('s2')) {
                      $('#load-case-1').focus();
                    } else if (loadedSlide.hasClass('s3')) {
                      $('#load-case-2').focus();
                    } else if (loadedSlide.hasClass('s4')) {
                      $('#load-case-3').focus();
                    } else if (loadedSlide.hasClass('s5')) {
                      $('#load-case-4').focus();
                    } else if (loadedSlide.hasClass('s6')) {
                      $('#load-case-5').focus();
                    } else {
                      $('#load-case-1').blur();
                      $('#load-case-2').blur();
                      $('#load-case-3').blur();
                      $('#load-case-4').blur();
                      $('#load-case-5').blur();
                    }
                },
    });

    $("#toggle").click(function(){
        if ($("#menu").hasClass('on')) {
            $("#menu").fadeOut().removeClass('on');
            $("#toggle").removeClass('close-menu');
            $.fn.fullpage.setAllowScrolling(true);
            }
        else {
            $("#menu").fadeIn().addClass('on');
            $("#toggle").addClass('close-menu');
            $.fn.fullpage.setAllowScrolling(false);
        }
    });

    $("#menu a").click(function(){
        $.fn.fullpage.setScrollingSpeed(0);
        $("#menu").fadeOut().removeClass('on');
        $("#toggle").removeClass('close-menu');
        $.fn.fullpage.setAllowScrolling(true);
    });

    $("#move-down").click(function() {
        $.fn.fullpage.moveSectionDown();
    });

    $("#move-right").click(function() {
        $.fn.fullpage.moveSlideRight();
    });

    $("#move-left").click(function() {
        $.fn.fullpage.moveSlideLeft();
    });

    $("#back-to-top").click(function() {
        $.fn.fullpage.moveTo(1);
    });  

    $("#load-case-1").click(function(event) {
        $.fn.fullpage.setAutoScrolling(false);
        $("body").css('overflow','hidden');
        $("#case-1").load("cases/01.html");
        $("#heading, .fp-slidesNav").fadeOut();
        $('.vc-text').fadeOut(200, function() {
            $(this).text('Loading').fadeIn(200);
        });
        setTimeout(
          function() 
          {
            $('#case-1').fadeIn(300, function() {
                $('#case-1 #case-img1').delay(300).animate({height: '60%'}, 500, 'easeOutExpo');
            });
          }, 2000);
        event.preventDefault(event);
    });

    $("#load-case-2").click(function(event) {
        $.fn.fullpage.setAutoScrolling(false);
        $("body").css('overflow','hidden');
        $("#case-2").load("cases/02.html");
        $("#heading, .fp-slidesNav").fadeOut();
        $('.vc-text').fadeOut(200, function() {
            $(this).text('Loading').fadeIn(200);
        });
        setTimeout(
          function() 
          {
            $('#case-2').fadeIn(300, function() {
                $('#case-2 #case-img1').delay(300).animate({height: '60%'}, 500, 'easeOutExpo');
            });
          }, 2000);
        event.preventDefault(event);
    });

    $("#load-case-3").click(function(event) {
        $.fn.fullpage.setAutoScrolling(false);
        $("body").css('overflow','hidden');
        $("#case-3").load("cases/03.html");
        $("#heading, .fp-slidesNav").fadeOut();
        $('.vc-text').fadeOut(200, function() {
            $(this).text('Loading').fadeIn(200);
        });
        setTimeout(
          function() 
          {
            $('#case-3').fadeIn(function() {
                $('#case-3 #case-img1').delay(300).animate({height: '60%'}, 500, 'easeOutExpo');
            });
          }, 2000);
        event.preventDefault(event);
    });

    $("#load-case-4").click(function(event) {
        $.fn.fullpage.setAutoScrolling(false);
        $("body").css('overflow','hidden');
        $("#case-4").load("cases/04.html");
        $("#heading, .fp-slidesNav").fadeOut();
        $('.vc-text').fadeOut(200, function() {
            $(this).text('Loading').fadeIn(200);
        });
        setTimeout(
          function() 
          {
            $('#case-4').fadeIn(300, function() {
                $('#case-4 #case-img1').delay(300).animate({height: '60%'}, 500, 'easeOutExpo');
            });
          }, 2000);
        event.preventDefault(event);
    });

    $("#load-case-5").click(function(event) {
        $.fn.fullpage.setAutoScrolling(false);
        $("body").css('overflow','hidden');
        $("#case-5").load("cases/05.html");
        $("#heading, .fp-slidesNav").fadeOut();
        $('.vc-text').fadeOut(200, function() {
            $(this).text('Loading').fadeIn(200);
        });
        setTimeout(
          function() 
          {
            $('#case-5').fadeIn(300, function() {
                $('#case-5 #case-img1').delay(300).animate({height: '60%'}, 500, 'easeOutExpo');
            });
          }, 2000);
        event.preventDefault(event);
    });
});


$(document).on('click', "#case-1-close", function () {
    $('#case-1 #case-img1').animate({height: '100%', duration: 700, easing: 'easeOutQuint'});
    $(".vc-text").text('View Case')
    setTimeout(
      function() 
      {
        $("#case-1").fadeOut();
        $("#heading, .fp-slidesNav").fadeIn();
        $.fn.fullpage.setAutoScrolling(true);

      }, 800);
    $('#load-case-1').focus();
    return false;
});

$(document).on( 'keydown', function ( e ) {
  if ( e.keyCode === 27 ) { // ESC
    if ( $('#case-1-close').is(':visible')) {
      $('#case-1-close').click();
    } else if ( $('#case-2-close').is(':visible')) {
      $('#case-2-close').click();
    } else if ( $('#case-3-close').is(':visible')) {
      $('#case-3-close').click();
    } else if ( $('#case-4-close').is(':visible')) {
      $('#case-4-close').click();
    } else if ( $('#case-5-close').is(':visible')) {
      $('#case-5-close').click();
    }
    return false;
  }
});



$(document).on('click', "#case-2-close", function () {
    $('#case-2 #case-img1').animate({height: '100%', duration: 700, easing: 'easeOutQuint'});
    $(".vc-text").text('View Case')
    setTimeout(
      function() 
      {
        $("#case-2").fadeOut();
        $("#heading, .fp-slidesNav").fadeIn();
        $.fn.fullpage.setAutoScrolling(true);

      }, 800);
    $('#load-case-2').focus();
    return false;
});

$(document).on('click', "#case-3-close", function () {
    $('#case-3 #case-img1').animate({height: '100%', duration: 700, easing: 'easeOutQuint'});
    $(".vc-text").text('View Case')
    setTimeout(
      function() 
      {
        $("#case-3").fadeOut();
        $("#heading, .fp-slidesNav").fadeIn();
        $.fn.fullpage.setAutoScrolling(true);

      }, 800);
    $('#load-case-3').focus();
    return false;
});

$(document).on('click', "#case-4-close", function () {
    $('#case-4 #case-img1').animate({height: '100%', duration: 700, easing: 'easeOutQuint'});
    $(".vc-text").text('View Case')
    setTimeout(
      function() 
      {
        $("#case-4").fadeOut();
        $("#heading, .fp-slidesNav").fadeIn();
        $.fn.fullpage.setAutoScrolling(true);

      }, 800);
    $('#load-case-4').focus();
    return false;
});

$(document).on('click', "#case-5-close", function () {
    $('#case-5 #case-img1').animate({height: '100%', duration: 700, easing: 'easeOutQuint'});
    $(".vc-text").text('View Case')
    setTimeout(
      function() 
      {
        $("#case-5").fadeOut();
        $("#heading, .fp-slidesNav").fadeIn();
        $.fn.fullpage.setAutoScrolling(true);

      }, 800);
    $('#load-case-5').focus();
    return false;
});



jQuery.fn.scrollTo = function(elem, speed) { 
    $(this).animate({
        scrollTop:  $(this).scrollTop() - $(this).offset().top + $(elem).offset().top 
    }, speed == undefined ? 1000 : speed); 
    return this; 
};


// CONTROLS ON ALL SLIDES //

// CONTROL UP //
$(document).on('click', "#case-1-up", function() {
    $("#case-1").scrollTo("#case-1-wrapper", 700);
});

$(document).on('click', "#case-2-up", function() {
    $("#case-2").scrollTo("#case-2-wrapper", 700);
});

$(document).on('click', "#case-3-up", function() {
    $("#case-3").scrollTo("#case-3-wrapper", 700);
});

$(document).on('click', "#case-4-up", function() {
    $("#case-4").scrollTo("#case-4-wrapper", 700);
});

$(document).on('click', "#case-5-up", function() {
    $("#case-5").scrollTo("#case-5-wrapper", 700);
});






// CONTROLS CASE 1 //

// CONTROL NEXT ON CASE 1 //
$(document).on('click', "#case-1-next", function() {
    $("#case-1").scrollTo("#case-1-wrapper", 700);
    setTimeout(
      function() 
      {
        $("#case-1-close").trigger("click");
        setTimeout(
          function() 
          {
            $.fn.fullpage.moveSlideRight();
            setTimeout(
              function() 
              {
                $("#load-case-2").trigger("click");
              }, 1000);
          }, 1500);
      }, 2000);
});


//CONTROLS CASE 2 //
// CONTROL NEXT ON CASE 2 //
$(document).on('click', "#case-2-next", function() {
    $("#case-2").scrollTo("#case-2-wrapper", 700);
    setTimeout(
      function() 
      {
        $("#case-2-close").trigger("click");
        setTimeout(
          function() 
          {
            $.fn.fullpage.moveSlideRight();
            setTimeout(
              function() 
              {
                $("#load-case-3").trigger("click");
              }, 1000);
          }, 1500);
      }, 2000);
});

// CONTROL PREV ON CASE 2 //
$(document).on('click', "#case-2-prev", function() {
    $("#case-2").scrollTo("#case-2-wrapper", 700);
    setTimeout(
      function() 
      {
        $("#case-2-close").trigger("click");
        setTimeout(
          function() 
          {
            $.fn.fullpage.moveSlideLeft();
            setTimeout(
              function() 
              {
                $("#load-case-1").trigger("click");
              }, 1000);
          }, 1500);
      }, 2000);
});

//CONTROLS CASE 3 //
// CONTROL NEXT ON CASE 3 //
$(document).on('click', "#case-3-next", function() {
    $("#case-3").scrollTo("#case-3-wrapper", 700);
    setTimeout(
      function() 
      {
        $("#case-3-close").trigger("click");
        setTimeout(
          function() 
          {
            $.fn.fullpage.moveSlideRight();
            setTimeout(
              function() 
              {
                $("#load-case-4").trigger("click");
              }, 1000);
          }, 1500);
      }, 2000);
});

// CONTROL PREV ON CASE 3 //
$(document).on('click', "#case-3-prev", function() {
    $("#case-3").scrollTo("#case-3-wrapper", 700);
    setTimeout(
      function() 
      {
        $("#case-3-close").trigger("click");
        setTimeout(
          function() 
          {
            $.fn.fullpage.moveSlideLeft();
            setTimeout(
              function() 
              {
                $("#load-case-2").trigger("click");
              }, 1000);
          }, 1500);
      }, 2000);
});


//CONTROLS CASE 4 //
// CONTROL NEXT ON CASE 4 //
$(document).on('click', "#case-4-next", function() {
    $("#case-4").scrollTo("#case-4-wrapper", 700);
    setTimeout(
      function() 
      {
        $("#case-4-close").trigger("click");
        setTimeout(
          function() 
          {
            $.fn.fullpage.moveSlideRight();
            setTimeout(
              function() 
              {
                $("#load-case-5").trigger("click");
              }, 1000);
          }, 1500);
      }, 2000);
});

// CONTROL PREV ON CASE 4 //
$(document).on('click', "#case-4-prev", function() {
    $("#case-4").scrollTo("#case-4-wrapper", 700);
    setTimeout(
      function() 
      {
        $("#case-4-close").trigger("click");
        setTimeout(
          function() 
          {
            $.fn.fullpage.moveSlideLeft();
            setTimeout(
              function() 
              {
                $("#load-case-3").trigger("click");
              }, 1000);
          }, 1500);
      }, 2000);
});

//CONTROLS CASE 5 //
// CONTROL PREV ON CASE 5 //
$(document).on('click', "#case-5-prev", function() {
    $("#case-5").scrollTo("#case-5-wrapper", 700);
    setTimeout(
      function() 
      {
        $("#case-5-close").trigger("click");
        setTimeout(
          function() 
          {
            $.fn.fullpage.moveSlideLeft();
            setTimeout(
              function() 
              {
                $("#load-case-4").trigger("click");
              }, 1000);
          }, 1500);
      }, 2000);
});