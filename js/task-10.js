function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

let elements = [];

const input = document.querySelector('#controls input');
const boxes = document.querySelector('#boxes');
const createBtn = document.querySelector('#controls [data-create]');
const destroyBtn = document.querySelector('#controls [data-destroy]');

const createBoxes = (amount) => {
  const elementsCount = elements.length;

  for (let i = elementsCount; i < amount + elementsCount; i++) {
    const div = document.createElement('div');
    const bgColor = getRandomHexColor();

    div.style.width = `${(30 + i * 10)}px`;
    div.style.height = `${(30 + i * 10)}px`;

    // ---------------------- need this condition because getRandomHexColor sometimes returns wrong value
    div.style.backgroundColor = bgColor.length < 7 ? '#fd5bcc' : bgColor;

    elements.push(div);
  }

  boxes.append(...elements)
}

const destroyBoxes = () => {
  boxes.innerHTML = '';
  elements = [];
}

createBtn.addEventListener('click', () => createBoxes(parseInt(input.value)));
destroyBtn.addEventListener('click', destroyBoxes);
