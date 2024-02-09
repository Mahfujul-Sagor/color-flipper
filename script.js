const body =  document.querySelector('body');
let green = document.querySelector('.green');
let blue = document.querySelector('.blue');
let white = document.querySelector('.white');
let black = document.querySelector('.black');
let random = document.querySelector('.random');


function setColor(color) {
  body.style.backgroundColor = color;
};

green.addEventListener('click', ()=> {
  setColor('green');
});
blue.addEventListener('click', ()=> {
  setColor('blue');
});
white.addEventListener('click', ()=> {
  setColor('white');
});
black.addEventListener('click', ()=> {
  setColor('black');
});


function randomColor() {
  
};