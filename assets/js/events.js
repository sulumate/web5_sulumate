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


const calculatorForm = document.getElementById("calculator-form");
const calculatorResult = document.getElementById("calculator-result");

function displayCalculation(message, isError = false) {
  calculatorResult.textContent = message;
  calculatorResult.classList.toggle("error", isError);
}

calculatorForm.addEventListener("submit", function (event) {
  event.preventDefault();
  const firstInput = document.getElementById("first-number");
  const secondInput = document.getElementById("second-number");
  const first = firstInput.valueAsNumber;
  const second = secondInput.valueAsNumber;
  const operation = document.getElementById("operation").value;

  if (firstInput.value.trim() === "" || secondInput.value.trim() === "") {
    displayCalculation("Please enter both numbers.", true);
    return;
  }

  if (!Number.isFinite(first) || !Number.isFinite(second)) {
    displayCalculation("Please enter valid, finite numbers.", true);
    return;
  }

  let result;
  let symbol;

  switch (operation) {
    case "add":
      result = first + second;
      symbol = "+";
      break;
    case "subtract":
      result = first - second;
      symbol = "−";
      break;
    case "multiply":
      result = first * second;
      symbol = "×";
      break;
    case "divide":
      if (second === 0) {
        displayCalculation("Cannot divide by zero.", true);
        return;
      }
      result = first / second;
      symbol = "÷";
      break;
    default:
      displayCalculation("Please choose a valid operation.", true);
      return;
  }

  if (!Number.isFinite(result)) {
    displayCalculation("The result is outside the supported number range.", true);
    return;
  }

  displayCalculation(first + " " + symbol + " " + second + " = " + result);
});
