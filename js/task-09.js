const refs = {
  body: document.querySelector("body"),
  btn: document.querySelector(".change-color"),
  outputSpan: document.querySelector(".color"),
};

refs.btn.addEventListener("click", onBtnClick);

function onBtnClick() {
  const randomHexColor = getRandomHexColor();
  refs.body.style.backgroundColor = randomHexColor;
  refs.outputSpan.textContent = randomHexColor;
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

// Напиши скрипт, який змінює кольори фону елемента <body> через інлайн-стиль по кліку на button.change-color і виводить значення кольору в span.color.
// Для генерування випадкового кольору використовуй функцію getRandomHexColor.
