function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

let elementsCount = 0;

const input = document.querySelector('#controls input');
const boxes = document.querySelector('#boxes');
const createBtn = document.querySelector('#controls [data-create]');
const destroyBtn = document.querySelector('#controls [data-destroy]');

const createBoxes = (amount) => {
  for (let i = elementsCount; i < amount + elementsCount; i++) {
    const div = document.createElement('div');
    const bgColor = getRandomHexColor();

    div.style.width = `${(30 + i * 10)}px`;
    div.style.height = `${(30 + i * 10)}px`;

    // ---------------------- need this condition because getRandomHexColor sometimes returns wrong value
    div.style.backgroundColor = bgColor.length < 7 ? '#fd5bcc' : bgColor;

    boxes.append(div)
  }
  elementsCount += amount;
}

const destroyBoxes = () => {
  boxes.innerHTML = '';
  elementsCount = 0;
}

createBtn.addEventListener('click', () => createBoxes(parseInt(input.value)));
destroyBtn.addEventListener('click', destroyBoxes);
