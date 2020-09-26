//
const refs = {
  blockCounter: document.querySelector('#counter'),
  counterValue: document.querySelector('#value'),
  buttonIncrement: document.querySelector('[data-action="increment"]'),
  buttonDecrement: document.querySelector('[data-action="decrement"]'),
};

let counterValue = Number(refs.counterValue.textContent);

const increment = () => (counterValue += 1);
const decrement = () => (counterValue -= 1);

const changeCounterElValue = event => {
  //
  const counterAction = event.target.dataset.action;

  if ('increment' === counterAction) increment();
  if ('decrement' === counterAction) decrement();

  refs.counterValue.textContent = counterValue;
};

refs.buttonIncrement.addEventListener('click', changeCounterElValue);
refs.buttonDecrement.addEventListener('click', changeCounterElValue);

//
//
// сделать через замыкания
// const makeCounter = counterValueEl => {
//   //

//   let counterValue = Number(counterValueEl.textContent);

//   const increment = () => (counterValue += 1);
//   const decrement = () => (counterValue -= 1);

//   const changeCounterValue = event => {
//     const counterAction = event.target.dataset.action;

//     if ('increment' === counterAction) increment();
//     if ('decrement' === counterAction) decrement();

//     counterValueEl.textContent = counterValue;
//   };

//   return changeCounterValue;
// };

// const changeCounterValue = makeCounter(refs.counterValue);
// refs.buttonIncrement.addEventListener('click', changeCounterValue);
// refs.buttonDecrement.addEventListener('click', changeCounterValue);
