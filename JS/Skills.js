const left = document.querySelector('.left');
const right = document.querySelector('.right');

const slider = document.querySelector('.slider');

const indicatorParent = document.querySelector('.control ul');
const indicators = document.querySelectorAll('.control li');
let index = 0;
let active = 0;

///////////IMAGE SLIDER/////////

const slideList = [
    { img: "IMG/img1.jpg" },
    { img: "IMG/img2.jpg" },
    { img: "IMG/img3.jpg" },
    { img: "IMG/img4.jpg" }
];

/////   simply image slider ///

const image = document.querySelector('img.slider_img');

const changeSlide = () => {
    image.src = slideList[active].img;
}

///// fade in and out funtion for image slider /////

const fadeIn = () => {
    document.querySelector('.slider_img').classList.add('fadein');
    setTimeout(() => {
        document.querySelector('.slider_img').classList.remove('fadein');
    }, 600)
}


////////END of IMAGE SLIDER/////////

//////// Section Slider + image////////////

indicators.forEach((indicator, i) => {
    indicator.addEventListener('click', () => {

        ///// position dots ////

        document.querySelector('.control .selected').classList.remove('selected');
        indicator.classList.add('selected');
        slider.style.transform = 'translateX(' + (i) * -25 + '%)';
        index = i;
    });
});

///// function to slide slider in left side

left.addEventListener('click', () => {
    index = (index > 0) ? index - 1 : 0;
    document.querySelector('.control .selected').classList.remove('selected');
    indicatorParent.children[index].classList.add('selected');
    slider.style.transform = 'translateX(' + (index) * -25 + '%)';
    active = index;

    fadeIn()
    changeSlide()
});

///// function to slide slider in right side


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

