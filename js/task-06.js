const inputTag = document.querySelector("#validation-input");
function verifyLength() {
  const requiredLength = inputTag.getAttribute("data-length");
  const requiredLengthNumber = parseInt(requiredLength, 10);
  if (inputTag.value.length >= requiredLengthNumber) {
    inputTag.style.borderColor = "#4caf50";
  } else {
    inputTag.style.borderColor = "#f44336";
  }
}
inputTag.addEventListener("blur", verifyLength);
