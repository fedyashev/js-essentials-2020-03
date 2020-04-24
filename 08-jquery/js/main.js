$(document).ready(function() {
    // let submenu = $('.sub-menu');
    // console.log(submenu);

    // if (submenu.length) {
    //     console.log('submenu');
    // } else {
    //     console.log('false')
    // }

    // let raw = submenu[0];
    // console.log(raw);

    // let menuItems = $('.menu-item');
    // console.log(menuItems);

    // let first = menuItems.eq(0);
    // console.log(first);
    // console.log(first.html());
    // console.log(first.text());

    // let textSub = $('.sub-menu').text();
    // console.log(textSub);

    // let child = menuItems.filter('.menu-item-has-children');
    // console.log(child);

    // let submenu = $('.sub-menu', child);
    // console.log(submenu)

    // let p = $('<p>');
    // p.text('Paragraph');
    // p.css({
    //     'font-size': '3rem',
    //     'color': '#000057',

    // });

    // $('body').append(p);
    // console.log(p);

    // $('.sub-menu').remove();

    $('.btnMenu').on('click', function(e) {
        let menu = $('.menu--nav');
        menu.toggleClass('active');
        // menu.slideToggle(300);
        if (menu.hasClass('active')) {
            menu.fadeIn(300);
        } else {
            menu.fadeOut(300);
        }
    });

    $('.menu--nav').fadeOut();

    let testForm = $('.test-form');
    let inputText = $('.form-text', testForm);
    let btnShow = $('.btnShow', testForm);
    let result = $('.result', testForm);

    btnShow.click(function(e) {
        let time = result.attr('data-time');
        console.log(time);
        result.fadeOut();
        result.text(inputText.val());
        result.fadeIn(time);
    });

});