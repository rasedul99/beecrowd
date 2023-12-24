// var input = require('fs').readFileSync('/dev/stdin', 'utf8');
const input = "2000.00"
const sep = [' ', '\n'];
const [salary] = input.split(new RegExp(sep.join('|'), 'g')).map(element => parseFloat(element));

let newSalary = 0;
let incrementAmount = 0;
if (salary <= 400) {
  incrementAmount = 15 * salary / 100;
  console.log(`Novo salario: ${(incrementAmount + salary).toFixed(2)}`);
  console.log(`Reajuste ganho: ${incrementAmount.toFixed(2)}`);
  console.log(`Em percentual: 15 %`);
} else if (salary > 400 && salary <= 800) {
  incrementAmount = 12 * salary / 100;
  console.log(`Novo salario: ${(incrementAmount + salary).toFixed(2)}`);
  console.log(`Reajuste ganho: ${incrementAmount.toFixed(2)}`);
  console.log(`Em percentual: 12 %`);
} else if (salary > 800 && salary <= 1200) {
  incrementAmount = 10 * salary / 100;
  console.log(`Novo salario: ${(incrementAmount + salary).toFixed(2)}`);
  console.log(`Reajuste ganho: ${incrementAmount.toFixed(2)}`);
  console.log(`Em percentual: 10 %`);
} else if (salary > 1200 && salary <= 2000) {
  incrementAmount = 7 * salary / 100;
  console.log(`Novo salario: ${(incrementAmount + salary).toFixed(2)}`);
  console.log(`Reajuste ganho: ${incrementAmount.toFixed(2)}`);
  console.log(`Em percentual: 7 %`);
} else {
  incrementAmount = 4 * salary / 100;
  console.log(`Novo salario: ${(incrementAmount + salary).toFixed(2)}`);
  console.log(`Reajuste ganho: ${incrementAmount.toFixed(2)}`);
  console.log(`Em percentual: 4 %`);
}
