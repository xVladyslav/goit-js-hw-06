const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const elements = ingredients.map(ingredient => {
  const el = document.createElement('li');
  el.textContent = ingredient;
  el.className = 'item';

  return el;
})

document.querySelector('ul#ingredients').append(...elements);
