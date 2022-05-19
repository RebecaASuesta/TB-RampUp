// 1.Bucles
  // Haz un bucle que muestre por consola los números del 4 al 9 inclusive. Utilizad el bucle for.
for (let i = 4; i <= 9; i++) {
  // console.log(i)
}

  // Haz un bucle que muestre por consola los impares del 3 al 17 inclusive. Utilizad el bucle for.
for (let i = 3; i <= 17; i++) {
  if(i % 2 !== 0){
  // console.log(i)
  }
}

  // Utiliza la siguiente array para resolver los próximos ejercicios: 
let gente = [
        {
          nombre: "Jamiro",
          edad: 45,
        },
        {
          nombre: "Juan",
          edad: 35,
        },
        {
          nombre: "Paco",
          edad: 34,
        },
        {
          nombre: "Pepe",
          edad: 14,
        },
        {
          nombre: "Pilar",
          edad: 24,
        },
        {
          nombre: "Laura",
          edad: 24,
        },
        {
          nombre: "Jenny",
          edad: 10,
        },
      ];

  // Crea un array con la gente mayor de 25 años y muéstralo por consola. Sin utilizar el método filter de los arrays. Utilizad el bucle for of.
const mayor25 = []

for (let persona of gente){
  if(persona.edad > 25){
    mayor25.push(persona)
  }
}

// console.log(mayor25)

  // Crea un array con la gente que empieza por J. Sin utilizar el método filter de los arrays. Utilizad el bucle for of y muéstralo por consola.
const empiezaJ = []

for (let persona of gente){
  if(persona.nombre[0] == 'J'){
    empiezaJ.push(persona)
  }
}

// console.log(empiezaJ)

  // Crea un array con la gente que su nombre tiene 4 letras. Sin utilizar el método filter de los arrays y muéstralo por consola.
const cuatroLetras = []

for (let persona of gente){
  if(persona.nombre.length == 4){
  cuatroLetras.push(persona)
  }
}

// console.log(cuatroLetras)

  // Crea un array con la gente que su nombre empieza por J y sean menores de 40 años. Sin utilizar el método filter de los arrays y muéstralo por consola.
const empiezaJmenos40 = []

for (let persona of gente){
  if(persona.nombre[0] == 'J' && persona.edad < 40){
    empiezaJmenos40.push(persona)
  }
}

// console.log(empiezaJmenos40)

// 2.Objetos
  // Crea un objeto en la variable ordenador de tal modo que el siguiente código no muestre por consola 'suspendes'
const ordenador = {
  marca: "La pava",
  tipo: "portátil",
  perifericos: ["qué?", "touchPad"],
  almacenamiento: {
    discos: ["CD","HDD"],
    maestro: 0
  }
}

      // // TEST 1
      // if (typeof ordenador === "object") {
      //   console.log("apruebas");
      // } else {
      //   console.log("suspendes");
      // }
      // // TEST 2
      // if (ordenador.marca === "La pava") {
      //   console.log("apruebas");
      // } else {
      //   console.log("suspendes");
      // }
      // // TEST 3
      // if (ordenador.tipo === "portátil") {
      //   console.log("apruebas");
      // } else {
      //   console.log("suspendes");
      // }
      // // TEST 4
      // if (ordenador.perifericos[1] === "touchPad") {
      //   console.log("apruebas");
      // } else {
      //   console.log("suspendes");
      // }
      // // TEST 5
      // if (ordenador["almacenamiento"]["discos"][1] === "HDD") {
      //   console.log("apruebas");
      // } else {
      //   console.log("suspendes");
      // }
      // // TEST 6
      // if (ordenador.almacenamiento.maestro === 0) {
      //   console.log("apruebas");
      // } else {
      //   console.log("suspendes");
      // }

  // Crea un objeto en la variable llamada obj de tal modo que el siguiente código no muestre por consola 'suspendes'
const obj = {
  a: {
    b: true,
    c: [1, 2, 3, 4]
  },
  d: 5,
  f: "seis"
}

