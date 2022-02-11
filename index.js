let firstNumber = +prompt("Číslo1");
let secondNumber = +prompt("Číslo2");
let sign = prompt("Znak");
if (sign === "+") {
  console.log(firstNumber + secondNumber);
} else if (sign === "-") {
  console.log(firstNumber - secondNumber);
} else if (sign === "*") {
  console.log(firstNumber * secondNumber);
} else if (sign === "/" && secondNumber != 0) {
  console.log(firstNumber / secondNumber);
} else sign === "/" && secondNumber === 0;
{
  alert("Toto nedokážu vypočítat!");
}

var firstNumber = Number(prompt("Zadej první číslo:"));
var secondNumber = Number(prompt("Zadej druhé číslo:"));
var sign = prompt("Zadej znak pro matematickou operaci");

if (sign == "+") {
  console.log(firstNumber + secondNumber);
} else if (sign == "-") {
  console.log(firstNumber - secondNumber);
} else if (sign == "*") {
  console.log(firstNumber * secondNumber);
} else if (sign == "/" && secondNumber != 0) {
  console.log(firstNumber / secondNumber);
} else if (sign == "/" && secondNumber == 0) {
  console.log("Nesmíš dělit nulou. Druhé číslo nesmí být nula při dělení!!!!");
} else {
  console.log("Nedokáži takovouto operaci provést.");
}
