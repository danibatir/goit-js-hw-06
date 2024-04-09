const inputElement = document.querySelector("#name-input");
const spanElement = document.querySelector("#name-output");
inputElement.addEventListener("input", function () {
  if (inputElement.value === " ") {
    spanElement.textContent = "Anonymous";
  } else {
    spanElement.textContent = inputElement.value;
  }
});
