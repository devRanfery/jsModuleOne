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
//Ejercicio 2019-08-01

var height = 100


if ((height < 150) && (height >= 100)) {
    console.log('Pitufo');
} else if ((height > 170) && (height < 200)) {
    console.log('jirafa');
} else if ((height >= 150) && (height <= 170)) {
    console.log('ok');
} else {
    console.log('No seas payaso');
}


/*
Dado tu nombre, apellidos, Fecha de nacimiento ,Genero y lugar de nacimiento
dar la primera parte del curp
*/

var name = "jesus ranfery"
var firstLastName = "alvarez"
var secondLastName = "tabal"
var birthDate = "27-04-1998"
var gender = "hombre"
var birthCity = "vz"

var year = birthDate.slice(-2)
var month = birthDate.slice(3, 5)
var day = birthDate.slice(0, 2)
var abbreviationGender = gender.charAt(0)

var curp = firstLastName[0] + "A" +
    secondLastName[0] +
    name[0] +
    year + month + day +
    abbreviationGender +
    birthCity


console.log(curp.toUpperCase())

//------------------------------------------------------------------------------