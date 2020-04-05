// console.log(window.location);
// console.log(window.history);
// console.log(window.name);

/* Поиск элемента DOM */

// let boxById = document.getElementById('box-third');
// console.log(boxById);

// let boxesByClass = document.getElementsByClassName('box');
// console.log(boxesByClass);

// let boxQuery = document.querySelector('.box');
// console.log(boxQuery);

// let boxesQuery = document.querySelectorAll('.box');
// console.log(boxesQuery);

let h1 = document.createElement('h1');

h1.innerText = 'Hello';

document.body.append(h1);

let a = document.createElement('a');
a.href = 'https://google.com';
a.innerText = 'Google';

let div = document.createElement('div');
div.innerHTML = '<p>Hello, World!</p>';

div.append(a);

document.body.append(div);

let h1rem = document.querySelector('h1');
h1.remove();

/* Class list */

let box3 = document.querySelector('#box-third');
box3.classList.add('box__active');

box3.style.width = '150px';

console.log(box3.offsetWidth);
console.log(box3.clientWidth);

const BOX_ACTIVE = 'box__active';
const BOX = 'box';
const BOX_ACTIVE_CLICK = 'box__active_click';

let boxes = document.querySelectorAll('.' + BOX);

let arr = [...boxes];

for (let i = 0; i < arr.length; i++) {
    arr[i].onmouseenter = function(e) {
        this.classList.add(BOX_ACTIVE);
    }

    arr[i].onmouseleave = function(e) {
        this.classList.remove(BOX_ACTIVE);
    }

    arr[i].onclick = function(e) {
        this.classList.toggle(BOX_ACTIVE_CLICK);
    }
}

let box4 = document.querySelector('.box:nth-child(4)');

let container = document.querySelector('.container');
let box5 = container.querySelector('.box:nth-child(5)');
