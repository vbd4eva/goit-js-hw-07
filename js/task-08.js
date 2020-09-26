// Напиши скрипт создания и очистки коллекции элементов.
// Пользователь вводит количество элементов в input и нажимает кнопку Создать,
//     после чего рендерится коллекция.
// При нажатии на кнопку Очистить, коллекция элементов очищается.
const refs = {
  controlsBlock: document.querySelector('#controls'),
  controlsInput: document.querySelector('#controls input[type="number"]'),
  boxes: document.querySelector('#boxes'),
};

const boxElParams = {
  boxElSize: 30,
};

refs.controlsBlock.addEventListener('click', chooseAction);

function chooseAction(e) {
  const targetEl = e.target;

  const currentAction = targetEl.dataset.action;

  //при клике не на кнопку
  if (!currentAction) return;

  destroyBoxes();

  //При нажатии на кнопку  Создать
  if ('render' === currentAction) renderBoxes();
}

function destroyBoxes() {
  refs.boxes.innerHTML = '';
}

function renderBoxes() {
  let numberOfBoxes = Number(refs.controlsInput.value);

  if (numberOfBoxes <= 0) {
    refs.boxes.innerHTML = `<b>Введите корректное кол-во єл-тов.</b>`;
    return;
  }

  createBoxes(numberOfBoxes);
}

function createBoxes(amount) {
  let boxesEls = [];
  let boxElSize = boxElParams.boxElSize;

  while (amount > 0) {
    boxesEls = [...boxesEls, getBoxEl('div', boxElSize, amount)];

    boxElSize += 10;
    amount -= 1;
  }

  refs.boxes.append(...boxesEls);
}

function getBoxEl(tag, boxElSize, textContent) {
  const boxEl = document.createElement(tag);
  boxEl.textContent = textContent;
  boxEl.style.width = boxElSize + 'px';
  boxEl.style.height = boxElSize + 'px';
  boxEl.style.backgroundColor = getRandomRgbColor();

  return boxEl;
}

function randomInteger(min, max) {
  // получить случайное число от (min-0.5) до (max+0.5)
  let rand = min - 0.5 + Math.random() * (max - min + 1);
  return Math.round(rand);
}

function getRandomRgbColor() {
  const r = randomInteger(0, 255);
  const g = randomInteger(0, 255);
  const b = randomInteger(0, 255);
  const rgb = `rgb(${r}, ${g}, ${b})`;

  return rgb;
}
