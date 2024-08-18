$(document).ready(function() {
    $("li:first-child").addClass("first");
    $("li:last-child").addClass("last");
    $('[href="#"]').attr("href", "javascript:;");
    $('.menu-Bar').click(function() {
        $(this).toggleClass('open');
        $('.menuWrap').toggleClass('open');
        $('body').toggleClass('ovr-hiddn');
    });

    $('.closePop,.overlay').click(function(){
        $('.popupMain').fadeOut();
        $('.overlay').fadeOut();
    });

});
// secVid
$(document).on('click', '.videoSec-playBtn', function() {
    if($(this).hasClass('vdStart')) {
        $('#secVid').get(0).play();
        $(this).removeClass('vdStart').addClass('vdStop');
    } else {
        $('#secVid').get(0).pause();
        $(this).removeClass('vdStop').addClass('vdStart');
    }
})


// Slider For
$('.slider-for').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: false,
    arrows: false,
    fade: true,
    asNavFor: '.slider-nav'
});
$('.slider-nav').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    asNavFor: '.slider-for',
    dots: false,
    focusOnSelect: true
});

// Sticky Navigation
$(window).scroll(function() {
    var scroll = $(window).scrollTop();
    if (scroll >= 200) {
        $(".fixed").addClass("sticky");
    } else {
        $(".fixed").removeClass("sticky");
    }
});


// Normal Slider
$('.index-slider').slick({
  dots: false,
  infinite: true,
  speed: 300,
  slidesToShow: 1,
  slidesToScroll: 1,
});

// historySec-slider

$('.historySec-slider').slick({
    dots: false,
    arrows: true,
    infinite: true,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 1,
});

$('.miningSec-slider').slick({
    dots: false,
    arrows: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: true,
    variableWidth: true,
});

$('.miningSec2-slider').slick({
    dots: true,
    arrows: false,
    infinite: true,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 1,
});

// aboutSec2-slider

$('.aboutSec2-slider').slick({
    dots: false,
    arrows: true,
    infinite: true,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 1,
});

// Navigation Menu 
$(window).on('load', function() {
var currentUrl = window.location.href.substr(window.location.href.lastIndexOf("/") + 1);
$('ul.menu li a').each(function() {
    var hrefVal = $(this).attr('href');
    if (hrefVal == currentUrl) {
        $(this).removeClass('active');
        $(this).closest('li').addClass('active')
        $('ul.menu li.first').removeClass('active');
    }
});

});

// Tabbing JS
  $('[data-targetit]').on('click', function(e) {
  $(this).addClass('current');
  $(this).siblings().removeClass('current');
  var target = $(this).data('targetit');
  $('.' + target).siblings('[class^="box-"]').hide();
  $('.' + target).fadeIn();
  $(".tab-slider").slick("setPosition");
});


// $('a[href*="#"]').not('[href="#"]').not('[href="#0"]').click(function(e) {
//     // Check if the clicked link's pathname and hostname match the current document
//     if (location.pathname.replace(/^\//, "") == this.pathname.replace(/^\//, "") && location.hostname == this.hostname) {
//         // Find the target element using the hash from the href
//         var t = $(this.hash);
//         // If the target element is not found by ID, try finding it by name attribute
//         t = t.length ? t : $("[name=" + this.hash.slice(1) + "]");
//         // If the target element exists
//         if (t.length) {
//             // Prevent the default click action
//             e.preventDefault();
//             // Animate the scroll to the target element over 1 second
//             $("html, body").animate({
//                 scrollTop: t.offset().top
//             }, 1e3, function() {
//                 // Try to focus on the target element
//                 var e = $(t);
//                 e.focus();
//                 // If the element is focusable and focused, do nothing
//                 if (e.is(":focus")) return !1;
//                 // If the element is not focusable, add a temporary tabindex and focus it
//                 e.attr("tabindex", "-1");
//                 e.focus();
//             });
//         }
//     }
// });

/* RESPONSIVE JS */
if ($(window).width() < 825) {
}