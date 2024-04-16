// Function to clear the display
function clearDisplay() {
    document.getElementById('display').value = '';
  }
  
  // Function to handle number and operator clicks
  function handleClick(value) {
    document.getElementById('display').value += value;
  }
  
  // Function to perform calculation
  function calculate() {
    try {
      const expression = document.getElementById('display').value;
      const result = eval(expression);
      document.getElementById('display').value = result;
    } catch (error) {
      alert('Invalid expression');
    }
  }
  
  // Add event listeners for number buttons
  const numberButtons = document.querySelectorAll('.number');
  numberButtons.forEach(button => {
    button.addEventListener('click', () => {
      const value = button.textContent;
      document.getElementById('display').value += value;
    });
  });
  
  // Add event listener for operator buttons
  const operatorButtons = document.querySelectorAll('.operator');
  operatorButtons.forEach(button => {
    button.addEventListener('click', () => {
      const value = button.textContent;
      document.getElementById('display').value += value;
    });
  });
  
  // Alert warning for non-number keys
  document.addEventListener('keydown', function(event) {
    const key = event.key;
    if (!/\d/.test(key) && key !== '+' && key !== '-' && key !== '*' && key !== '/' && key !== '%') {
      alert('Only numbers are allowed');
    }
  });
  