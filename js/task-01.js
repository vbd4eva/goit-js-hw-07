const refCategories = document.querySelector('ul#categories');
//
//  Посчитает и выведет в консоль количество категорий в ul#categories, то
//       есть элементов li.item. Получится 'В списке 3 категории.'.

const refItems = refCategories.querySelectorAll('.item');

console.log(`В списке ${refItems.length} категории`);

//
//   Для каждого элемента li.item в списке ul#categories, найдет и выведет в
//       консоль текст заголовка элемента (тега h2) и количество элементов в
//       категории (всех вложенных в него элементов li).

refItems.forEach(item => {
  const refItemH2 = item.querySelector('h2');
  console.log('Категория: ', refItemH2.textContent);

  const refItemLi = item.querySelectorAll('li');
  console.log('Количество элементов: ', refItemLi.length);
});
// console.dir(refItems);
// Категория: Животные
// Количество элементов: 4
