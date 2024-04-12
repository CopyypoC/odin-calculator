const input = document.querySelector('#input');
const keypadContainer = document.querySelector('#keypad-container');
const keyClear = document.querySelector('#key-clear');
let operand1;
let operand2;
let operator;

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
    return a / b;
}

function operate(operator, operand1, operand2) {
    switch (operator) {
        case '+':
            return add(operand1, operand2);
        case '-':
            return subtract(operand1, operand2);
        case '*':
            return multiply(operand1, operand2);
        case '/':
            return divide(operand1, operand2);
    }
}

keypadContainer.addEventListener('click', (e) => {
    let button = e.target;
    // Populate display
    if (button.className.includes('keypad-number')) {
        input.textContent += e.target.textContent;
    }
    // When operator is clicked
});

keyClear.addEventListener('click', () => {
    input.textContent = '';
});