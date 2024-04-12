const input = document.querySelector('#input');
const keypadContainer = document.querySelector('#keypad-container');
const keyClear = document.querySelector('#key-clear');
const DECIMAL_PLACES = 1000000;
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

function roundNumber(num) {
    return Math.round(num * DECIMAL_PLACES) / DECIMAL_PLACES;
}

// Keypad input handler, parses text from the display
keypadContainer.addEventListener('click', (e) => {
    let button = e.target;
    // Display final output
    if (button.id === 'key-equal' && (operand1.length > 0) &&
        (operand2.length > 0) && (operator.length > 0)) {
        if (operator === '/' && operand2 === '0') {
            let clear = new Event('click');
            keyClear.dispatchEvent(clear);
            alert('WHO DO YOU THINK YOU ARE?!');
            return;
        }
        input.textContent = roundNumber(operate(operator, 
                                        Number(operand1), 
                                        Number(operand2)));
    }
    if (button.id === 'key-decimal') {
        if (operator.length > 0 && !(operand2.includes('.'))) {
            input.textContent += button.textContent;
            operand2 += button.textContent;
        } else if (!operand1.includes('.')) {
            input.textContent += button.textContent;
            operand1 += button.textContent;
        }
    }
    // Display input number and set operands
    if (button.className.includes('keypad-number')) {
        input.textContent += button.textContent;
        // If operator exists, set operand2 instead of operand1
        if (operator.length > 0) {
            if (!(operand2.length > 0)) {
                input.textContent = button.textContent;
            }
            operand2 += button.textContent
        } else {
            operand1 += button.textContent;
        }
    }
    // Set operator and calculate previous operation if operator exists
    if (button.className.includes('keypad-operator')) {
        if (operator.length > 0) {
            input.textContent = roundNumber(operate(operator, 
                                            Number(operand1), 
                                            Number(operand2)));
            // Use output as operand1 for next operation
            operand1 = input.textContent;
            operand2 = '';
            return;
        }
        operator = button.textContent;
    }

});

// Reset variables and display
keyClear.addEventListener('click', () => {
    input.textContent = '';
    operand1 = '';
    operand2 = '';
    operator = '';
});
