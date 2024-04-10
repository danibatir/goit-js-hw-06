const colorPalette = document.querySelector(".widget");
const button = document.querySelector(".change-color");
const text = document.querySelector(".color");
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
button.addEventListener("click", function (event) {
  const newColor = getRandomHexColor();
  colorPalette.style.backgroundColor = newColor;
  text.textContent = newColor;
});
