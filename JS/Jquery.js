// fadein and out navbar function
// scrollTop() > Number = The point you would like to fade the nav in.

// $(window).scroll(function () {

//     if ($(window).scrollTop() > 300) {

//         $('.navbar').addClass('show');

//     } else {

//         $('.navbar').removeClass('show');

//     };
// });

window.onscroll = function () {
    console.log('scrolling');
};

window.addEventListener('scroll', function () {
    if ($(window).scrollTop() > 300) {

        $('.navbar').addClass('show');

    } else {

        $('.navbar').removeClass('show');

    };
});