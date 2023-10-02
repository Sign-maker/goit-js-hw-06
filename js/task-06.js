const inputBox = document.querySelector("#validation-input");

inputBox.addEventListener("blur", onBlur);

function onBlur(event) {
  //   console.log(event);
  const inputClassList = inputBox.classList;
  const valueLength = event.currentTarget.value.length;
  const dataLength = event.currentTarget.dataset.length;

  if (valueLength < dataLength) {
    inputClassList.contains("valid")
      ? inputClassList.replace("valid", "invalid")
      : inputBox.classList.add("invalid");
  } else
    inputClassList.contains("invalid")
      ? inputClassList.replace("invalid", "valid")
      : inputBox.classList.add("valid");

  // console.log(inputBox);
}

// Напиши скрипт, який під час втрати фокусу на інпуті(подія blur), перевіряє його вміст щодо правильної кількості введених символів.
//     Яка кількість символів повинна бути в інпуті, зазначається в його атрибуті data-length.
//     Якщо введена правильна кількість символів, то border інпуту стає зеленим, якщо неправильна кількість - червоним.

// Для додавання стилів використовуй CSS-класи valid і invalid, які ми вже додали у вихідні файли завдання.

// Второй вариант, не такой красивый, но нет лишнего действия add, когда выполняются условия 3 и 4, хотя add под капотом, и само проверяет, есть ли такой класс
// 1. value.length < dataset.length && !inputClassList.contains("invalid")&&!inputClassList.contains("valid")
// inputBox.classList.add("invalid");

// 2. value.length > dataset.length && !inputClassList.contains("invalid")&&!inputClassList.contains("valid")
// inputBox.classList.add("valid");

// 5. value.length < dataset.length && inputClassList.contains("valid")
// inputClassList.replace("valid", "invalid")
// 6. value.length > dataset.length && inputClassList.contains("invalid")
//inputClassList.replace("invalid", "valid")

// 3. value.length < dataset.length && inputClassList.contains("invalid")
// no action
// 4. value.length > dataset.length && inputClassList.contains("valid")
// no action
