const input = document.querySelector("#font-size-control");
const spanText = document.querySelector("#text");
input.addEventListener("input", function (event) {
  const fontSize = event.target.value;
  if (fontSize >= 16 && fontSize <= 96) {
    spanText.style.fontSize = fontSize + "px";
  }
});
