var input = "7 21 -14";
var lines = input.split(' ');
const numbersArray = lines.map((line) => Number(line));
for (let i = 0; i < numbersArray.length; i++) {
  for (let j = i + 1; j < numbersArray.length; j++) {
    if (numbersArray[i] > numbersArray[j]) {
      const tmp = numbersArray[i];
      numbersArray[i] = numbersArray[j];
      numbersArray[j] = tmp;
    }
  }
}
for (i = 0; i < numbersArray.length; i++) {
  console.log(numbersArray[i]);
}
console.log("");
lines.forEach((line) => console.log(Number(line)));