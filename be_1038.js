const input = "2 3"
var lines = input.split(' ');
const [x, y] = lines
function total(x, y) {
  switch (parseInt(x)) {
    case 1: return 4.00 * y;
    case 2: return 4.50 * y
    case 3: return 5.00 * y
    case 4: return 2.00 * y
    case 5: return 1.50 * y
  }
}
const Total = total(x, y)
console.log("Total: R$", Total.toFixed(2));