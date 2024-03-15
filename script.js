let firstNumber = "";
let secondNumber = "";
let operator = "";
let result = 0;
let newCalculation = false;

function operate(a, b, operator) {
  let result = 0;
  switch (operator) {
    case "+":
      result = +a + +b;
      break;
    case "-":
      result = +a - +b;
      break;
    case "×":
      result = +a * +b;
      break;
    case "÷":
      result = +a / +b;
      break;
  }
  return result;
}

function resetValues() {
  firstNumber = "";
  secondNumber = "";
  operator = "";
}

//Populate display with numbers
const numberedButtons = document.querySelectorAll(`button[name="btnNumber"]`);
const displaySmall = document.querySelector("#displaySmall");
const displayBig = document.querySelector("#displayBig");
numberedButtons.forEach((button) => {
  button.addEventListener("click", () => {
    //the algorithm should be entered here
    if (operator) {
      secondNumber += button.value;
      displayBig.textContent = secondNumber;
    }
    if (!operator) {
      firstNumber += button.value;
      displayBig.textContent = firstNumber;
    }
    if (newCalculation) {
      resetValues();
      displaySmall.textContent = "";
      displayBig.textContent = "";
      newCalculation = false;
      firstNumber += button.value;
      displayBig.textContent = firstNumber;
    }
    displaySmall.textContent += button.value;
  });
});

const operatorButtons = document.querySelectorAll(`button[name="btnOperator"]`);
operatorButtons.forEach((button) => {
  button.addEventListener("click", () => {
    if (!firstNumber) {
      firstNumber = "0";
    }
    if (firstNumber && secondNumber) {
      // console.log(firstNumber);
      // console.log(secondNumber);
      // console.log(operator);
      result = operate(firstNumber, secondNumber, operator);
      // console.log(result);
      resetValues();
      firstNumber = result;
    }
    operator = button.value;
    displaySmall.textContent = ""; //might be unnecessary code
    displaySmall.textContent += `${firstNumber}${button.value}`;
    newCalculation = false;
  });
});

const equalsButton = document.querySelector(`button[name=btnEquals]`);
equalsButton.addEventListener("click", () => {
  if (secondNumber) {
    result = operate(firstNumber, secondNumber, operator);
    displayBig.textContent = result;
    displaySmall.textContent = `${firstNumber} ${operator} ${secondNumber} =`;
    resetValues();
    firstNumber = result;
    newCalculation = true;
  }
});

//Equal button
//When equal is pressed, store the result in a variable.
//Create a new variable, called newCalculation and set it to true
//If the next input is an operator, use that result as firstNumber
//And set newCalculation to false.
//If the next input is a number AND newCalc is true, clear all values
//Clear all text
//Set newCalculation to false
//And run the rest of the code
//For this, you'll need to add a new clause to buttonClicked

//DISPLAY
//You need two displays, one big and one small above it
//The big one needs to show the current first number, current second number or the result
//The small one needs to show the most recent calculation if equalbutton is pressed
//Or it needs to show the first number

// EQUAL SIGN BUTTON
//Add a click event for operate button
//When clicked, check if there is a second number
//If there is a second number, use the operate function to calculate
//Else do nothing (no action)
