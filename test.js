// Define the calculator object
const calculator = {
    // Define the current value of the calculator
    currentValue: 0,
  
    // Add a number to the current value
    add: function(num) {
      this.currentValue += num;
    },
  
    // Subtract a number from the current value
    subtract: function(num) {
      this.currentValue -= num;
    },
  
    // Multiply the current value by a number
    multiply: function(num) {
      this.currentValue *= num;
    },
  
    // Divide the current value by a number
    divide: function(num) {
      this.currentValue /= num;
    },
  
    // Clear the current value
    clear: function() {
      this.currentValue = 0;
    }
  };
  
  // Test the calculator object
  calculator.add(5);
  calculator.subtract(2);
  calculator.multiply(3);
  calculator.divide(2);
  console.log(calculator.currentValue); // Output: 8.5
  calculator.clear();
  console.log(calculator.currentValue); // Output: 0