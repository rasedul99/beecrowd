const input = "6.0 4.0 2.0"
var lines = input.split(' ');
const [A, B, C] = lines.map((item) => +item);
if (A + B > C && A + C > B && B + C > A) {
  console.log(`Perimetro = ${(A + B + C).toFixed(1)}`)
} else {
  console.log(`Area = ${(((A + B) / 2) * C).toFixed(1)}`)
}
