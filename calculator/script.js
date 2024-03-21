const display = document.getElementById('display');
let firstOperand = null;
let secondOperand = null;
let operator = null;

function appendNumber(number) {
    if (operator === null) {
        firstOperand = firstOperand !== null ? parseFloat(`${firstOperand}${number}`) : number;
        display.value = firstOperand;
    } else {
        secondOperand = secondOperand !== null ? parseFloat(`${secondOperand}${number}`) : number;
        display.value = secondOperand;
    }
}

function setOperator(op) {
    if (firstOperand !== null && secondOperand !== null) {
        calculate();
    }
    operator = op;
}

function clearDisplay() {
    firstOperand = null;
    secondOperand = null;
    operator = null;
    display.value = '';
}

function calculate() {
    if (firstOperand !== null && secondOperand !== null && operator !== null) {
        let result = 0;
        switch (operator) {
            case '+':
                result = firstOperand + secondOperand;
                break;
            case '-':
                result = firstOperand - secondOperand;
                break;
            case '*':
                result = firstOperand * secondOperand;
                break;
            case '/':
                if (secondOperand === 0) {
                    alert('Cannot divide by zero');
                    return;
                }
                result = firstOperand / secondOperand;
                break;
        }
        display.value = result;
        firstOperand = result;
        secondOperand = null;
        operator = null;
    }
}