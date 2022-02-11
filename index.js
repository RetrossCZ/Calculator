let firstNumber = +prompt("Number1");
let secondNumber = +prompt("Number2");
let sign = prompt("Sign");
if (sign === "+") {
  console.log(firstNumber + secondNumber);
} else if (sign === "-") {
  console.log(firstNumber - secondNumber);
} else if (sign === "*") {
  console.log(firstNumber * secondNumber);
} else if (sign === "/" && secondNumber !== 0) {
  console.log(firstNumber / secondNumber);
} else if (sign === "/" && secondNumber === 0) {
  alert("Wrong input.");
}
