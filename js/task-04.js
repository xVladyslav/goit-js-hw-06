const valueField = document.querySelector('#value');
const decrementBtn = document.querySelector('button[data-action="decrement"]');
const incrementBtn = document.querySelector('button[data-action="increment"]');

let counterValue = 0;

const updateUI = () => {
    valueField.textContent = counterValue;
}

const makeDecrement = () => {
    counterValue -= 1;
    updateUI();
}
const makeIncrement = () => {
    counterValue += 1;
    updateUI();
}

decrementBtn.addEventListener('click', makeDecrement);
incrementBtn.addEventListener('click', makeIncrement);
