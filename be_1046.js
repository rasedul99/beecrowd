// var input = require('fs').readFileSync('/dev/stdin', 'utf8');
const input = "16\n2"
const sep = [' ', '\n'];
const [startTime, endTime] = input.split(new RegExp(sep.join('|'), 'g')).map(element => parseInt(element));
if (startTime < endTime) {
  console.log(`O JOGO DUROU ${endTime - startTime} HORA(S)`)
} else if (startTime === endTime) {
  console.log(`O JOGO DUROU 24 HORA(S)`)
} else {
  console.log(`O JOGO DUROU ${(24 + endTime) - startTime} HORA(S)`)
}

