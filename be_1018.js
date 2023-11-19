const input = "11257\n"
var lines = input.split('\n');
const [amount] = lines;

function multiply(total, vagfol) {
  return total / vagfol
}

function remaining(total, vagfol) {

  return total % vagfol
}
const hundred = multiply(amount, 100)
const remainingAfterHundred = remaining(amount, 100)
const fifty = multiply(remainingAfterHundred, 50)
const remainingAfterFifty = remaining(remainingAfterHundred, 50)
const tweenty = multiply(remainingAfterFifty, 20)
const remainingAfterTweenty = remaining(remainingAfterFifty, 20)
const ten = multiply(remainingAfterTweenty, 10)
const remainingAfterTen = remaining(remainingAfterTweenty, 10)
const five = multiply(remainingAfterTen, 5)
const remainingAfterFive = remaining(remainingAfterTen, 5)
const two = multiply(remainingAfterFive, 2)
const remainingAfterTwo = remaining(remainingAfterFive, 2)
const one = multiply(remainingAfterTwo, 1)
console.log(amount)
console.log(parseInt(hundred), "nota(s) de R$ 100,00")
console.log(parseInt(fifty), "nota(s) de R$ 50,00")
console.log(parseInt(tweenty), "nota(s) de R$ 20,00")
console.log(parseInt(ten), "nota(s) de R$ 10,00")
console.log(parseInt(five), "nota(s) de R$ 5,00")
console.log(parseInt(two), "nota(s) de R$ 2,00")
console.log(parseInt(one), "nota(s) de R$ 1,00")

