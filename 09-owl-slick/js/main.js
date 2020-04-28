$(document).ready(function () {
    if ($('.owners .owl-carousel').length) {
        const owl = $('.owners .owl-carousel').owlCarousel({
            loop: true,
            margin: 30,
            nav: true,
            dots: false,
            // autoplay: true,
            autoplaySpeed: 2000,
            navSpeed: 2000,
            autoplayTimeout: 1000,
            responsive: {
                0: {
                    items: 1
                },
                768: {
                    items: 2
                },
                992: {
                    items: 4
                }
            }
        });

        owl.on('change.owl.carousel', function (event) {
            console.log(event);
        });

        owl.on('changed.owl.carousel', function (event) {
            console.log(event);
        });
    }

    if ($('.banner .slick-banner').length) {
        $('.banner .slick-banner').slick({
            infinite: true,
            slidesToShow: 3,
            slidesToScroll: 1,
            dots: true
        });
    }
});