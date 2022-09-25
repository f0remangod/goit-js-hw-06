const valueRef = document.querySelector("#value");
const decrementButtonRef = document.querySelector('[data-action="decrement"]');
const incrementButtonRef = document.querySelector('[data-action="increment"]');
let counterValue = 0;

decrementButtonRef.addEventListener("click", decrement);
incrementButtonRef.addEventListener("click", increment);

function decrement() {
  counterValue -= 1;
  valueRef.textContent = counterValue;
}

function increment() {
  counterValue += 1;
  valueRef.textContent = counterValue;
}
