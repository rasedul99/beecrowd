const input = "13 6"
var lines = input.split(' ');
let [A, B] = lines.map((item) => +item);

if (A > B) {
  let tmp = A
  A = B
  B = tmp
}
if ((B % A) === 0) {
  console.log("Sao Multiplos")
} else {
  console.log("Nao sao Multiplos")
}