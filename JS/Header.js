const headerBg = document.getElementById('bg')
const navbar = document.getElementsByClassName('navbar')

window.addEventListener('scroll', () => {
    headerBg.style.opacity = 1 - +window.pageYOffset / 550 + '';
    headerBg.style.top = +window.pageYOffset + 'px';
    headerBg.style.backgroundPositionY = - +window.pageYOffset / 2 + 'px';

})

// document.addEventListener('scroll', () => {
//     if (document.body.scrollTop > 300) {
//         navbar.addClass('show');
//     }
//     else {
//         navbar.removeClass('show');
//     };
// });

$(window).scroll(function () {
    // 100 = The point you would like to fade the nav in.

    if ($(window).scrollTop() > 300) {

        $('.navbar').addClass('show');

    } else {

        $('.navbar').removeClass('show');

    };
});

