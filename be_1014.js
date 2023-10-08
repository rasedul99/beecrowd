const input = "500 \n 35.0";
const lines = input.split("\n");

const totalDistance = parseInt(lines.shift());
const fuel = parseFloat(lines.shift());
const consumption = (totalDistance / fuel).toFixed(3);
console.log(consumption, "km/l");
