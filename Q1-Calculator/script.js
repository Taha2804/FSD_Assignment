/**
 * Q1: JavaScript Calculator
 * Demonstrating:
 * 1. JavaScript Functions
 * 2. Switch Statement
 * 3. DOM Manipulation
 * 4. Arithmetic Operators & Error Handling (Division by Zero)
 */

// Cache DOM elements
const num1Input = document.getElementById('num1');
const num2Input = document.getElementById('num2');
const resultBox = document.getElementById('result-box');
const resultText = document.getElementById('result-text');
const equationHint = document.getElementById('equation-hint');
const btnClear = document.getElementById('btn-clear');
const operatorButtons = document.querySelectorAll('.btn-op');

/**
 * Core calculation function using a switch statement
 * @param {string} operator - '+', '-', '*', or '/'
 */
function calculate(operator) {
  const val1Str = num1Input.value.trim();
  const val2Str = num2Input.value.trim();

  // Validate inputs
  if (val1Str === '' || val2Str === '') {
    showError('Please enter both numbers');
    return;
  }

  const n1 = parseFloat(val1Str);
  const n2 = parseFloat(val2Str);

  if (isNaN(n1) || isNaN(n2)) {
    showError('Please enter valid numeric values');
    return;
  }

  let result = 0;
  let opSymbol = '';

  // Switch statement for arithmetic operations
  switch (operator) {
    case '+':
      result = n1 + n2;
      opSymbol = '+';
      break;

    case '-':
      result = n1 - n2;
      opSymbol = '−';
      break;

    case '*':
      result = n1 * n2;
      opSymbol = '×';
      break;

    case '/':
      // Division by zero check
      if (n2 === 0) {
        showError('Cannot divide by zero');
        equationHint.textContent = `${n1} ÷ 0 = Undefined`;
        return;
      }
      result = n1 / n2;
      opSymbol = '÷';
      break;

    default:
      showError('Unknown operator');
      return;
  }

  // Format result to prevent excessive floating point decimals
  const formattedResult = formatResult(result);
  showSuccess(formattedResult, `${n1} ${opSymbol} ${n2} = ${formattedResult}`);
}

/**
 * Format float results cleanly (e.g. 0.1 + 0.2 => 0.3)
 * @param {number} value
 * @returns {string|number}
 */
function formatResult(value) {
  if (Number.isInteger(value)) {
    return value.toString();
  }
  // Round to max 6 decimal places and remove trailing zeros
  return parseFloat(value.toFixed(6)).toString();
}

/**
 * Display calculation success in DOM
 */
function showSuccess(result, hint) {
  resultBox.classList.remove('error');
  resultText.textContent = result;
  equationHint.textContent = hint;

  // Add micro bounce animation
  resultText.style.transform = 'scale(1.08)';
  setTimeout(() => {
    resultText.style.transform = 'scale(1)';
  }, 120);
}

/**
 * Display error state in DOM
 */
function showError(message) {
  resultBox.classList.add('error');
  resultText.textContent = 'Error';
  equationHint.textContent = message;
}

/**
 * Reset form and displays to initial state
 */
function clearCalculator() {
  num1Input.value = '';
  num2Input.value = '';
  resultBox.classList.remove('error');
  resultText.textContent = '--';
  equationHint.textContent = 'Choose numbers and an operation above';
  num1Input.focus();
}

// Event Listeners for operator buttons
operatorButtons.forEach((button) => {
  button.addEventListener('click', () => {
    const operator = button.getAttribute('data-op');
    calculate(operator);
  });
});

// Clear button event listener
btnClear.addEventListener('click', clearCalculator);

// Allow Enter key to trigger calculation (defaults to addition if not specified)
[num1Input, num2Input].forEach((input) => {
  input.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
      calculate('+');
    }
  });
});
