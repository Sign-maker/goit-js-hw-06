let counterValue = 0;
const refs = {
  incrementBtn: document.querySelector('[data-action="increment"]'),
  decrementBtn: document.querySelector('[data-action="decrement"]'),
  valueSpan: document.querySelector("#value"),
};

refs.incrementBtn.addEventListener("click", incrementValue);

refs.decrementBtn.addEventListener("click", decrementValue);

function incrementValue() {
  counterValue += 1;
  refs.valueSpan.textContent = counterValue;
}

function decrementValue() {
  counterValue -= 1;
  refs.valueSpan.textContent = counterValue;
}

// Створи змінну counterValue, в якій буде зберігатися поточне значення лічильника та ініціалізуй її значенням 0.
// Додай слухачів кліків до кнопок, всередині яких збільшуй або зменшуй значення лічильника.
// Оновлюй інтерфейс новим значенням змінної counterValue.