// // TEST 1
// if (typeof obj === "object") {
//   console.log("apruebas");
// } else {
//   console.log("suspendes");
// }
// // TEST 2
// if (typeof obj.a.b === "boolean") {
//   console.log("apruebas");
// } else {
//   console.log("suspendes");
// }
// // TEST 3
// if (typeof obj.a.c[1] === "number") {
//   console.log("apruebas");
// } else {
//   console.log("suspendes");
// }
// // TEST 4
// if (typeof obj.d === "number") {
//   console.log("apruebas");
// } else {
//   console.log("suspendes");
// }
// // TEST 5
// if (obj.d > 4 && obj.d < 8) {
//   console.log("apruebas");
// } else {
//   console.log("suspendes");
// }
// // TEST 6
// if (typeof obj.f === "string") {
//   console.log("apruebas");
// } else {
//   console.log("suspendes");
// }
// // TEST 7
// if (obj.f.length === 4) {
//   console.log("apruebas");
// } else {
//   console.log("suspendes");
// }

  // Crea un array en la variable llamada arr de tal modo que el siguiente código no muestre por consola 'suspendes'
const arr = [
  a = {
    name: "pepito",
    age: 25
  },
  b = {
    name: "pepito",
    age: 5
  },
  c = {
    name: "Julia",
    age: 3
  }
]

      // // TEST 1
      // if (typeof arr === "object" && arr.length >= 0) {
      //   console.log("apruebas");
      // } else {
      //   console.log("suspendes");
      // }
      // // TEST 2
      // if (typeof arr[0] === "object") {
      //   console.log("apruebas");
      // } else {
      //   console.log("suspendes");
      // }
      // // TEST 3
      // if (typeof arr[1] === "object") {
      //   console.log("apruebas");
      // } else {
      //   console.log("suspendes");
      // }
      // // TEST 4
      // if (typeof arr[2] === "object") {
      //   console.log("apruebas");
      // } else {
      //   console.log("suspendes");
      // }
      // // TEST 5
      // if (arr.length === 3) {
      //   console.log("apruebas");
      // } else {
      //   console.log("suspendes");
      // }
      // // TEST 6-a
      // if (arr[0].name === arr[1].name) {
      //   console.log("apruebas");
      // } else {
      //   console.log("suspendes");
      // }
      // // TEST 6-b
      // if (arr[1].name === "pepito") {
      //   console.log("apruebas");
      // } else {
      //   console.log("suspendes");
      // }
      // // TEST 7
      // if (arr[1].age > arr[2].age) {
      //   console.log("apruebas");
      // } else {
      //   console.log("suspendes");
      // }
      // // TEST 8
      // if (arr[0].age === 25) {
      //   console.log("apruebas");
      // } else {
      //   console.log("suspendes");
      // }
      // // TEST 9
      // if (typeof arr[2].name === "string") {
      //   console.log("apruebas");
      // } else {
      //   console.log("suspendes");
      // }
      // // TEST 10
      // if (arr[2].name[0] === "J") {
      //   console.log("apruebas");
      // } else {
      //   console.log("suspendes");
      // }

// 3.Funciones
  // Crea la función convierteString debe recibir un tipo number y devolver el número como string.
    // Si la función no recibe un dato tipo number debe devolver el string 'Debo ser ejecutada con un número'
function convierteString(numero){
  if(typeof numero == 'number'){
    return numero.toString()
  } else {
    return 'Debo ser ejecutada con un número'
  }
}

const prueba1 = convierteString(1)
const prueba2 = convierteString('Holi')

// console.log(prueba1)
// console.log(typeof prueba1)
// console.log(prueba2)

  // Crea la función caracterInicial  debe recibir un tipo string y devolver un string con el primer carácter. 
    // Si la función no recibe un dato tipo string debe devolver el string 'Debo ser ejecutada con un string'. 
    // Si recibe un string vacío debe devolver 'Debo ser ejecutada con un string no vacío'
