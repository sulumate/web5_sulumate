const mouseBox = document.getElementById("mouse-box");

mouseBox.addEventListener("mouseover", function () {
  mouseBox.style.backgroundColor = "#dcfce7";
  mouseBox.textContent = "The mouse is over the box!";
});

mouseBox.addEventListener("mouseout", function () {
  mouseBox.style.backgroundColor = "#eff4ff";
  mouseBox.textContent = "Hover over this box";
});

const keyboardInput = document.getElementById("keyboard-input");
const keyboardOutput = document.getElementById("keyboard-output");

keyboardInput.addEventListener("keyup", function () {
  keyboardOutput.textContent = keyboardInput.value;
});
