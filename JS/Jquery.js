

$(window).scroll(function () {
    // 100 = The point you would like to fade the nav in.

    if ($(window).scrollTop() > 500) {

        $('.navbar').addClass('show');

    } else {

        $('.navbar').removeClass('show');

    };
});

// document.addEventListener('scroll', () => {
//     if (document.body.scrollTop > 300) {
//         navbar.addClass('show');
//     }
//     else {
//         navbar.removeClass('show');
//     };
// });