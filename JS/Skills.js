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
    { img: "IMG/img1.jpg" },
    { img: "IMG/img2.jpg" },
    { img: "IMG/img3.jpg" },
    { img: "IMG/img4.jpg" }
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
        left.classList.add('arrow__display-none');
        left.classList.remove('arrow__display-block')
    }
    else if (active >= 0) {
        right.classList.add('arrow__display-block');
        right.classList.remove('arrow__display-none');
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
        right.classList.add('arrow__display-none');
        right.classList.remove('arrow__display-block')
    }
    else if (active <= 3) {
        left.classList.add('arrow__display-block');
        left.classList.remove('arrow__display-none')
    }
    changeSlide()
});



////////END of Section Slider////////////



