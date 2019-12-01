(function carousel() {

    let translateValue = 0;
    const leftArrow = document.querySelector('.left');
    const rightArrow = document.querySelector('.right');
    const controlsContainer = document.querySelector('.control');
    const slider = document.getElementById('slider_ID');
    const image = document.querySelector('.slider_img');


    ////////// fading of images ///////////

    const fadeIn = image => {
        image.classList.add('fade');
        setTimeout(() => image.classList.remove('fade'), 800);
    }

    ////////// Slider of images ///////////

    const changeSlide = photoNumber => {
        image.src = `IMG/img${photoNumber}.jpg`;
        fadeIn(image);
    }

    //////////  Function to handle Arrows and dots //////////////

    const handleArrows = (target, slider, previousIndicator) => {
        const slideDirection = target.classList.contains('left') ? translateValue += 25 : translateValue -= 25;
        slider.style.transform = `translateX(${slideDirection}%)`


        const indicatorsList = document.querySelector('.indicators-list');
        indicatorsList.children[-(translateValue / 25)].classList.add('selected');
        previousIndicator.classList.remove('selected');
    }

    //////////  Function to handle dots //////////////

    const handleIndicators = (target, slider, previousIndicator) => {
        if (previousIndicator === target) return;
        target.classList.add('selected');
        translateValue = target.value * -25
        slider.style.transform = `translateX(${translateValue}%)`;
        previousIndicator.classList.remove('selected');
    }

    ////////// Fade effect function //////////////

    const checkArrowsActivity = unactiveArrow => {
        unactiveArrow !== null && unactiveArrow.classList.remove('unactive');
        if (translateValue === 0) {
            leftArrow.classList.add('unactive');
        }
        else if (translateValue === -75) {
            rightArrow.classList.add('unactive');
        }
    }

    ////////// Listener to execute functions ///////////////////

    controlsContainer.addEventListener('click', (e) => {
        const target = e.target.tagName === 'I' ? e.target.parentNode : e.target;

        const previousIndicator = document.querySelector('.selected');
        const unactiveArrow = document.querySelector('.unactive');

        if (target.tagName === "SPAN") {
            handleArrows(target, slider, previousIndicator);
        }
        else if (target.tagName === 'LI') {
            handleIndicators(target, slider, previousIndicator);
        }
        else {
            return;
        }
        checkArrowsActivity(unactiveArrow);
        changeSlide(-(translateValue / 25) + 1);
    })
}());

