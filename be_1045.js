const input = "6.0, 8.0, 10.0"
const lines = input.split(',').map(item => parseFloat(item));

const [a, b, c] = convertTodecending(lines)

if (a >= b + c) {
  console.log("NAO FORMA TRIANGULO");
} else {
  if (a * a === b * b + c * c) {
    console.log("TRIANGULO RETANGULO");
  } else if (a * a > b * b + c * c) {
    console.log("TRIANGULO OBTUSANGULO");
  } else if (a * a < b * b + c * c) {
    console.log("TRIANGULO ACUTANGULO");
  }

  if (a === b && b === c) {
    console.log("TRIANGULO EQUILATERO");
  } else if (a === b || b === c || a === c) {
    console.log("TRIANGULO ISOSCELES");
  }
}

// Takes an array as a parameter and will convert it to descending order
function convertTodecending(lines) {
  for (let i = 0; i < lines.length; i++) {
    for (let j = 0; j < lines.length; j++) {
      if (lines[i] > lines[j]) {
        const tmp = lines[i]
        lines[i] = lines[j]
        lines[j] = tmp
      }
    }
  }
  return lines
}



