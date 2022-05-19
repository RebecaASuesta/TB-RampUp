// 1.Booleanos
// && and
// || or
// ! not
const booleano1 = true;
const booleano2 = false;

const booleanoAnd = booleano1 && booleano2;

const booleanoOr = booleano1 || booleano2;

const booleanoNot = !booleano1;

const booleanoMix0 = booleanoOr && (booleano1 || (!booleano1 && !booleano2));

// 2.Operadores
const valorDivision = 17 / 3;
console.log(valorDivision.toFixed(2));

const valorResto = 17 % 7;
console.log(valorResto);

// 3.Lógica de programación
const A = 9;
const B = "9";
if (A == B) console.log("Son iguales");
if (A === B) {
    console.log("Son iguales");
} else {
    console.log("Son diferentes");
}

const mochila = [];
if (mochila.length > 10){
    console.log("No puedo cargar con tantas cosas");
} else if (mochila.length <= 10 && mochila.length >= 2) {
    console.log("Qué bien voy con mi mochila");
} else {
    console.log("Creo que no necesito una mochila");
}

// ?
const contarHasta10 = [];
for (let i = 0; i <= 10; i++) {
    // console.log(i);
}

// ?
const diaFestivo = ["Sábado", "Domingo"];
const hoyEsFestivo = diaFestivo ? console.log("Hoy no trabajo") : console.log("Hoy trabajo");

const arrayBucle = [];
for (let i = 4; i <= 18; i++) {
    // console.log(i);
}

// No va
const resultado = 0
function sum (a,b) {
    return a + b
}
console.log(sum(arrayBucle));

const meMato = ['Con', 'Sofia', 'aprendiendo', 'bucles'];
for (let palabras of meMato) {
    // console.log(palabras);
}
for (let x in meMato) {
    // console.log(x);
}

// ?
const tuberculo = [];
let i = 0;
let x = 0;
while (i < 20 && i < 3) {
    i++;
    x += i;
    console.log("Patata");
}

// No sé hacerlo
const nota = [];
switch (nota) {
    case 1:
        console.log("Insuficiente");
        break;
    case 2:
        console.log("Suficiente");
        break;
    case 3:
        console.log("Notable");
        break;
    case 4:
        console.log("Sobresaliente");
        break;            
}

function resta (a,b) {
    return a - b
}

// No va
function duplicaNumero (a) {
    return a * 2
}
if (a.typeof = number) {
    console.log(duplicaNumero);
} else {
    console.log("Debo ser ejecutada con un número");
}