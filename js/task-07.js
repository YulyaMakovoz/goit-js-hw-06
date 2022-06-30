const inputEl = document.querySelector('#font-size-control');
const spanEl = document.querySelector('#text');

console.dir(inputEl);
console.dir(spanEl);

function onChangeSize() {
    spanEl.style.fontSize = `${inputEl.value}px`;
}

inputEl.addEventListener('input', onChangeSize);