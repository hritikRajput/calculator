let firstNum = "";
let secondNum = "";
let currOperand = "";
let currOperator = null;
let result = 0;

let displayValue = document.querySelector('.display-content');
const numbers = document.querySelectorAll('.number');
const operators = document.querySelectorAll('.operator');
const clear = document.querySelector('.clear');
const equal = document.querySelector('.equal');

numbers.forEach((number) => {
    number.addEventListener('click', () => populateNumber(number.textContent))
});
operators.forEach((operator) => {
    operator.addEventListener('click', () => populateOperator(operator.textContent))
})
clear.addEventListener('click', clearDisplay)
equal.addEventListener('click', evaluate)


function populateNumber(num) {
    if (displayValue.textContent === "0") {
        displayValue.textContent = "";
    }
    displayValue.textContent = displayValue.textContent + num;
    currOperand = currOperand + num;
}

function clearDisplay() {
    displayValue.textContent = "0";
    firstNum = "";
    secondNum = "";
    currOperator = null;
    currOperand=""
}

function populateOperator(oper) {
    if (currOperator != null) {
        evaluate();
    }
    currOperator = oper;
    firstNum = currOperand;
    currOperand = "";
    if(!firstNum){
        clearDisplay()
        return
    }
    displayValue.textContent = firstNum + currOperator
}

function evaluate() {
    if(currOperator===null){
        return;
    }
    if (currOperator === "/" && secondNum === "0") {
        alert("ERROR! You can not divide by zero.");
        clearDisplay()
        return;
    }
    secondNum = currOperand;
    currOperand = `${Math.round(operate(currOperator, firstNum, secondNum) * 10) / 10}`;
    console.log(firstNum, secondNum, currOperand, currOperator)
    displayValue.textContent = currOperand;
    currOperator=null;
}

// -------------- Basic Mathematical Operations -------------

function add(num1, num2) {
    return num1 + num2;
}

function subtract(num1, num2) {
    return num1 - num2;
}

function multiply(num1, num2) {
    return num1 * num2;
}

function divide(num1, num2) {
    return num1 / num2;
}


function operate(op, param1, param2) {
    param1 = Number(param1);
    param2 = Number(param2);
    if (op === "+") {
        return add(param1, param2)
    }
    else if (op === "-") {
        return subtract(param1, param2)
    }
    else if (op === "*") {
        return multiply(param1, param2)
    }
    else if (op === "/") {
        if (param2 === 0) {
            return null;
        }
        return divide(param1, param2)
    }
    else {
        return null;
    }
}

