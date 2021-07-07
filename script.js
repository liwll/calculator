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
let operation = undefined;
let inOperation = false;

function updateDisplay(value) {
    let ogValue = display.textContent;
    let newValue = Number(ogValue * 10) + Number(value);
    display.textContent = newValue;
}

function clear() {
    display.textContent = 0;
    number = 0;
    operation = undefined;
    inOperation = false;
}

function createCalculator() {
    numBtns.forEach(btn => {
        let value = btn.textContent;
        btn.addEventListener('click', () => {
            updateDisplay(value);
        });
    });

    clrBtn.addEventListener('click', () => {
        clear();
    });
}

createCalculator();