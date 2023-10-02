const refs = {
  inputControl: document.querySelector("#font-size-control"),
  outputSpan: document.querySelector("#text"),
};
// initial value
refs.outputSpan.style.fontSize = refs.inputControl.value + "px";

refs.inputControl.addEventListener("input", onMove);

function onMove(event) {
  // console.log(event);
  refs.outputSpan.style.fontSize = event.currentTarget.value + "px";
}

// Напиши скрипт, який реагує на зміну значення input#font-size-control (подія input) і змінює інлайн-стиль span#text, оновлюючи властивість font-size. В результаті, перетягуючи повзунок, буде змінюватися розмір тексту.
