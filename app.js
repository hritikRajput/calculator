let displayValue = document.querySelector('.display-content');
let firstNum = 0;
let secondNum = 0;
let operator = null;

function add(num1, num2){
    return num1 + num2;
}

function subtract(num1, num2){
    return num1 - num2;
}

function multiply(num1, num2){
    return num1 * num2;
}

function divide(num1, num2){
    return num1/num2;
}

function operate(op, param1, param2){
    if(op==="+"){
        return add(param1, param2)
    }
    else if(op==="-"){
        return subtract(param1, param2)
    }
    else if(op==="*"){
        return multiply(param1, param2)
    }
    else if(op==="/"){
        return divide(param1, param2)
    }
}

function populateDisplay(e){
    let currKey = e.target.textContent
    if(displayValue.textContent==="0"){
        displayValue.textContent=""
    }
    displayValue.textContent = displayValue.textContent + currKey;
    if(currKey==="+" || currKey==="-" || currKey==="*" || currKey==="/"){
        operator = currKey;
    }
    else if(currKey==="="){
        const result = operate(operator, firstNum, secondNum);
        displayValue.textContent = `${result}`;
    }
    else{
        if(operator===null){
            firstNum = firstNum*10 + parseInt(currKey);
        }
        else{
            secondNum = secondNum * 10 + parseInt(currKey);
        }
    }
}

function clearDisplay(e){
    displayValue.textContent="0";
    firstNum=0;
    secondNum=0;
    operator=null;
}


const numbers = document.querySelectorAll('.key');
const clear = document.querySelector('.clear');
numbers.forEach((number)=>{
    number.addEventListener('click', populateDisplay)
});
clear.addEventListener('click', clearDisplay)