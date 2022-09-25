const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const containerEl = document.querySelector("#ingredients");

const makeItem = (ingredient) => {
  const itemEl = document.createElement("li");

  itemEl.textContent = ingredient;
  itemEl.classList.add("item");
  return itemEl;
};

const elements = ingredients.map(makeItem);

containerEl.append(...elements);
