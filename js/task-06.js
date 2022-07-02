const inputEl = document.querySelector('#validation-input');
console.dir(inputEl);
function onVerification(event) {
    if (event.currentTarget.value.trim().length === Number(inputEl.dataset.length)) {
        inputEl.classList.remove('invalid');
        return inputEl.classList.add('valid');
    }
    inputEl.classList.remove('valid');
    return inputEl.classList.add('invalid');
    
}

inputEl.addEventListener('blur', onVerification);



