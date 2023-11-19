const input = "91.01\n"
var lines = input.split('\n');
const [amount] = lines;

function calculateAmount(amount, note) {
  const noteQunatity = Math.floor(amount / note);
  const remaining = (amount % note).toFixed(2);
  return [noteQunatity, remaining]
}
const [hundred, remainingAfterHundred] = calculateAmount(amount, 100);
const [fifty, remainingAfterFifty] = calculateAmount(remainingAfterHundred, 50);
const [tweenty, remainingAfterTweenty] = calculateAmount(remainingAfterFifty, 20);
const [ten, remainingAfterTen] = calculateAmount(remainingAfterTweenty, 10);
const [five, remainingAfterFive] = calculateAmount(remainingAfterTen, 5);
const [two, remainingAfterTwo] = calculateAmount(remainingAfterFive, 2);

const [one, remainingAfterOne] = calculateAmount(remainingAfterTwo, 1);
const [pointFifty, remainingAfterPointFifty] = calculateAmount(remainingAfterOne, 0.50);
const [pointTweentyFive, remainingAfterPointTweentyFive] = calculateAmount(remainingAfterPointFifty, 0.25);
const [pointTen, remainingAfterPointTen] = calculateAmount(remainingAfterPointTweentyFive, 0.10);
const [pointZeroFive, remainingAfterPointZeroFive] = calculateAmount(remainingAfterPointTen, 0.05);
const [pointZeroOne, remainingAfterPointZeroOne] = calculateAmount(remainingAfterPointZeroFive, 0.01);
console.log("NOTAS:");
console.log(hundred, "nota(s) de R$ 100.00");
console.log(fifty, "nota(s) de R$ 50.00");
console.log(tweenty, "nota(s) de R$ 20.00");
console.log(ten, "nota(s) de R$ 10.00");
console.log(five, "nota(s) de R$ 5.00");
console.log(two, "nota(s) de R$ 2.00");

console.log("MOEDAS:");
console.log(one, "moeda(s) de R$ 1.00");
console.log(pointFifty, "moeda(s) de R$ 0.50");
console.log(pointTweentyFive, "moeda(s) de R$ 0.25");
console.log(pointTen, "moeda(s) de R$ 0.10");
console.log(pointZeroFive, "moeda(s) de R$ 0.05");
console.log(pointZeroOne, "moeda(s) de R$ 0.01");



