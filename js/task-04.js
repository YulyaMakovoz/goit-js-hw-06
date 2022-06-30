let counterValue = 0;

const minusButton = document.querySelector('button[data-action="decrement"]');
const plusButton = document.querySelector('button[data-action="increment"]');
const valueEL = document.querySelector('#value');

const functionMinus = () => {
    
    counterValue -= 1;
    valueEL.textContent = counterValue;
}

const functionPlus = () => {
    
    counterValue += 1;
    valueEL.textContent = counterValue;
}

minusButton.addEventListener('click', functionMinus);
plusButton.addEventListener('click', functionPlus);