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
//class/2019-08-02

const numbers = [1, 2, 3, 4, 5, 6]
var index = 0

while (index < numbers.length) {
    console.log(numbers[index] ** 2)
    index++
}

//------------------------------
var name = "Hector"
var index = name.length - 1;
do {
    console.log(name[name.length - (index + 1)])
    index--
} while (index >= 0)

/*L    I   
6 - (5 + 1) = 0 - H
6 - (4 + 1) = 1 - e
6 - (3 + 1) = 2 - c
6 - (2 + 1) = 3 - t
6 - (1 + 1) = 4 - o
6 - (0 + 1) = 5 - r
*/

var reversedName = "rotceH"
var index = reversedName.length - 1;
var finalName = String()
do {
    finalName = finalName + reversedName[index]
    index--
} while (index >= 0)
console.log(finalName)

//EJERCICIOS!
//Verificar si la palabra {word} tiene al menos 3 vocales

//con el metodo .match

var word = "perro"
var vowels = word.match(/[aeiou]/gi).length

if (vowels < 3) {
    console.error("Error")
} else {
    console.log('Tiene ' + vowels + ' vocales')
}


//ciclo for
var vowelsCount = 0
var word = "ajdjenndickso"

for (let i = 0; i <= word.length - 1; i++) {

    if (word.charAt(i) == "a" || word.charAt(i) == "e" ||
        word.charAt(i) == "i" || word.charAt(i) == "o" ||
        word.charAt(i) == "u") {
        vowelsCount = vowelsCount + 1
    }
}

if (vowelsCount < 3) {
    console.error("Error")
} else {
    console.log(`Tiene  ${vowelsCount}  vocales`)
}

//------------------------------------------------------------------------------
//class2019-08-05

function addition(numberOne, numberTwo) {
    const MONTHLY_SALARY = 450 * 30
    return numberOne + numberTwo
}

function subtraction(numberOne, numberTwo) {
    return numberTwo - numberOne
}

const calculator = function () {
    let operator = '-'
    let total = Number()
    if (operator === '-') {
        total = subtraction(1, 2)
        console.log(`La resta es: ${total}`);
    } else if (operator === '+') {
        total = addition(1, 2)
        console.log(`La suma es: ${total}`);
    } else {
        console.error('Operador no soportado');
    }
    return undefined
}

var total = calculator(4, 5, "-")


//Tarea 

/*
FOR IN
 
3.- Se tiene una lista con el nombre de cada uno de los empleados,
    con los días que faltaron al trabajo
    Ej -> [[David, 4]], [josé , 2]
 
a.) Si el sueldo diario son 450.00 Y por cada día que faltaron se les 
    descuenta el 2% del salario (acumulable) cuanto es el sueldo fnal 
    del empleado
 
*/

//crear funcion
const getDiscountPercent = function (total, percent) {
    return total * (percent / 100)
}


const MONTHLY_SALARY = 450 * 30
const DISCOUNT_PERCENT = 2
let paysheet = [['Thelma', 5], ['Irving', 3], ['Hector', 1]]

for (let index in paysheet) {
    let worker = paysheet[index]
    let totalDiscountPercent = worker[1] * DISCOUNT_PERCENT
    let totalDiscount = getDiscountPercent(MONTHLY_SALARY, totalDiscountPercent)
    let finalSalary = MONTHLY_SALARY - totalDiscount
    console.log(`${worker[0]}: $${finalSalary}`);
}


//------------------------------------------------------------------------------
//Class2019-08-06

/*
  1.-Escribir una funcion que acepte como argumento un string y capitalizar
  cada palabra dentro del string

  "Hola a todos" -> "Hola A Todos"
*/

// 'Holi a todos'
// ['Holi','a','todos']
// 1-Holi 2-a 3-todos 
// 1-H      2-A     3-T
// 1-Hola   2-A     3-Todos
// ['Holi','A','Todos']
// 'Holi A Todos'

const capitalize = function (phrase) {
    let wordArray = phrase.split(' ')
    for (index in wordArray) {
        let word = wordArray[index]
        let letterCapitalize = word[0].toUpperCase()
        let wordCapitalize = `${letterCapitalize}${word.slice(1)}`
        wordArray[index] = wordCapitalize
    }
    return wordArray.join(' ')
}


/*
   2.-Escribe una funcion cuyo argumento sea un string y devuelva la palabra
   mas larga dentro el

   "Hola a todos" -> "todos"
*/

var word = "Holas a todos"

const SearchLongerWord = function (word) {
    let longestWord = ""
    palabras = word.split(" ")
    palabras.forEach(function (palabra) {
        if (palabra.length > longestWord.length) {
            longestWord = palabra
        };
    });
    return longestWord
}


/*
   3.-Dada una matriz obtener la cantidad total de UNOS que aparezcan en ella

   [[0,0,1],[1,0,1].[0,9,1]] -> 4
*/
