// Elements
const previousElement = document.querySelector('#previous');
const currentElement = document.querySelector('#current');
const container = document.querySelector('.container');

// Process Variables
let currentValue = '';
let previousValue = '';
let operation = null;

//Event Listeners
container.addEventListener('click', operate);

// Main Management Canter
function operate(e) {
    switch (e.target.className) {
        case 'item number':
            createNumber(e.target.textContent);           
            break;
        case 'item operation':
            getOperation(e.target.textContent);
            break;
        case 'item ac':
            clear();
            break;
        case 'item del':
            del();
            break;
        case 'item equal':
            calculate();
            break;
        default:
            return;
    }
    
    updateDisplay();
}

// Create Number
function createNumber(keyValue) {
    if(keyValue === '.' && currentValue.includes('.')) return;
    currentValue += keyValue;
}

// Convert number to show with commas
function convertNumber(stringNumber) {
    const floatNumber = parseFloat(stringNumber);
    if(isNaN(floatNumber)) return '';
    return floatNumber.toLocaleString('en');
}

// Show the number on screeen
function updateDisplay(){
    currentElement.innerText = convertNumber(currentValue);

    if(operation != null) previousElement.innerText = `${convertNumber(previousValue)} ${operation}`;    
}

// Delete number from whole number one by one
function del() {
    currentValue = currentValue.slice(0, -1);
}

// Clear number completely
function clear() {
    currentValue = '';
    previousValue = '';
    operation = undefined ;
}

// Run when operation buttons are pressed
function getOperation(operationSign) {
    if(currentValue === '') return;
    if(previousValue !== '') calculate();

    operation = operationSign;
    previousValue = currentValue;
    currentValue = '';
}

// Four process
function calculate() {
    let  result;
    const previous = parseFloat(previousValue);
    const current = parseFloat(currentValue);

    if(isNaN(previous) || isNaN(current)) return;
    switch (operation) {
        case '+':
            result = previous + current;
            break;
        case '-':
            result = previous - current;
            break;
        case '*':
            result = previous * current;
            break;
        case '÷':
            result = previous / current;
            break;    
        default:
            return;
    }

    currentValue = result.toString();
    operation = undefined;
    previousValue = '';
}