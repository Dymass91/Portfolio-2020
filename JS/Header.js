const headerBg = document.getElementById('bg')
const headercontent = document.getElementsByClassName('content')


window.addEventListener('scroll', () => {
    headerBg.style.opacity = 1 - +window.pageYOffset / 550 + '';
    headerBg.style.top = +window.pageYOffset + 'px';
    headerBg.style.backgroundPositionY = - +window.pageYOffset / 2 + 'px';


})

