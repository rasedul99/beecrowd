const input = "JOAO\n500.00\n1230.30";
const lines = input.split("\n");
const [name, salary, sellAmount] = lines;

const bonus = (sellAmount * 15) / 100;
console.log(typeof bonus);
const totalSalary = bonus + parseFloat(salary);
console.log("TOTAL = R$", totalSalary.toFixed(2));
