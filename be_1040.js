
var input = "2.0 4.0 7.5 8.0\n6.4"
var [line1, line2] = input.split('\n');
const [N1, N2, N3, N4] = line1.split(" ").map((line) => +line)
const avg = ((N1 * 2) + (N2 * 3) + (N3 * 4) + N4) / 10
console.log("Media:", avg.toFixed(1));
if (avg >= 7.0) {
  console.log("Aluno aprovado.");
} else if (avg < 5.0) {
  console.log("Aluno reprovado.");
} else if (avg >= 5.0 && avg <= 6.9) {
  console.log("Aluno em exame.");
  console.log("Nota do exame:", Number(line2).toFixed(1));
  const sum = (+line2 + avg) / 2
  if (sum >= 5.0) {
    console.log("Aluno aprovado.");
  } else {
    console.log("Aluno reprovado.");
  }
  console.log("Media final:", sum.toFixed(1));
}

