const input = "217 325 6";
const lines = input.split(" ");

let maxValue = 0;
for (i = 0; i < lines.length; i++) {
  if (maxValue < parseInt(lines[i])) {
    maxValue = parseInt(lines[i]);
  }
}
console.log(maxValue, "eh o maior");
