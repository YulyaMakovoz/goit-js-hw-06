const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];


// const ingredient = [...ingredients];
// const itemEl = document.createElement('li');
// itemEl.textContent = ingredient[0];
// itemEl.classList.add('item');
// console.log(itemEl);

const ingredientsEl = document.querySelector('#ingredients');
// ingredientsEl.append(itemEl);

const makeItem = ingredients => {
  return ingredients.map(ingredient => {
    const itemEl = document.createElement('li');
    itemEl.textContent = ingredient;
    itemEl.classList.add('item');
    
    return itemEl;
  });
};

// console.log(itemEl);

const elements = makeItem(ingredients);
ingredientsEl.append(...elements);



