let firstNumber = "";
let secondNumber = "";
let operator = "";
let result = 0;

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
    } else {
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
  });
});

const equalsButton = document.querySelector(`button[name=btnEquals]`);
equalsButton.addEventListener("click", () => {
  if (secondNumber) {
    result = operate(firstNumber, secondNumber, operator);
    displayBig.textContent = result;
    displaySmall.textContent = `${firstNumber} ${operator} ${secondNumber} =`;
    resetValues();
    firstNumber = result; //maybe store this in a different variable and get it when you need it
  }
});

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

//Add a click event for btnNumber
//When cklicked, check if firstNumber has a value
//To be clear, 0 and "" is false, but "0" is true.
//If there is no value, add btnNumber to firstNumber
//if firstNumber has a value, add btnNumber to secondNumber

//Add clickevenet for btnOperator
//check if firstNumber is true or false
//If firstNumber is false, set firstNumber to "0"
//Change display.textContent to "0" and the operator value, using template literals for example
//Set operator to proper value

//If firstnumber is true
//Check if secondNumber is true
//If true, operate both numbers, and use the result as firstnumber.
//set the display to the calculated result and the new operator

//If secondNumber is false, check if there is an operator
//If there is no operator, change the oeprator and add it to display
//If there is one, also cchange the operator but also remove the last letter of textcontent
//Remove the last letter of textdisplay and add the new operator
