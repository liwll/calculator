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
        case '=':
            return a;
    }
}

const calculator = document.querySelector('.calculator');
const display = document.querySelector('.display');
const clrBtn = document.querySelector('#clr-btn');
const negBtn = document.querySelector('#neg-btn');
const perBtn = document.querySelector('#per-btn');
const delBtn = document.querySelector('#del-btn');
const decBtn = document.querySelector('#dec-btn');
const opBtns = document.querySelectorAll('.op-btn');
const numBtns = document.querySelectorAll('.num-btn');
let num = 0;
let numPair = 0;
let operator = undefined;
let gettingNumPair = false;


function updateDisplay(value) {
    display.textContent = value;
}

function clear() {
    display.textContent = 0;
    num = 0;
    numPair = 0;
    operator = undefined;
    gettingNumPair = false;
}

function createCalculator() {
    numBtns.forEach(btn => {
        let value = btn.textContent;
        btn.addEventListener('click', () => {
            if (gettingNumPair) {
                numPair = (numPair * 10) + Number(value);
                updateDisplay(numPair);
            }
            else {
                num = Number(num + value);
                updateDisplay(num);
            }
        });
    });

    clrBtn.addEventListener('click', () => {
        clear();
    });

    negBtn.addEventListener('click', () => {
        num = Number(- + num);
        updateDisplay(num);
    })

    perBtn.addEventListener('click', () => {
        num = num / 100;
        updateDisplay(num);
    })

    decBtn.addEventListener('click', () => {
        num = num + '.';
        updateDisplay(num);
    })

    delBtn.addEventListener('click', () => {
        num = String(num).substring(0, String(num).length - 1);
        console.log(num);
        updateDisplay(num);
    })

    opBtns.forEach(btn => {
        let operation = btn.textContent;
        btn.addEventListener('click', () => {
            if (operator != undefined) {
                if (numPair === 0) {
                    num = operate(operator, num, num);
                    updateDisplay(num);
                }
                else {
                    num = operate(operator, num, numPair);
                    updateDisplay(num);
                    numPair = 0;
                }
            }
            operator = operation;
            gettingNumPair = true;
        });
    });
}

createCalculator();