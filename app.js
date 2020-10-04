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
            creatNumber(e.target.textContent);           
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