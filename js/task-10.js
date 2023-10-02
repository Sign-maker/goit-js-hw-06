const refs = {
  inputBox: document.querySelector("#controls input"),
  createBtn: document.querySelector("[data-create]"),
  destroyBtn: document.querySelector("[data-destroy]"),
  outputDiv: document.querySelector("#boxes"),
};

// initial
if (!refs.inputBox.value) {
  refs.createBtn.disabled = true;
}

if (!refs.outputDiv.innerHTML) {
  refs.destroyBtn.disabled = true;
}

refs.inputBox.addEventListener("input", onInput);
refs.createBtn.addEventListener("click", onCreate);
refs.destroyBtn.addEventListener("click", onDestroy);

//if user put some manualy
function onInput(event) {
  !!(
    Number(event.currentTarget.value) > 0 &&
    Number(event.currentTarget.value) <= 100
  )
    ? (refs.createBtn.disabled = false)
    : (refs.createBtn.disabled = true);
}

function onCreate() {
  createBoxes(Number(refs.inputBox.value));
  refs.destroyBtn.disabled = false;
}

function onDestroy(event) {
  refs.outputDiv.innerHTML = "";
  refs.destroyBtn.disabled = true;
}

function createBoxes(amount) {
  const divArr = [];
  const INIT_SIZE = 20;
  const STEP = 10;

  for (let i = 1; i <= amount; i += 1) {
    const currentDiv = document.createElement("div");

    currentDiv.style.backgroundColor = getRandomHexColor();
    currentDiv.style.width = `${INIT_SIZE + STEP * i}px`;
    currentDiv.style.height = `${INIT_SIZE + STEP * i}px`;

    divArr.push(currentDiv);
  }
  refs.outputDiv.append(...divArr);
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

// Напиши скрипт створення і очищення колекції елементів. Користувач вводить кількість елементів в input і натискає кнопку Створити, після чого рендериться колекція. Натисненням на кнопку Очистити, колекція елементів очищається.
// Створи функцію createBoxes(amount), яка приймає один параметр - число. Функція створює стільки <div>, скільки вказано в amount і додає їх у div#boxes.

//     Розміри найпершого <div> - 30px на 30px.
//     Кожен елемент після першого повинен бути ширшим і вищим від попереднього на 10px.
//     Всі елементи повинні мати випадковий колір фону у форматі HEX. Використовуй готову функцію getRandomHexColor для отримання кольору.
// Створи функцію destroyBoxes(), яка очищає вміст div#boxes, у такий спосіб видаляючи всі створені елементи.
