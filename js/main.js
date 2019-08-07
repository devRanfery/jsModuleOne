//Mi primera linea de codigo js
console.log("Hello World!")

//Calcular cuantos dias he vivido aproximadamente
console.log("Days lived:" + 365 * 21)

//Variables
var livingDays = 365
var age = 21

console.log("Days lived:" + livingDays * age)

//Tenemos una USB de 4GB cuantas fotos de 3MB le caben
var fourGB = 4096
var photoWeight = 3
var totalFoto = Math.round(fourGB / photoWeight)

console.log("In 4GB they are stored " + totalFoto + " photos, weighing 3MB")


/*
Tenemos 22 cubiculos, en cada cubiculo podemos meter 3 carros
y 2 camionetas
*Cuantos cubiculos, llenamos completos
*Cuantas camionetas sobran 
*Cuantos carros sobran
camionetas = 57
carros = 130
*/

var parkingSpace = 22
var cars = 130
var suvs = 57
var totalParkingCars = parkingSpace * 3
var totalParkingSuvs = parkingSpace * 2
console.log(
  'Full house ?', (
    (totalParkingCars < cars) && (totalParkingSuvs < suvs)
  )
)
console.log(totalParkingCars - cars)
console.log(totalParkingSuvs - suvs)

/*
carros dentro = 66
camionetas dentro = 44

carros sobrantes = 64
camionetas sobrantes = 13
*/

var diameter = 10
const PI = 3.14
const RADIUS = diameter / 2
const AREA = PI * (RADIUS * RADIUS)

console.log("Area del circulo: " + AREA)

var numberOne = 12
var numberTwo = -10

if ((numberOne > 11) || (numberTwo > 11)) {
  console.log('uno de los dos es mayor a 11')
} else if ((numberOne <= 2) || (numberTwo < 2)) {
  console.log('Uno de los dos es menor a 2');
} else {
  console.log('No se pudo');
}

//Dado un numero {number}, verificar si es par

var number = 2
if (number % 2 === 0) {
  console.log(number + " is even");
} else if (typeof number == 'number') {
  console.log('invalid')
} else {
  console.log('Your number is odd')
}

//------------------------------------------------------------------------------