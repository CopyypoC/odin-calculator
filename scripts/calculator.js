const input = document.querySelector('#input');
const keypadContainer = document.querySelector('#keypad-container');
const keyClear = document.querySelector('#key-clear');
let operand1 = '';
let operand2 = '';
let operator = '';

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
    if (button.id === 'key-equal') {
        input.textContent = operate(operator, Number(operand1), Number(operand2));
    }
    // Populate display
    if (button.className.includes('keypad-number')) {
        input.textContent += e.target.textContent;
        // Get operand1 from input
        if (operator.length > 0) {
            operand2 += e.target.textContent
        } else {
            operand1 += e.target.textContent;
        }
    }
    // Get operator from button press
    if (button.className.includes('keypad-operator')) {
        operator = e.target.textContent;
        input.textContent = '';
    }
    // When operator is clicked

});

keyClear.addEventListener('click', () => {
    input.textContent = '';
    operand1 = '';
    operand2 = '';
    operator = '';
});

// Get operand2 from input
// Wait for clear or equal button press
// Call operate with the previous arguments
// Display result in input