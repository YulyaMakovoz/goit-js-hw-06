const textInput = document.querySelector('#name-input');
const textOutput = document.querySelector('#name-output');


function onInput(event) {
    if (event.currentTarget.value !== "") {
     return textOutput.textContent = event.currentTarget.value;   
    }
    return textOutput.textContent = "Anonymous"
}


textInput.addEventListener('input', onInput);

