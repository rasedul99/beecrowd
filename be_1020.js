const input = "30\n"
var lines = input.split('\n');
const [ageInDays] = lines;

function convertToYearMonthDays(ageInDays) {
  const year = Math.floor(ageInDays / 365)
  const month = Math.floor((ageInDays % 365) / 30)
  const days = Math.floor(ageInDays % 365) % 30

  return [year, month, days]
}

const [year, month, days] = (convertToYearMonthDays(ageInDays))
console.log(year, "ano(s)")
console.log(month, "mes(es)")
console.log(days, "dia(s)")

