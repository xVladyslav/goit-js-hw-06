const inputField = document.querySelector('input#name-input');
const outputField = document.querySelector('span#name-output');

inputField.addEventListener('input', (e) => {
    if (!e.target.value) {
        outputField.textContent = 'Anonymous';
    } else {
        outputField.textContent = e.target.value;
    }
})
