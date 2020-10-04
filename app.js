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