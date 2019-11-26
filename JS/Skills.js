// const left = document.querySelector('.left');
// const right = document.querySelector('.right');

// const slider = document.querySelector('.slider');

// const indicatorParent = document.querySelector('.control ul');
// const indicators = document.querySelectorAll('.control li');
// let index = 0;
// let active = 0;

// ///////////IMAGE SLIDER/////////


// const image = document.querySelector('img.slider_img');

// const fadeIn = () => {
//     document.querySelector('.slider_img').classList.add('fade');
//     setTimeout(() => {
//         document.querySelector('.slider_img').classList.remove('fade');

//     }, 800)

//     // if (active === 0 || active === 3) {
//     //     document.querySelector('.slider_img').classList.remove('fade');
//     //  }
// }

// const slideList = [
//     { img: "IMG/img1.jpg" },
//     { img: "IMG/img2.jpg" },
//     { img: "IMG/img3.jpg" },
//     { img: "IMG/img4.jpg" }
// ];

// const changeSlide = () => {
//     image.src = slideList[active].img;
//     fadeIn()
// }


// ////////END of IMAGE SLIDER/////////

// //////// Section Slider + image////////////

// indicators.forEach((indicator, i) => {
//     indicator.addEventListener('click', () => {

//         document.querySelector('.control .selected').classList.remove('selected');
//         indicator.classList.add('selected');
//         slider.style.transform = 'translateX(' + (i) * -25 + '%)';
//         index = i;
//         active = index;

//         changeSlide()
//         console.log('indicator')
//     });
// });

// left.addEventListener('click', () => {
//     index = (index > 0) ? index - 1 : 0;
//     document.querySelector('.control .selected').classList.remove('selected');
//     indicatorParent.children[index].classList.add('selected');
//     slider.style.transform = 'translateX(' + (index) * -25 + '%)';
//     active = index;

//     if (active <= 0) {
//         left.classList.add('arrow__display-none');
//         left.classList.remove('arrow__display-block')
//     }
//     else if (active >= 0) {
//         right.classList.add('arrow__display-block');
//         right.classList.remove('arrow__display-none');
//     }
//     changeSlide()

//     console.log(active)
// });

// right.addEventListener('click', () => {
//     index = (index < 4 - 1) ? index + 1 : 3;
//     document.querySelector('.control .selected').classList.remove('selected');
//     indicatorParent.children[index].classList.add('selected');
//     slider.style.transform = 'translateX(' + (index) * -25 + '%)';
//     active = index;

//     if (active === 3) {
//         right.classList.add('arrow__display-none');
//         right.classList.remove('arrow__display-block')
//     }
//     else if (active <= 3) {
//         left.classList.add('arrow__display-block');
//         left.classList.remove('arrow__display-none')
//     }
//     changeSlide()
// }); 



////////END of Section Slider////////////



(function program() {
    let translateValue = 0;
    const controlsContainer = document.querySelector('.control');

    const fadeIn = (image) => {
        image.classList.add('fade');
        setTimeout(() => image.classList.remove('fade'), 800);
    }
    const changeSlide = (photoNumber) => {
        const image = document.querySelector('.slider_img');
        image.src = `IMG/img${photoNumber}.jpg`;
        fadeIn(image)
        console.log(photoNumber)
    }
    const handleArrows = function (target, slider, previousIndicator) {
        if (target.classList.contains('right')) {
            translateValue === 0 && target.previousElementSibling.classList.remove('unactive');
            slider.style.transform = `translateX(${translateValue - 25}%)`;
            translateValue -= 25;
            translateValue === -75 && target.classList.add('unactive');
        }
        else if (target.classList.contains('left')) {
            translateValue === -75 && target.nextElementSibling.classList.remove('unactive');
            slider.style.transform = `translateX(${translateValue + 25}%)`;
            translateValue += 25;
            translateValue === 0 && target.classList.add('unactive');
        }
        const indicatorsList = document.querySelector('.indicators-list');
        indicatorsList.children[-(translateValue / 25)].classList.add('selected');
        previousIndicator.classList.remove('selected');
    }
    const handleIndicators = function (target, slider, previousIndicator) {
        target.classList.add('selected');
        slider.style.transform = `translateX(${target.value * -25}%)`;
        previousIndicator.classList.remove('selected');
        console.log('gdzie to robi')
    }

    controlsContainer.addEventListener('click', function (e) {
        const target = e.target.tagName === 'I' ? e.target.parentNode : e.target;
        const slider = document.querySelector('.slider');
        const previousIndicator = document.querySelector('.selected');
        if (target.tagName === "SPAN") {
            handleArrows(target, slider, previousIndicator);
            changeSlide(-(translateValue / 25) + 1);
        }
        else if (target.tagName === 'LI') {
            handleIndicators(target, slider, previousIndicator);
            changeSlide(-(translateValue / 25) + 1);
        }
    })
}());
