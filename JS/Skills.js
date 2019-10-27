const left = document.querySelector('.left');
const right = document.querySelector('.right');

const slider = document.querySelector('.slider');

const indicatorParent = document.querySelector('.control ul');
const indicators = document.querySelectorAll('.control li');
index = 0;
let active = 0;

///////////IMAGE SLIDER/////////
const slideList = [
    { img: "img/img1.jpg" },
    { img: "img/img2.jpg" },
    { img: "img/img3.jpg" },
    { img: "img/img4.jpg" }
];

const image = document.querySelector('img.slider_img');

const changeSlide = () => {
    image.src = slideList[active].img;
}


const fadeIn = () => {
    document.querySelector('.slider_img').classList.add('fade');
    setTimeout(() => {
        document.querySelector('.slider_img').classList.remove('fade');

    }, 600)

    // if (active === 0 || active === 3) {
    //     document.querySelector('.slider_img').classList.remove('fade');
    //  }
}


////////END of IMAGE SLIDER/////////

//////// Section Slider + image////////////

indicators.forEach((indicator, i) => {
    indicator.addEventListener('click', () => {

        document.querySelector('.control .selected').classList.remove('selected');
        indicator.classList.add('selected');
        slider.style.transform = 'translateX(' + (i) * -25 + '%)';
        index = i;

        changeSlide()
    });
});

left.addEventListener('click', () => {
    index = (index > 0) ? index - 1 : 0;
    document.querySelector('.control .selected').classList.remove('selected');
    indicatorParent.children[index].classList.add('selected');
    slider.style.transform = 'translateX(' + (index) * -25 + '%)';
    active = index;
    fadeIn()
    changeSlide()
});

right.addEventListener('click', () => {
    index = (index < 4 - 1) ? index + 1 : 3;
    document.querySelector('.control .selected').classList.remove('selected');
    indicatorParent.children[index].classList.add('selected');
    slider.style.transform = 'translateX(' + (index) * -25 + '%)';
    active = index;
    fadeIn()
    changeSlide()
});


////////END of Section Slider////////////

