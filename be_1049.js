// var input = require('fs').readFileSync('/dev/stdin', 'utf8');
const input = "invertebrado\nanelideo\nonivoro"
const sep = [' ', '\n'];
const [firstElement, secondElement, thirdElement] = input.split(new RegExp(sep.join('|'), 'g'));

const animal = getAnimalName(firstElement, secondElement, thirdElement)
console.log(animal)
function getAnimalName(firstElement, secondElement, thirdElement) {
  if (firstElement == "vertebrado") {
    if (secondElement == "ave") {
      if (thirdElement == "carnivoro") {
        return "aguia"
      } else {
        return "pomba"
      }
    } else {
      if (thirdElement == "onivoro") {
        return "homem"
      } else {
        return "vaca"
      }
    }
  } else {
    if (secondElement == "inseto") {
      if (thirdElement == "hematofago") {
        return "pulga"
      } else {
        return "lagarta"
      }
    } else {
      if (thirdElement == "hematofago") {
        return "sanguessuga"
      } else {
        return "minhoca"
      }
    }
  }
}