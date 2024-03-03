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

//Populate display with numbers
const numberedButtons = document.querySelectorAll(`button[name="btnNumber"]`);
const display = document.querySelector("#display-text");
numberedButtons.forEach((button) => {
  button.addEventListener("click", () => {
    //the algorithm should be entered here
    display.textContent += button.value;
  });
});

//when you press any button, it should be checked if operator has been pressed already
//aka when button clicked, check if operator is true
//if false and pressed button is number, add to first number
//if operator is true, and pressed button is number, add to second number

//if operator is true, and pressed button is operator, check if there is a second number
//If there is no second number, change the operator
//If there is a second number, call the operate function with the two numbers and first operator
//then return the answer on the display, save the answer as first number, and use the operator
