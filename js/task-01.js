const categoriesRef = document.querySelectorAll('#categories .item');
console.log(`Number of categories: ${categoriesRef.length}`);

categoriesRef.forEach(category => {
	console.log(`Category: ${category.firstElementChild.textContent}`);
	console.log(`Elements: ${category.lastElementChild.children.length}`);
});

//     Порахує і виведе в консоль кількість категорій в ul#categories, тобто елементів li.item.
//     Для кожного элемента li.item у списку ul#categories, знайде і виведе в консоль текст заголовку елемента (тегу <h2>) і кількість елементів в категорії (усіх <li>, вкладених в нього).

// Для виконання цього завдання потрібно використати метод forEach() і властивості навігації по DOM.
// Number of categories: 3

// Category: Animals
// Elements: 4

// Category: Products
// Elements: 3

// Category: Technologies
// Elements: 5
