const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const listEl = document.querySelector('#ingredients');

const elements = ingredients.map(option => {
  const liEl = document.createElement('li');
  liEl.classList.add('item');
  liEl.textContent = option;
return liEl;
})
listEl.append(...elements);
