const inputEl = document.querySelector('#validation-input');
console.dir(inputEl);
function onVerification(event) {
    if (event.currentTarget.value.length === Number(6)) {
        return inputEl.classList.add('valid');
    }
    return inputEl.classList.add('invalid');
}
inputEl.addEventListener('blur', onVerification);


