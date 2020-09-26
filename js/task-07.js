// Напиши скрипт, который реагирует на изменение значения input#font-size-control(событие input) и
// изменяет инлайн - стиль span#text обновляя свойство font - size.
// В результате при перетаскивании ползунка будет меняться размер текста.

const fontSizeControlEl = document.querySelector('#font-size-control');
const mutableTextEl = document.querySelector('#text');

fontSizeControlEl.addEventListener('change', onChangeFontSizeControlEl);

function onChangeFontSizeControlEl(e) {
  const currentRageValue = e.target.valueAsNumber;

  mutableTextEl.style.fontSize = currentRageValue + 'px';
}
