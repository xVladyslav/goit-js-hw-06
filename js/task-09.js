function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

// converter of computed bg-color of body from rgb to hex -> took from stackoverflow :) 
const rgb2hex = (rgb) => `#${rgb.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/).slice(1).map(n => parseInt(n, 10).toString(16).padStart(2, '0')).join('')}`

const btn = document.querySelector('button.change-color');
const span = document.querySelector('span.color');

btn.addEventListener('click', () => {
  let newColor = getRandomHexColor();

  // ---- need this condition because getRandomHexColor sometimes returns wrong value
  newColor = newColor.length < 7 ? '#fd5bcc' : newColor;

  document.body.style.backgroundColor = newColor;
  span.textContent = newColor;
})

// set the initial bg-color of body to the span
span.textContent = rgb2hex(getComputedStyle(document.body).getPropertyValue('background-color'));
