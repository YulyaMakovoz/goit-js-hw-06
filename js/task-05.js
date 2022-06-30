const textInput = document.querySelector('#name-input');
const textOutput = document.querySelector('#name-output');

function onInput(event) {
    textOutput.textContent = event.currentTarget.value;
}
function onAnonim(event) {
    if (event.currentTarget.value.length === +0) {
        return textOutput.textContent = "Anonymous"
    }
}

textInput.addEventListener('input', onInput);
textInput.addEventListener('blur', onAnonim);
