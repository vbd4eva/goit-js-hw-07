const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const ingredientsEl = document.querySelector('#ingredients');

const makeLiElements = ingredients => {
  return ingredients.map(ingridient => {
    const liEl = document.createElement('li');
    liEl.textContent = ingridient;

    return liEl;
  });
};

const elementsLi = makeLiElements(ingredients);
ingredientsEl.append(...elementsLi);
