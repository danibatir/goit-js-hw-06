const formular = document.querySelector(".login-form");
formular.addEventListener("submit", function (event) {
  event.preventDefault();
  const inputs = document.querySelectorAll("input");
  let isEmpty = false;
  inputs.forEach((input) => {
    if (input.value === "") {
      isEmpty = true;
    }
  });
  if (isEmpty === true) {
    alert("Trebuie completate toate campurile");
  } else {
    formular.submit();
  }
});
