const input = "25\n100\n5.50";
const lines = input.split("\n");
const [empNumber, whours, amperHour] = lines;

const salary = whours * amperHour;
console.log("NUMBER =", empNumber);
console.log("SALARY = U$", salary.toFixed(2));
