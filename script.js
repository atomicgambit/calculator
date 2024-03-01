let firstNumber = 0;
let secondNumber = 0;
let operator = "";

function operate(a, b, operator) {
  let result = 0;
  switch (operator) {
    case "add":
      result = a + b;
      break;
    case "subtract":
      result = a - b;
      break;
    case "multiply":
      result = a * b;
      break;
    case "divide":
      result = a / b;
      break;
  }
  return result;
}

const displayedButtons = document.querySelectorAll(`button[type="button"]`);
const display = document.querySelector("#display-text");
displayedButtons.forEach((button) => {
  button.addEventListener("click", () => {
    display.textContent += button.value;
  });
});

//Jezus, I guess it works now because I select the button itself instead of the class. For fucks sake.

//Populating the display when you click the number buttons
//Add a click event to every number button except the first row(that comes later)
//When clicked, change the text content of text display, adding the new clicken content
//Also when clicked, the variable should be stored
