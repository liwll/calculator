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
const buttons = document.querySelector('.btns');
function createCalculator() {
    for (let i = 9; i >= 0; i--) {
        const button = document.createElement('button');
        button.classList.add('num-btn');
        button.textContent = i;
        buttons.appendChild(button);
        console.log(button.textContent);
    }

    const eqlBtn = document.createElement('button');
    eqlBtn.classList.add('eql-btn')
    eqlBtn.textContent = '=';
    buttons.appendChild(eqlBtn);

    const clrBtn = document.createElement('button');
    clrBtn.classList.add('clr-btn')
    clrBtn.textContent = 'clr';
    buttons.appendChild(clrBtn);

    const addBtn = document.createElement('button');
    addBtn.classList.add('op-btn');
    addBtn.textContent = '+';
    
    const subBtn = document.createElement('button');
    subBtn.classList.add('op-btn');
    subBtn.textContent = '-';

    const mulBtn = document.createElement('button');
    mulBtn.classList.add('op-btn');
    mulBtn.textContent = '*';

    const divBtn = document.createElement('button');
    divBtn.classList.add('op-btn');
    divBtn.textContent = '/';
}
createCalculator();