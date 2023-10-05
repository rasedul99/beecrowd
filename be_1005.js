const input = "5.0\n7.1";
const lines = input.split("\n");

const [A, B] = lines;
const avg = (A * 3.5 + B * 7.5) / 11;
console.log("MEDIA =", avg.toFixed(5));
