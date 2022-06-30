const inputEl = document.querySelector('#validation-input');
console.dir(inputEl);
function onVerification(event) {
    if (event.currentTarget.value.trim().length === Number(inputEl.dataset.length)) {
        return inputEl.classList.add('valid');
    }
    return inputEl.classList.add('invalid');
    
}

inputEl.addEventListener('blur', onVerification);

// console.log(event.currentTarget.value.length);

