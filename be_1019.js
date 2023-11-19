const input = "1\n"
var lines = input.split('\n');
const [duration] = lines;

function hms(duration) {
  const hour = Math.floor(duration / 3600)
  const min = Math.floor((duration % 3600) / 60)
  const sec = (duration % 3600) % 60
  return [hour, min, sec];

}
const [hour, min, sec] = hms(duration);
console.log(`${hour}:${min}:${sec}`);