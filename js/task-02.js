const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const ingredientsRef = document.querySelector("#ingredients");
// console.log(ingredientsRef);

const markupItem = (arr) =>
  arr.map((ingredient) => {
    const itemRef = document.createElement("li");
    itemRef.textContent = ingredient;
    itemRef.classList.add("item");
    // console.log(itemRef);
    return itemRef;
  });

// console.log(markupItem(ingredients));
ingredientsRef.append(...markupItem(ingredients));

// Напиши скрипт, який для кожного елемента масиву ingredients:

//     Створить окремий елемент <li>. Обов'язково використовуй метод document.createElement().
//     Додасть назву інгредієнта як його текстовий вміст.
//     Додасть елементу клас item.
//     Після чого, вставить усі <li> за одну операцію у список ul#ingredients.
