// 1.Variables
// alert('JavaScript funcionando correctamente')
let variableSinValor = "";

let booleano1 = true;
let booleano2 = false;

const PI = 3.14;

const TAU = PI*2;

const miNombre = "Rebeca";

const miNumeroFav = 11;

const booleano3 = true;

console.log(miNombre.length);

console.log(typeof miNumeroFav);

console.log("Mi nombre es " + miNombre + " y mi número favorito es " + miNumeroFav);

const miFrase = "Seré une crack en JavaScript al terminar el bootcamp";
const miFraseEnMayusculas = miFrase.toUpperCase();
console.log(miFraseEnMayusculas);

const fact = "Hola soy une crack";
console.log(fact.substring(0, 5));

const text = miNumeroFav.toString();
console.log(typeof text);

const miFrase2 = "Me llamo Rebeca y me gusta el número 11";
const miFrase2Conc = `Me llamo ${miNombre} y me gusta el número ${miNumeroFav}`;
console.log(miFrase2Conc);

const PIshort = PI.toFixed(2);
console.log(PIshort);


// 2.Arrays
const arrayVacio = [];

const arrayNumeros = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

const arrayNumeros2 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

const arrayNumerosPares = [0, 2, 4, 6, 8];

const arrayNumerosNeg = [0, -1, -2, -3, -4, -5, -6, -7, -8, -9];

const holaMundo = ['Hola', 'Mundo'];

const loGuardoTodo = ['hola', 'que', 23, 42.33, 'tal'];

const arrayDeArrays = [[756, 'nombre'], [225, 'apellido'], [298, 'direccion']];

console.log(loGuardoTodo.length);

loGuardoTodo.push("majísime");
console.log(loGuardoTodo);

arrayNumeros.sort(function(a, b){return b - a});
console.log(arrayNumeros);
// console.log(arrayNumeros.reverse());

arrayNumeros2.sort(function(a, b){return a - b});
console.log(arrayNumeros2);

console.log(loGuardoTodo[1]);

loGuardoTodo.unshift("Euralio");
console.log(loGuardoTodo[0]);


// 3.Objetos
const Coche = {
    marca: "Ford",
    modelo: "Fiesta",
    matricula: "1234abc",
}

const Casa = {
    codPostal: "46019",
    calle: "Plaza Hermanos Bécquer",
    portal: "15",
    piso: "3",
}

const FullStackDeveloper = {
    lenguajes: ['javascript', 'php'],
    proyectos: ['página personal'],
}

const Perro = {
    nombre: "Oriol",
    raza: "Mestizo",
    color: "Negro",
    edad: "3",
}

const Noticia = {
    titular: "Rebeca Mola",
    cuerpo: "Rebeca mola mucho",
}

const Persona = {
    nombre: "Rebeca",
    apellidos: "Alonso Suesta",
    edad: "27",
}

console.log(Persona.nombre);

console.log(FullStackDeveloper.lenguajes[0]);

const Portatil = {
    marca: "HP",
}
console.log(Portatil.marca);

console.log(Portatil['marca']);

const Concierto = {
    grupos: ['BlackPink', 'Doja Cat', 'Taylor Swift'],
}
console.log(Concierto.grupos);

const Led ={
    RGB: ['Rojo', 'Verde', 'Azul'],
}
console.log(Led.RGB);

const O_Error = {
    código: "Lyoko",
}
console.log(O_Error.código);

const Grupo = {
    integrantes: ['Jisoo', 'Jennie', 'Lisa', 'Rosé'],
}
console.log(Grupo.integrantes[1]);

const Impresora = {
    tinta: ['Rojo', 'Verde', 'Azul'],
}
const nivelesTinta = Impresora.tinta;
console.log(nivelesTinta);

const Movil = {
    especificaciones: ['especificaciones'],
}
console.log(Movil.especificaciones);

// ?
Portatil.marca = {marca: 'MSI'};
console.log(Portatil.marca);

// ?
const otroGrupo = Concierto.grupos.push("Guns N' Roses");
console.log(Concierto.grupos);

// No va:
// Concierto.fecha = '11/04/2022';
// Concierto.defineProperty(Concierto, fecha, 'New Date()');
// console.log(Concierto.fecha);

// Corregido:
Concierto.fecha = '11/04/2022';
Concierto.fecha = new Date ();
console.log(Concierto);

Grupo.integrantes.pop ();
console.log(Grupo.integrantes.length);