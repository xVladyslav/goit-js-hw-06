const fontSlider = document.querySelector('input#font-size-control');
const textToChange = document.querySelector('span#text');

let fontSize = fontSlider.value;

const updateUI = () => {
    textToChange.style.fontSize = fontSize + 'px';
}

fontSlider.addEventListener('input', (e) => {
    fontSize = e.target.value;
    updateUI();
})

// Set the initital value of slider as a font-size
updateUI();
