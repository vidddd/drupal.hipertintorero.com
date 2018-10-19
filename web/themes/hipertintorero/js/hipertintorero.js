(function($){
//  "use strict";
  $("#primary-menu-mobile").mmenu({
    extensions	: [ 'effect-slide-menu', 'pageshadow' ],
    counters	: true,
    navbar 		: {
      title		: 'Menu'
    },
    navbars		: [ ],
    slidingSubmenus : false
  });
  var API = $("#primary-menu-mobile").data("mmenu");
  $("#menu-button").on('click', function() {
    API.open();
  });
  $(".owl-carousel").owlCarousel({
    loop:true,
    items: 4,
    //margin:10,
    nav:true,
  /*  responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }*/
  });
  /*--------------------------------------------*/
  /* ----------------- Slider ----------------- */
  /*--------------------------------------------*/

  var revapi1;
  if($("#rev_slider_1_1").revolution == undefined){
    revslider_showDoubleJqueryError("#rev_slider_1_1");
  }else{
    revapi1 = $("#rev_slider_1_1").show().revolution({
      sliderType:"standard",
      jsFileLocation:"js/",
      sliderLayout:"auto",
      dottedOverlay:"none",
      delay:9000,
      navigation: {
        keyboardNavigation:"on",
        keyboard_direction: "horizontal",
        mouseScrollNavigation:"off",
        onHoverStop:"on",
        touch:{
          touchenabled:"on",
          swipe_threshold: 75,
          swipe_min_touches: 50,
          swipe_direction: "horizontal",
          drag_block_vertical: false
        }
        ,
        arrows: {
          style:"metis",
          enable:true,
          hide_onmobile:true,
          hide_under:600,
          hide_onleave:true,
          hide_delay:200,
          hide_delay_mobile:1200,
          tmp:'',
          left: {
            h_align:"left",
            v_align:"center",
            h_offset:30,
            v_offset:0
          },
          right: {
            h_align:"right",
            v_align:"center",
            h_offset:30,
            v_offset:0
          }
        }
        ,
        bullets: {
          enable:true,
          hide_onmobile:true,
          hide_under:600,
          style:"custom",
          hide_onleave:true,
          hide_delay:200,
          hide_delay_mobile:1200,
          direction:"horizontal",
          h_align:"center",
          v_align:"bottom",
          h_offset:0,
          v_offset:30,
          space:5,
          tmp:''
        }
      },
      responsiveLevels:[1240,1024,778,480],
      gridwidth:[1920,1024,778,480],
      gridheight:[655,500,800,720],
      lazyType:"smart",
      parallax: {
        type:"mouse",
        origo:"enterpoint",
        speed:2000,
        levels:[2,3,4,5,6,7,12,16,10,50],
      },
      shadow:0,
      spinner:"spinner2",
      stopLoop:"off",
      stopAfterLoops:-1,
      stopAtSlide:-1,
      shuffle:"off",
      autoHeight:"off",
      hideThumbsOnMobile:"off",
      hideSliderAtLimit:0,
      hideCaptionAtLimit:0,
      hideAllCaptionAtLilmit:0,
      debugMode:false,
      fallbacks: {
        simplifyAll:"off",
        nextSlideOnWindowFocus:"off",
        disableFocusListener:false,
      }
    });
  }
/*
  var revapi2;
  if($("#rev_slider_2_1").revolution == undefined){
    revslider_showDoubleJqueryError("#rev_slider_2_1");
  }else{
    revapi2 = $("#rev_slider_2_1").show().revolution({
      sliderType:"standard",
      jsFileLocation:"js/",
      sliderLayout:"auto",
      dottedOverlay:"none",
      delay:9000,
      navigation: {
        keyboardNavigation:"on",
        keyboard_direction: "horizontal",
        mouseScrollNavigation:"off",
        onHoverStop:"on",
        touch:{
          touchenabled:"on",
          swipe_threshold: 75,
          swipe_min_touches: 50,
          swipe_direction: "horizontal",
          drag_block_vertical: false
        }
        ,
        arrows: {
          style:"metis",
          enable:true,
          hide_onmobile:true,
          hide_under:600,
          hide_onleave:true,
          hide_delay:200,
          hide_delay_mobile:1200,
          tmp:'',
          left: {
            h_align:"left",
            v_align:"center",
            h_offset:30,
            v_offset:0
          },
          right: {
            h_align:"right",
            v_align:"center",
            h_offset:30,
            v_offset:0
          }
        }
        ,
        bullets: {
          enable:true,
          hide_onmobile:true,
          hide_under:600,
          style:"custom",
          hide_onleave:true,
          hide_delay:200,
          hide_delay_mobile:1200,
          direction:"horizontal",
          h_align:"center",
          v_align:"bottom",
          h_offset:0,
          v_offset:30,
          space:5,
          tmp:''
        }
      },
      responsiveLevels:[1240,1024,778,480],
      gridwidth:[1920,1024,778,480],
      gridheight:[550,500,800,720],
      lazyType:"smart",
      parallax: {
        type:"mouse",
        origo:"enterpoint",
        speed:2000,
        levels:[2,3,4,5,6,7,12,16,10,50],
      },
      shadow:0,
      spinner:"spinner2",
      stopLoop:"off",
      stopAfterLoops:-1,
      stopAtSlide:-1,
      shuffle:"off",
      autoHeight:"off",
      hideThumbsOnMobile:"off",
      hideSliderAtLimit:0,
      hideCaptionAtLimit:0,
      hideAllCaptionAtLilmit:0,
      debugMode:false,
      fallbacks: {
        simplifyAll:"off",
        nextSlideOnWindowFocus:"off",
        disableFocusListener:false,
      }
    });
  }

  var revapi3;
  if($("#rev_slider_3_1").revolution == undefined){
    revslider_showDoubleJqueryError("#rev_slider_3_1");
  }else{
    revapi3 = $("#rev_slider_3_1").show().revolution({
      sliderType:"standard",
      jsFileLocation:"js/",
      sliderLayout:"auto",
      dottedOverlay:"none",
      delay:9000,
      navigation: {
        keyboardNavigation:"on",
        keyboard_direction: "horizontal",
        mouseScrollNavigation:"off",
        onHoverStop:"on",
        touch:{
          touchenabled:"on",
          swipe_threshold: 75,
          swipe_min_touches: 50,
          swipe_direction: "horizontal",
          drag_block_vertical: false
        }
        ,
        arrows: {
          style:"metis",
          enable:true,
          hide_onmobile:true,
          hide_under:600,
          hide_onleave:true,
          hide_delay:200,
          hide_delay_mobile:1200,
          tmp:'',
          left: {
            h_align:"left",
            v_align:"center",
            h_offset:30,
            v_offset:0
          },
          right: {
            h_align:"right",
            v_align:"center",
            h_offset:30,
            v_offset:0
          }
        }
        ,
        bullets: {
          enable:true,
          hide_onmobile:true,
          hide_under:600,
          style:"custom",
          hide_onleave:true,
          hide_delay:200,
          hide_delay_mobile:1200,
          direction:"horizontal",
          h_align:"center",
          v_align:"bottom",
          h_offset:0,
          v_offset:30,
          space:5,
          tmp:''
        }
      },
      responsiveLevels:[1240,1024,778,480],
      gridwidth:[1920,1024,778,480],
      gridheight:[700,370,283,175],
      lazyType:"smart",
      parallax: {
        type:"mouse",
        origo:"enterpoint",
        speed:2000,
        levels:[2,3,4,5,6,7,12,16,10,50],
      },
      shadow:0,
      spinner:"spinner2",
      stopLoop:"off",
      stopAfterLoops:-1,
      stopAtSlide:-1,
      shuffle:"off",
      autoHeight:"off",
      hideThumbsOnMobile:"off",
      hideSliderAtLimit:0,
      hideCaptionAtLimit:0,
      hideAllCaptionAtLilmit:0,
      debugMode:false,
      fallbacks: {
        simplifyAll:"off",
        nextSlideOnWindowFocus:"off",
        disableFocusListener:false,
      }
    });
  }
*/

  /*--------------------------------------------*/
  /* ---------------- Mini Cart ----------------*/
  /*--------------------------------------------*/
  var cartIcon = $('.mini-cart__button');
  var cartBox = $('.mini-cart__content');
  var isOpen = false;
  cartIcon.on('click', function(){
    if(isOpen == false){
      cartBox.addClass('mini-cart__content-open');
      isOpen = true;
    } else {
      cartBox.removeClass('mini-cart__content-open');
      isOpen = false;
    }
  });
  cartIcon.on('mouseup', function(){
    return false;
  });
  cartBox.on('mouseup', function(){
    return false;
  });
  $(document).on('mouseup', function(){
    if(isOpen == true){
      cartIcon
        .css('display','block')
        .click();
    }
  });

  $.scrollUp({
    scrollName: 'scrollUp', // Element ID
    topDistance: '300', // Distance from top before showing element (px)
    topSpeed: 300, // Speed back to top (ms)
    animation: 'fade', // Fade, slide, none
    animationInSpeed: 500, // Animation in speed (ms)
    animationOutSpeed: 500, // Animation out speed (ms)
    scrollText: '<i class="fa fa-angle-up"></i>', // Text for element
    activeOverlay: false, // Set CSS color to display scrollUp active point, e.g '#00FFFF'
  });

})(jQuery);
