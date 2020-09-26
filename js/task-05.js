// Напиши скрипт который, при наборе текста в инпуте input#name-input (событие input),
// подставляет его текущее значение в span#name - output.
// Если инпут пустой, в спане должна отображаться строка 'незнакомец'.

const nameInputEl = document.querySelector('#name-input');
const nameOutputEl = document.querySelector('#name-output');

nameInputEl.addEventListener('input', _.debounce(onInputNameEl, 250));

function onInputNameEl(e) {
  nameOutputEl.textContent = e.target.value;
  if (nameOutputEl.textContent === '') nameOutputEl.textContent = 'незнакомец';
}
