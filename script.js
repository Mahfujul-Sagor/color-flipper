const body =  document.querySelector('body');
let green = document.querySelector('.green');
let blue = document.querySelector('.blue');
let white = document.querySelector('.white');
let black = document.querySelector('.black');
let random = document.querySelector('.random');

// setting color
function setColor(color) {
  body.style.backgroundColor = color;
};

// action on button click
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
random.addEventListener('click', ()=> {
  setColor(randomColor());
});

// generating a random color
function randomColor() {
  const red = Math.round(Math.random() * 255);
  const green = Math.round(Math.random() * 255);
  const blue = Math.round(Math.random() * 255);
  const color = `rgb(${red}, ${green}, ${blue})`;
  return color;
};