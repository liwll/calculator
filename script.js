function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    if (b == 0)
        return false;
    return a / b;
}

function operate(operator, a, b) {
    switch (operator) {
        case '+':
            return add(a, b);
        case '-':
            return subtract(a, b);
        case '*':
            return multiply(a, b);
        case '/':
            return divide(a, b);
    }
}

const calculator = document.querySelector('.calculator');
const display = document.querySelector('.display');
const btns = document.querySelector('.btns');
const numBtns = document.querySelectorAll('.num-btn');
const clrBtn = document.querySelector('#clr-btn');
const opBtns = document.querySelectorAll('.op-btn');
let number = 0;
let numberOther = 0;
let operator = undefined;
let gettingNumOther = false;


function updateDisplay(value) {
    display.textContent = value;
}

function clear() {
    display.textContent = 0;
    number = 0;
    numberOther = 0;
    operator = undefined;
}

function createCalculator() {
    numBtns.forEach(btn => {
        let value = btn.textContent;
        btn.addEventListener('click', () => {
            if (gettingNumOther) {
                numberOther = (numberOther * 10) + Number(value);
                updateDisplay(numberOther);
            }
            else {
                number = (number * 10) + Number(value);
                updateDisplay(number);
            }
        });
    });

    clrBtn.addEventListener('click', () => {
        clear();
    });

    opBtns.forEach(btn => {
        let operation = btn.textContent;
        btn.addEventListener('click', () => {
            if (operator != undefined) {
                if (numberOther === 0) {
                    number = operate(operator, number, number);
                    updateDisplay(number);
                }
                else {
                    number = operate(operator, number, numberOther);
                    updateDisplay(number);
                    numberOther = 0;
                }
            }
            operator = operation;
            gettingNumOther = true;
        });
    });
}

createCalculator();