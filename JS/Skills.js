const left = document.querySelector('.left');
const right = document.querySelector('.right');

const slider = document.querySelector('.slider');

const indicatorParent = document.querySelector('.control ul');
const indicators = document.querySelectorAll('.control li');
let index = 0;
let active = 0;

///////////IMAGE SLIDER/////////


const image = document.querySelector('img.slider_img');

const fadeIn = () => {
    document.querySelector('.slider_img').classList.add('fade');
    setTimeout(() => {
        document.querySelector('.slider_img').classList.remove('fade');

    }, 800)

    // if (active === 0 || active === 3) {
    //     document.querySelector('.slider_img').classList.remove('fade');
    //  }
}

const slideList = [
    { img: "img/img1.jpg" },
    { img: "img/img2.jpg" },
    { img: "img/img3.jpg" },
    { img: "img/img4.jpg" }
];

const changeSlide = () => {
    image.src = slideList[active].img;
    fadeIn()
}


////////END of IMAGE SLIDER/////////

//////// Section Slider + image////////////

indicators.forEach((indicator, i) => {
    indicator.addEventListener('click', () => {

        document.querySelector('.control .selected').classList.remove('selected');
        indicator.classList.add('selected');
        slider.style.transform = 'translateX(' + (i) * -25 + '%)';
        index = i;
        active = index;

        changeSlide()
        console.log('indicator')
    });
});

left.addEventListener('click', () => {
    index = (index > 0) ? index - 1 : 0;
    document.querySelector('.control .selected').classList.remove('selected');
    indicatorParent.children[index].classList.add('selected');
    slider.style.transform = 'translateX(' + (index) * -25 + '%)';
    active = index;

    if (active <= 0) {
        left.style.display = 'none'
        left.style.cursor = 'auto';
        console.log('remove left')
    }
    else if (active >= 0) {
        right.style.display = 'block'
        right.style.opacity = '1'
        right.style.cursor = 'pointer';
        right.style.transition = '1'
        console.log('display right')
    }
    changeSlide()

    console.log(active)
});

right.addEventListener('click', () => {
    index = (index < 4 - 1) ? index + 1 : 3;
    document.querySelector('.control .selected').classList.remove('selected');
    indicatorParent.children[index].classList.add('selected');
    slider.style.transform = 'translateX(' + (index) * -25 + '%)';
    active = index;

    if (active === 3) {
        right.style.display = 'none'
        right.style.opacity = '0.3'
        right.style.cursor = 'auto';
        console.log('remove right')
    }
    else if (active <= 3) {
        left.style.display = 'block'
        left.style.opacity = '1'
        left.style.cursor = 'pointer';
        console.log('display left')
    }
    changeSlide()
    console.log(active)
});



////////END of Section Slider////////////



