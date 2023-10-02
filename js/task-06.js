const inputBox = document.querySelector('#validation-input');

inputBox.addEventListener('blur', onBlur);

function onBlur(event) {
	const valueLength = event.currentTarget.value.length;
	const dataLength = Number(event.currentTarget.dataset.length);

	// console.log(valueLength, typeof valueLength);
	// console.log(dataLength, typeof dataLength);
	// console.log(valueLength !== dataLength);

	inputBox.classList.toggle('invalid', valueLength !== dataLength);
	inputBox.classList.toggle('valid', valueLength == dataLength);
}

// Напиши скрипт, який під час втрати фокусу на інпуті(подія blur), перевіряє його вміст щодо правильної кількості введених символів.
//     Яка кількість символів повинна бути в інпуті, зазначається в його атрибуті data-length.
//     Якщо введена правильна кількість символів, то border інпуту стає зеленим, якщо неправильна кількість - червоним.

// Для додавання стилів використовуй CSS-класи valid і invalid, які ми вже додали у вихідні файли завдання.

// if (valueLength !== dataLength) {
// 	inputClassList.contains('valid')
// 		? inputClassList.replace('valid', 'invalid')
// 		: inputBox.classList.add('invalid');
// } else
// 	inputClassList.contains('invalid')
// 		? inputClassList.replace('invalid', 'valid')
// 		: inputBox.classList.add('valid');
// ==============================================
// if (
// 	valueLength !== dataLength &&
// 	!inputClassList.contains('valid') &&
// 	!inputClassList.contains('invalid')
// ) {
// 	inputBox.classList.add('invalid');
// }

// if (
// 	valueLength == dataLength &&
// 	!inputClassList.contains('valid') &&
// 	!inputClassList.contains('invalid')
// ) {
// 	inputBox.classList.add('valid');
// }

// if (valueLength !== dataLength && inputClassList.contains('valid')) {
// 	inputClassList.replace('valid', 'invalid');
// }

// if (valueLength == dataLength && inputClassList.contains('invalid')) {
// 	inputClassList.replace('invalid', 'valid');
// }
