//Parte 1, ejercicio 2
let a = 5;
let b = 10;
let c = a + b;
console.log("la suma de a y b es:", c);

//Parte 1, ejercicio 3
let nombre = prompt("¿Cuál es tu nombre?");
console.log(`Hola, ${nombre}!`);

//Parte 2, ejercicio 1
let d = 2;
let e = 5;
let f = 3;

if (d > e) {
  console.log("El mayor de los tres números es:", d);
} else if (f > e) {
  console.log("El mayor de los tres números es:", f);
} else {
  console.log("El mayor de los tres números es:", e);
}

//Parte 2, ejercicio 2
let numeroIngresado = prompt("Ingresa un número y te diré si es par o impar");

numeroIngresado = Number(numeroIngresado);

if (numeroIngresado % 2 === 0) {
  console.log(`El número ${numeroIngresado} es par`);
} else {
  console.log(`El número ${numeroIngresado} es impar`);
}

//Parte 3, ejercicio 1
let numero = 10;

while (numero > 0) {
  console.log(numero);

  numero--;
}

//Parte 3, ejercicio 2
let numero2;

do {
  numero2 = prompt("Por favor, ingresa un número mayor a 100:");
  numero2 = Number(numero2);
} while (numero2 <= 100 || isNaN(numero2));

console.log(`El número ingresado es: ${numero2}`);

//Parte 4, ejercicio 1
function esPar(numero3) {
  return numero3 % 2 === 0;
}

console.log(esPar(4));
console.log(esPar(7));
console.log(esPar(10));
console.log(esPar(15));

//Parte 4, ejercicio 2
function convertirCelsiusAFahrenheit(celsius) {
  let fahrenheit = celsius * 1.8 + 32;
  console.log(`${celsius}°C equivalen a ${fahrenheit}°F`);
}
convertirCelsiusAFahrenheit(0);
convertirCelsiusAFahrenheit(25);
convertirCelsiusAFahrenheit(100);

//Parte 5, ejercicio 1
let persona = {
  nombre: "Juan",
  edad: 30,
  ciudad: "Madrid",

  cambiarCiudad: function (nuevaCiudad) {
    this.ciudad = nuevaCiudad;
  },
};

console.log(persona);
persona.cambiarCiudad("Barcelona");
console.log(persona);

//Parte 5, ejercicio 2
let libro = {
  titulo: "El Quijote",
  autor: "Miguel de Cervantes",
  año: 2005,

  esAntiguo: function () {
    let añoActual = new Date().getFullYear();
    if (añoActual - this.año > 10) {
      console.log(`El libro "${this.titulo}" es antiguo.`);
    } else {
      console.log(`El libro "${this.titulo}" es reciente.`);
    }
  },
};

libro.esAntiguo();
//Parte 6, ejercicio 1
let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let numerosMultiplicados = [];

for (let i = 0; i < numeros.length; i++) {
    numerosMultiplicados.push(numeros[i] * 2);
}

console.log('Array original:', numeros);
console.log('Array multiplicado:', numerosMultiplicados);

//Parte 6, ejercicio 2
let pares = [];

for (let i = 1; pares.length < 10; i++) {
    if (i % 2 === 0) {
        pares.push(i);
    }
}
console.log('Array de pares:', pares);