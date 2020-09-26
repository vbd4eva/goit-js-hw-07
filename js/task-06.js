const validationInput = document.querySelector('#validation-input');

const dataLength = validationInput.dataset.length;

validationInput.addEventListener('focus', () => {
  validationInput.className = '';
});
validationInput.addEventListener('blur', onValidationInputBlur);

function onValidationInputBlur(e) {
  const charNum = e.target.value.split('').length;

  const currentClass = charNum === Number(dataLength) ? 'valid' : 'invalid';

  validationInput.classList.add(currentClass);
}
