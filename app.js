let firstNum = 0;
let secondNum = 0;
let operator = null;
let result = 0;

let displayValue = document.querySelector('.display-content');
const keys = document.querySelectorAll('.key');
const clear = document.querySelector('.clear');

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
    return Math.round(num1 / num2);
}

// 

function operate(op, param1, param2) {
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
        return divide(param1, param2)
    }
}

function populateDisplay(e) {
    let currKey = e.target.textContent
    if (displayValue.textContent === "0") {
        displayValue.textContent = ""
    }
    if (currKey === "+" || currKey === "-" || currKey === "*" || currKey === "/") {
        if (operator !== null) {
            const result = operate(operator, firstNum, secondNum);
            firstNum = result;
            secondNum = 0;
        }
        operator = currKey;
        displayValue.textContent = firstNum + currKey;

    }
    else if (currKey === "=") {
        if(!firstNum || !operator || !secondNum){
            result =0;
        }else{
         result = operate(operator, firstNum, secondNum);
        }
        displayValue.textContent = `${result}`;
        firstNum = result;
        secondNum=0;
        operator=null;
    }
    else {
        displayValue.textContent = displayValue.textContent + currKey;

        if (operator === null) {
            firstNum = firstNum * 10 + parseInt(currKey);
        }
        else {
            secondNum = secondNum * 10 + parseInt(currKey);
        }
    }
    console.log(firstNum, secondNum, operator, result)
}

function clearDisplay(e) {
    displayValue.textContent = "0";
    firstNum = 0;
    secondNum = 0;
    operator = null;
}



keys.forEach((key) => {
    key.addEventListener('click', populateDisplay)
});
clear.addEventListener('click', clearDisplay)