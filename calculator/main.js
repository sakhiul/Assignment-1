function calculate() {
  var num1 = parseFloat(document.getElementById("num1").value);
  var num2 = parseFloat(document.getElementById("num2").value);
  var operation = document.getElementById("operation").value;
  var resultElement = document.getElementById("result");
  var errorMessage = document.getElementById("error-message");
  var result;

  if (isNaN(num1) || isNaN(num2)) {
    errorMessage.textContent = "Please enter valid numbers.";
    resultElement.textContent = "";
    return;
  } else {
    errorMessage.textContent = "";
  }

  switch (operation) {
    case "addition":
      result = num1 + num2;
      break;
    case "subtraction":
      result = num1 - num2;
      break;
    case "multiplication":
      result = num1 * num2;
      break;
    case "division":
      if (num2 === 0) {
        errorMessage.textContent = "Division by zero is not allowed.";
        resultElement.textContent = "";
        return;
      } else {
        result = num1 / num2;
      }
      break;
    default:
      errorMessage.textContent = "Invalid operation selected.";
      resultElement.textContent = "";
      return;
  }

  resultElement.textContent = " " + result;
}
