const input = "1.0 7.0\n5.0 9.0";
const lines = input.split("\n");
const x1y1 = lines.shift();
const x2y2 = lines.shift();
const [x1, y1] = x1y1.split(" ");
const [x2, y2] = x2y2.split(" ");

const distance = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
console.log(distance.toFixed(4));