function caracterIncial(palabra){
  if(typeof palabra == 'string'){
    return palabra[0]
  }
  if (typeof palabra !== 'string'){
    return 'Debo ser ejecutada con un string'
  }
  if(palabra.length === 0){
    return 'Debo ser ejecutada con un string no vacío'
  }
}

const prueba3 = caracterIncial('Oriol')
const prueba4 = caracterIncial(1)
const prueba5 = caracterIncial('')

// console.log(prueba3)
// console.log(prueba4)
// console.log(prueba5) //He probado de varias formas y no consigo que me devuelva la frase

  // Crea la función ultimoCaracter debe recibir un tipo string y devolver un string con el último carácter.
    // Si la función no recibe un dato tipo string debe devolver el string 'Debo ser ejecutada con un string'.
    // Si recibe un string vacío debe devolver 'Debo ser ejecutada con un string no vacío'
function ultimoCaracter(palabra){
  if(typeof palabra == 'string'){
    return palabra.charAt(palabra.length - 1)
  }
  if (typeof palabra !== 'string'){
    return 'Debo ser ejecutada con un string'
  }
  if(palabra.length === 0){
    return 'Debo ser ejecutada con un string no vacío'
  }
}

const prueba6 = ultimoCaracter('Oriol')
const prueba7 = ultimoCaracter(1)
const prueba8 = ultimoCaracter('')

// console.log(prueba6)
// console.log(prueba7)
// console.log(prueba8) //He probado de varias formas y no consigo que me devuelva la frase

  // Crea la función cuentaCaracteres debe recibir un tipo string y devolver un number con el número de carácteres
    // Si la función no recibe un dato tipo string debe devolver el string 'Debo ser ejecutada con un string'
function cuentaCaracteres(palabra){
  if(typeof palabra == 'string'){
    return palabra.length
  }
  if (typeof palabra !== 'string'){
    return 'Debo ser ejecutada con un string'
  }
}

const prueba9 = cuentaCaracteres('Oriol')
const prueba10 = cuentaCaracteres(1)

// console.log(prueba9)
// console.log(typeof prueba9)
// console.log(prueba10)

  // Crea la función getCiudadesOrdenada. La función recibirá una cadena de texto de ciudades separadas por comas y devolverá un array de ciudades ordenadas alfabéticamente, si la función no recibe una cadena de texto o recibe una cadena de texto sin comas debe devolver 'no es un formato correcto'
let ciudades = 'Valencia, Burgos, Sevilla, Málaga, Alicante'

function getCiudadesOrdenada(ciudades) {
  if (typeof ciudades == 'string') {
    ciudades = ciudades.split(', ')
    if (ciudades.length > 1){
      return ciudades.sort()
    }
  }
  if (typeof ciudades !== 'string') { //No he sabido cómo poner lo de que no lleve una coma
    return 'No es un formato correcto'
  }  
}

const prueba11 = getCiudadesOrdenada(ciudades)
const prueba12 = getCiudadesOrdenada(1, 2, 3)
const prueba13 = getCiudadesOrdenada('mesa silla taza móvil')

// console.log(prueba11)
// console.log(prueba12)
// console.log(prueba13)

  // Un palíndromo es una palabra que se escribe igual del derecho que del revés por ejemplo orejero, rallar o somos.  Crea la función esPalindromo que recibirá una cadena de texto y deberá devolver si es un palíndromo o no.
    // Si la función no recibe una cadena de texto o está vacía 'no es un formato correcto'
let palabra = 'orejero'
let alReves = palabra.split('').reverse().join('')

function esPalindromo(palabra) {
  if (typeof palabra !== 'string' || palabra.length === 0) {
    return 'No es un formato correcto'
  } 
  if (palabra == alReves){
    return 'Es palíndromo'
  }
  if (palabra !== alReves){
    return 'No es palíndromo'
  }
}

const prueba14 = esPalindromo(palabra)
const prueba15 = esPalindromo('Oriol')
const prueba16 = esPalindromo(27)
const prueba17 = esPalindromo('')

