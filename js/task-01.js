const lista = document.querySelector("#categories");
const categories = lista.children;
console.log("Number of categories: " + categories.length);
const itemLista = document.querySelectorAll(".item");
for (const item of itemLista) {
  const ulElement = item.querySelector("ul");
  console.log("Category: " + item.firstElementChild.textContent);
  console.log("Elements: " + ulElement.children.length);
}
