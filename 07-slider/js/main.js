'use strict'


function Slider(selector, properties) {
    const SLIDE = 'slide';
    const SLIDER_CONTROL_RIGHT = 'slider--control__right';
    const SLIDER_CONTROL_LEFT = 'slider--control__left';
    const SLIDE_ACTIVE = 'slide__active';
    const SLIDER_TABS = 'slider--tabs';
    const SLIDER_TAB = 'slider--tab';
    const SLIDER_TAB_ACTIVE = 'slider--tab__active';

    this.time = properties.time;
    this.currentSlide = 0;

    this.slider = document.querySelector(selector);
    this.sliders = [...this.slider.querySelectorAll('.' + SLIDE)]; // '.slide'
    this.tabs = [...this.slider.querySelectorAll('.' + SLIDER_TAB)];

    this.tabs.forEach((tab, index) => {
        tab.onclick = (e) => {
            this.showSlide(index);
        }
    });

    this.btnNext = document.querySelector('.' + SLIDER_CONTROL_RIGHT);
    this.btnNext.onclick = () => this.next();

    this.btnPrev = document.querySelector('.' + SLIDER_CONTROL_LEFT);
    this.btnPrev.onclick = () => this.prev();

    this.sliders[this.currentSlide].classList.add(SLIDE_ACTIVE);
    this.tabs[this.currentSlide].classList.add(SLIDER_TAB_ACTIVE);

    let interval = setInterval(() => {
        this.next();
    }, this.time);

    // clearInterval(interval);

    /*
        let timer = setTimer(function () {
            console.log('Hello');
        }, 5000);

        clearTimer(timer);
    */

}

// Slider.prototype.showSlide = function (index) {
//     const SLIDE_ACTIVE = 'slide__active';
//     this.sliders[this.currentSlide].classList.remove(SLIDE_ACTIVE);
//     this.currentSlide = index;
//     this.sliders[this.currentSlide].classList.add(SLIDE_ACTIVE);
// }

Slider.prototype.showSlide = function (index) {
    const SLIDE_ACTIVE = 'slide__active';
    const SLIDER_TAB_ACTIVE = 'slider--tab__active';
    this.sliders[this.currentSlide].classList.remove(SLIDE_ACTIVE);
    this.tabs[this.currentSlide].classList.remove(SLIDER_TAB_ACTIVE);
    this.currentSlide = index;
    this.sliders[this.currentSlide].classList.add(SLIDE_ACTIVE);
    this.tabs[this.currentSlide].classList.add(SLIDER_TAB_ACTIVE);
}

Slider.prototype.next = function() {
    const SLIDE_ACTIVE = 'slide__active';
    const SLIDER_TAB_ACTIVE = 'slider--tab__active';
    this.sliders[this.currentSlide].classList.remove(SLIDE_ACTIVE);
    this.tabs[this.currentSlide].classList.remove(SLIDER_TAB_ACTIVE);
    this.currentSlide = this.currentSlide < this.sliders.length - 1 ? this.currentSlide + 1 : 0;
    this.sliders[this.currentSlide].classList.add(SLIDE_ACTIVE);
    this.tabs[this.currentSlide].classList.add(SLIDER_TAB_ACTIVE);
}

Slider.prototype.prev = function() {
    const SLIDE_ACTIVE = 'slide__active';
    const SLIDER_TAB_ACTIVE = 'slider--tab__active';
    this.sliders[this.currentSlide].classList.remove(SLIDE_ACTIVE);
    this.tabs[this.currentSlide].classList.remove(SLIDER_TAB_ACTIVE);
    this.currentSlide = this.currentSlide === 0 ? this.sliders.length - 1 : this.currentSlide - 1;
    this.sliders[this.currentSlide].classList.add(SLIDE_ACTIVE);
    this.tabs[this.currentSlide].classList.add(SLIDER_TAB_ACTIVE);
}


const SEL_SLIDER = '.slider';

const slider = new Slider(SEL_SLIDER, { time: 3000 });