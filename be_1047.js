// var input = require('fs').readFileSync('/dev/stdin', 'utf8');
const input = "7\n8\n7\n9"
const sep = [' ', '\n'];
const [intialHour, initialMinute, finalHour, finalMinute] = input.split(new RegExp(sep.join('|'), 'g')).map(element => parseInt(element));
const startTimeInMinutes = intialHour * 60 + initialMinute
const endTimeInMinutes = finalHour * 60 + finalMinute
let durationInMinutes = 0
if (startTimeInMinutes < endTimeInMinutes) {
  durationInMinutes = endTimeInMinutes - startTimeInMinutes
  console.log(`O JOGO DUROU ${parseInt(durationInMinutes / 60)} HORA(S) E ${durationInMinutes % 60} MINUTO(S)`);
} else if (startTimeInMinutes === endTimeInMinutes) {
  console.log(`O JOGO DUROU 24 HORA(S) E 0 MINUTO(S)`);
} else {
  durationInMinutes = endTimeInMinutes - (1440 * startTimeInMinutes)
  console.log(`O JOGO DUROU ${parseInt(durationInMinutes / 60)} HORA(S) E ${durationInMinutes % 60} MINUTO(S)`);
}


