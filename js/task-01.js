const listRef = document.querySelector("#categories");
const itemRefs = document.querySelectorAll(".item");

console.log(`Number of categories: ${listRef.children.length}`);

for (let i = 0; i < itemRefs.length; i += 1) {
  const categoryNameRef = itemRefs[i].querySelector("h2");
  const categoryItemRef = itemRefs[i].querySelector("ul");

  console.log(`Category: ${categoryNameRef.textContent}`);
  console.log(`Elements: ${categoryItemRef.children.length}`);
}
