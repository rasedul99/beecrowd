var input = "0 0";
var lines = input.split(' ');
const [X, Y] = lines.map((line) => parseFloat(line))
if (X > 0 && Y > 0) {
  console.log("Q1");
} else if (X < 0 && Y < 0) {
  console.log("Q3");
} else if (X > 0 && Y < 0) {
  console.log("Q4");
} else if (X < 0 && Y > 0) {
  console.log("Q2");
} else if (X > 0 && Y === 0) {
  console.log("Eixo X");
} else if (X < 0 && Y === 0) {
  console.log("Eixo X");
} else if (Y > 0 && X === 0) {
  console.log("Eixo Y");
} else if (Y < 0 && X === 0) {
  console.log("Eixo Y");
}
else {
  console.log("Origem");
}
