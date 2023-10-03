const input = "2.00\n100.64\n150.00";
const lines = input.split("\n");

const π = 3.14159;
const result = π * (parseFloat(lines[0]) * parseFloat(lines[0]));
console.log("A=" + result.toFixed(4));
