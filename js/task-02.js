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

  return el.outerHTML;
})

document.querySelector('ul#ingredients').innerHTML = elements.join('');
