//=================== HEADER   ACCORDION    =============================

$('.flag-click').click(function () {
    $('.flag-arrow').removeClass('active');
    $('.flag-accor-show').slideUp();
    if (!$(this).next().is(':visible')) {
        $(this).next().slideDown();
        $(this).addClass('active');
    }
});

// SHOP_SLIDER==========================
$('.preparato-slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
    arrows: false
});

// SHOP_SERVICE_SLIDETR===========

$(window).on('load resize orientationchange', function () {
    $('.shop.service-row').each(function () {
        var $stand_top_grid = $(this);
        /* Initializes a slick carousel only on mobile screens */
        // slick on mobile
        if ($(window).width() > 991) {
            if ($stand_top_grid.hasClass('slick-initialized')) {
                $stand_top_grid.slick('unslick');
            }
        } else {
            if (!$stand_top_grid.hasClass('slick-initialized')) {
                $stand_top_grid.slick({
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    mobileFirst: true,
                    infinite: true,
                    dots: true,
                    arrows: false,
                    responsive: [
                        {
                            breakpoint: 480,
                            settings: {
                                slidesToShow: 1,
                                slidesToScroll: 1
                            }
                        }
                    ]
                });
            }
        }
    });
});

$('.collection-tab').slick({
    slidesToShow: 7,
    slidesToScroll: 1,
    dots: false,
    arrows: true,
    infinite: true,
    responsive: [
        {
            breakpoint: 991,
            settings: {
                infinite: true,
                slidesToShow: 4,
                slidesToScroll: 1,
                dots: false,
                arrows: true
            }
        },
        {
            breakpoint: 767,
            settings: {
                infinite: true,
                slidesToShow: 2,
                slidesToScroll: 1,
                dots: false,
                arrows: true
            }
        },
        {
            breakpoint: 575,
            settings: {
                infinite: true,
                slidesToShow: 1,
                slidesToScroll: 1,
                dots: false,
                arrows: true
            }
        }
    ]
});

// COLLECTION_ACCORDION===========

$('.catogory-accordion').click(function () {
    $('.catogory-accordion').removeClass('active');
    $('.accordion-item').slideUp();
    if (!$(this).next().is(':visible')) {
        $(this).next().slideDown();
        $(this).addClass('active');
    }
});

// COLLECTION_FILTER-============

$(document).ready(function () {
    $('.prod-filter').click(function () {
        $('.collection-left').toggleClass('active');
        $('.overlay').toggleClass('active');
        $('body,html').toggleClass('scrollno');
    });
    $('.prod-filter .filter-close-icon , .overlay, .filter-title').click(function () {
        $('.collection-left').removeClass('active');
        $('.overlay').removeClass('active');
        $('body,html').removeClass('scrollno');
    });
});

// PDP_SLIDER & thumbnail =====================
$('.pdp-slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    dots: true,
    asNavFor: '.pdp-thumb-slider'
});
$('.pdp-thumb-slider').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    asNavFor: '.pdp-slider',
    dots: false,
    centerMode: false,
    focusOnSelect: true,
    arrows: false
});

// PDP_ACCORDION===========

$('.pdp-accor-item').click(function () {
    $('.pdp-accor-item').removeClass('active');
    $('.pdp-accor-cont').slideUp();
    if (!$(this).next().is(':visible')) {
        $(this).next().slideDown();
        $(this).addClass('active');
    }
});

// USUALLY_SLIDER==================

$('.usualy-wrapper').slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    dots: true,
    arrows: false,
    infinite: true,
    responsive: [
        {
            breakpoint: 991,
            settings: {
                infinite: true,
                slidesToShow: 4,
                slidesToScroll: 1,
                dots: false,
                arrows: false
            }
        },
        {
            breakpoint: 767,
            settings: {
                infinite: true,
                slidesToShow: 2,
                slidesToScroll: 1,
                dots: false,
                arrows: false
            }
        },
        {
            breakpoint: 575,
            settings: {
                infinite: true,
                slidesToShow: 1,
                slidesToScroll: 1,
                dots: false,
                arrows: false
            }
        }
    ]
});

// CART_SLIDER========
$('.cart-slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
    arrows: false
});

$(document).ready(function () {
    $('.header-button-item.shop-cart').click(function () {
        $('.card-popup').toggleClass('active');
        $('.overlay').toggleClass('active');
        $('body,html').toggleClass('scrollno');
    });
    $('.cart-title , .overlay').click(function () {
        $('.card-popup').removeClass('active');
        $('.overlay').removeClass('active');
        $('body,html').removeClass('scrollno');
    });
});
