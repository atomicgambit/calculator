let firstNumber = "";
let secondNumber = "";
let operator = "";
let result = 0;
let stringFirstNumber = "";
let newCalculation = false;
//Needed for decimal function:
let subtext = ".";

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
  result = Math.round(result * 100) / 100;
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

const decimalButton = document.querySelector(`button[name=btnDecimal]`);
decimalButton.addEventListener("click", () => {
  if (operator && secondNumber.length > 0 && !secondNumber.includes(subtext)) {
    secondNumber += decimalButton.value;
    displayBig.textContent = secondNumber;
    displaySmall.textContent += decimalButton.value;
  }
  if (!operator && firstNumber.length > 0 && !firstNumber.includes(subtext)) {
    firstNumber += decimalButton.value;
    displayBig.textContent = firstNumber;
    displaySmall.textContent += decimalButton.value;
  }
});

//Decimal display
//Create variable subtext and let it equal to .
//create a click event for the decimal button
//if operator is true and len.secondnumber > 0, and if secondNumber does not include .
//add decimal to second Number
//change displayBig and displaySmall
//if operator is not true and len.firstNumber > 0 nad if firstNumber does not include .
//add decimal to first Number
//change displayBig and displaySmall

const operatorButtons = document.querySelectorAll(`button[name="btnOperator"]`);
operatorButtons.forEach((button) => {
  button.addEventListener("click", () => {
    if (!firstNumber) {
      firstNumber = "0";
    }
    if (firstNumber && secondNumber) {
      result = operate(firstNumber, secondNumber, operator);
      resetValues();
      firstNumber = result;
    }
    operator = button.value;
    displaySmall.textContent = ""; //might be unnecessary code
    displaySmall.textContent += `${firstNumber} ${button.value} `;
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

const allClearButton = document.querySelector(`button[name=btnAllClear]`);
allClearButton.addEventListener("click", () => {
  resetValues();
  newCalculation = false;
  displaySmall.textContent = "";
  displayBig.textContent = "";
});

const delButton = document.querySelector(`button[name=btnClear]`);
delButton.addEventListener("click", () => {
  //condition 1, if operator false and firstNumber true
  if (!operator && firstNumber && !newCalculation) {
    if (firstNumber.length == 1) {
      resetValues();
      displaySmall.textContent = "";
      displayBig.textContent = "";
    } else {
      //FirstNumber needs to be string for slice to work
      firstNumber = firstNumber.slice(0, -1);
      displaySmall.textContent = firstNumber;
      displayBig.textContent = firstNumber;
    }
  }
  if (operator && secondNumber) {
    if (secondNumber.length == 1) {
      secondNumber = "0";
      displaySmall.textContent = `${firstNumber} ${operator} ${secondNumber}`;
      displayBig.textContent = secondNumber;
    } else {
      secondNumber = secondNumber.slice(0, -1);
      displaySmall.textContent = `${firstNumber} ${operator} ${secondNumber}`;
      displayBig.textContent = secondNumber;
    }
  }
  if (newCalculation) {
    resetValues();
    newCalculation = false;
    displaySmall.textContent = "";
    displayBig.textContent = "";
  }
});
