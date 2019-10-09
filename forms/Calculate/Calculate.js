
let num1 = Number(prompt("Enter a number."))
let num2 = Number(prompt("Enter aother number."))
let num3 = Number(prompt("Enter one last number."))

function calcAvgSquare(num1, num2, num3) {
  const equa = ((num1 + num2 + num3)/3) * (num1 * num1)
  return equa
  }
alert(`The answer using ${num1}, ${num2}, and ${num3} is ${calcAvgSquare(num1, num2, num3)}`)
