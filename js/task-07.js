const inputRef = document.querySelector("#font-size-control");
const spanRef = document.querySelector("#text");

inputRef.addEventListener("input", clbFn);
function clbFn() {
  spanRef.style.fontSize = inputRef.value + "px";
}
