const studentName = "Sulukhan Aizharykova";
const group = "SE-2529";
const firstNumber = 12;
const secondNumber = 4;
const isStudent = true;

console.log("Name:", studentName);
console.log("Group:", group);
console.log("String:", studentName, "Type:", typeof studentName);
console.log("Number:", firstNumber, "Type:", typeof firstNumber);
console.log("Boolean:", isStudent, "Type:", typeof isStudent);

const introduction = "My name is " + studentName + ", group " + group + ".";
console.log(introduction);

const results = [
  "String: " + studentName,
  "Number: " + firstNumber,
  "Boolean: " + isStudent,
  firstNumber + " + " + secondNumber + " = " + (firstNumber + secondNumber),
  firstNumber + " - " + secondNumber + " = " + (firstNumber - secondNumber),
  firstNumber + " * " + secondNumber + " = " + (firstNumber * secondNumber),
  firstNumber + " / " + secondNumber + " = " + (firstNumber / secondNumber),
  firstNumber + " % " + secondNumber + " = " + (firstNumber % secondNumber),
  introduction
];

for (const result of results) {
  console.log(result);
}

document.getElementById("variables-output").textContent = results.join("\n");

function showGreeting() {
  alert("Hello, JavaScript World!");
}

document.getElementById("greeting-button").addEventListener("click", showGreeting);
showGreeting();
