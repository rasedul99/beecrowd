const input = "10.0 3.0 5.0"
var lines = input.split(' ');
const [a, b, c] = lines;

const squrtValues = Math.sqrt((b ** 2) - 4 * a * c)
const R1 = (-b + squrtValues) / (2 * a)
const R2 = (-b - squrtValues) / (2 * a)
if (a == 0 || (b ** 2 - 4 * a * c) < 0) {
  console.log("Impossivel calcular");
} else {
  console.log("R1 =", R1.toFixed(5))
  console.log("R2 =", R2.toFixed(5))
}


