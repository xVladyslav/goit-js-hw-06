const inputField = document.querySelector('input#validation-input');
const PROPER_LENGTH = parseInt(inputField.getAttribute('data-length'));

inputField.addEventListener('blur', (e) => {
    if (e.target.value.length === PROPER_LENGTH) {
        inputField.className = 'valid';
    } else {
        inputField.className = 'invalid';
    }
})
