const input = "5 6 7 6"
var lines = input.split(' ');
const [A, B, C, D] = lines.map(Number);

function sum(a, b) {
  return a + b;
}
if (B > C && D > A && sum(C, D) > sum(A, B) && C > 0 && D > 0 && A % 2 === 0) {
  console.log("Valores aceitos")
} else {
  console.log("Valores nao aceitos")
}

