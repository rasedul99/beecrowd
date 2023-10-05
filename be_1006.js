const input = "5.0\n6.0\n7.0";
const lines = input.split("\n");
const [A, B, C] = lines;

const avg = (A * 2 + B * 3 + C * 5) / 10;
console.log("MEDIA =", avg.toFixed(1));