// console.log(prueba14)
// console.log(prueba15)
// console.log(prueba16)
// console.log(prueba17)

  // Crea la función getPrecioMostrar para que devuelva una cadena de texto con formato precio con dos decimales. Para 2 debería devolver 2.00 €. 
    // Si la función no recibe un número debería devolver devolver 'no es un formato correcto'
function getPrecioMostrar(precio) {
  if (typeof precio !== 'number') {
    return 'No es un formato correcto'
  } 
  if (typeof precio == 'number'){
    precio = precio.toString()
    return precio + '.00'
  }
}

const prueba18 = getPrecioMostrar(2)
const prueba19 = getPrecioMostrar('dos')

// console.log(prueba18)
// console.log(prueba19)

  // Crea la función division que acepte como argumento dos números y devuelva el resultado de su división
function division(a, b) {
  return a / b
};

// console.log(division(10,2))

  // Crea la función esPar que acepte como argumento un número y devuelva true si es par y false si es impar
function esPar(numero) {
  if (numero % 2 == 0){
    return true
  } else {
    return false
  }
}

// console.log(esPar(8))
// console.log(esPar(17))

  // Crear la función ordenarArray2 que acepta como argumento un array de números y devuelva un array ordenado de mayor a menor
let arrayDesordenado = [8, 4, 1, 25, 11, 17]

function ordenarArray2(arrayDesordenado) {
  arrayDesordenado = arrayDesordenado.sort()
  return a - b
}

// console.log(ordenarArray2(arrayDesordenado)) //Lo he probado de varias formas y da siempre NaN

  // Crear la función obtenerImpares que acepta como argumento un array de números y devuelva un array con los elementos impares
function obtenerImpares(numeros) {
  if (numeros = numeros.numero % 2 !== 0){
    return numeros
  }
}

const prueba20 = [1, 2, 3, 4, 5, 6, 7]

// console.log(obtenerImpares(prueba20)) //Devuelve true (?)

  // Crear la función sumarArray que acepte como argumento un array numérico y devuelva la suma de los números en el array Array: [1, 2, 3] resultado: 6
  const Array = [1, 2, 3];
  let sum = 0;
  
  function sumarArray(Array){
    for (let i = 0; i < Array.length; i++) {
      sum += Array[i];
    }
  }
  
// console.log(sumarArray(Array)) // Undefined

  // Crear la función multiplicarArray que acepte como argumento un array numérico y devuelva la multiplicación de los números en el array Array: [2, 3, 4] resultado: 24
  
  // Crea una función que dada una array de números, devuelve una nueva array que tenga solo los números que son 5 o más. Ejemplo entrada [3, 6, 8, 2] salida [6, 8]
  
  // Crea una aplicación que nos pida un número por prompt y con un método se lo pasamos por parámetro para que nos indique si es o no un número primo, debe devolver true si es primo sino false. 
    // Un número primo es aquel que solo puede dividirse entre 1 y sí mismo. Por ejemplo: 25 no es primo, ya que 25 es divisible entre 5, sin embargo, 17 si es primo.
  
  // Crea una función checkPasswordcon una variable tipo String que contenga una contraseña cualquiera. Después se te pedirá que introduzcas la contraseña (usando prompt), con 3 intentos. Cuando aciertes ya no pedirá más la contraseña y mostrará un mensaje diciendo “Enhorabuena”(ej.un alert). Piensa bien en la condición de salida (3 intentos y si acierta sale, aunque le queden intentos).
  
  // Crea una función llamada CalculadoraInversa, nos pedirá 2 operandos (int) y un signo aritmético (String), según este último se realizará la operación correspondiente. Al final mostrará el resultado en un cuadro de diálogo. Los signos aritméticos disponibles son:
    // +: suma los dos operadores.
    // -: resta los operandos.
    // *: multiplica los operandos.
    // /: divide los operandos, este debe dar un resultado con decimales (double)
    // ^: 1o operando como base y 2o como exponente.
    // %: módulo, resto de la división entre operando1 y operando2.