const textInput = document.querySelector('#name-input');
const textOutput = document.querySelector('#name-output');

function onInput(event) {
    textOutput.textContent = event.currentTarget.value;
}


textInput.addEventListener('input', onInput);
