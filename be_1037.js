const input = "25.00\n"
var lines = input.split('\n');
const [interval] = lines
if (interval > 100 || interval < 0) {
  console.log("Fora de intervalo");
} else if (interval > 75) {
  console.log("Intervalo (75,100]")
} else if (interval > 50) {
  console.log("Intervalo (50,75]")
} else if (interval > 25) {
  console.log("Intervalo (25,50]")
} else if (interval <= 25) {
  console.log("Intervalo [0,25]")
}

