const counterValueElement = document.querySelector("#value");
const decrementButton = document.querySelector('[data-action="decrement"]');
const incrementButton = document.querySelector('[data-action="increment"]');
let counterValue = 0;
function counterValueUpdate() {
  counterValueElement.textContent = counterValue;
}
function increment() {
  counterValue++;
  counterValueUpdate();
}
function decrement() {
  counterValue--;
  counterValueUpdate();
}
decrementButton.addEventListener("click", decrement);
incrementButton.addEventListener("click", increment);
