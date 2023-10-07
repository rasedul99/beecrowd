const input = "1 1 15.10\n2 1 15.10";
const lines = input.split("\n");
const product_1 = lines.shift();
const product_2 = lines.shift();
const [p1Code, p1Unit, p1Price] = product_1.split(" ");
const [p2Code, p2Unit, p2Price] = product_2.split(" ");
const result = p1Unit * p1Price + p2Unit * p2Price;
console.log("VALOR A PAGAR: R$", result.toFixed(2));
