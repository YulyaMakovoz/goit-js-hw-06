function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
console.log(getRandomHexColor());

const bodyEl = document.body;
const buttonEl = document.querySelector('.change-color');
const spanEl = document.querySelector('.color');

function onChangeColor() {
  spanEl.textContent = getRandomHexColor();
  bodyEl.style.backgroundColor = getRandomHexColor();
}

buttonEl.addEventListener('click', onChangeColor)



