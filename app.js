// let numeroSecreto = 0;
// let intentos = 0;
// let listaNumerosSorteados = [];
// let numeroMaximo = 10;


// function asignarTextoElemento(elemento, texto) {
//     let elementoHTML = document.querySelector(elemento);
//     elementoHTML.innerHTML = texto;
//     return;
// }


// function verificarIntento() {
//     let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);

//     // console.log(intentos);
//     if (numeroDeUsuario == numeroSecreto) {
//         asignarTextoElemento('p', `Acertaste el numero en ${intentos} ${(intentos == 1) ? 'vez':'veces'}`);
//         document.getElementById('reiniciar').removeAttribute('disabled');
//     } else {
//         // El usuario no acerto
//         if (numeroDeUsuario > numeroSecreto) {
//             asignarTextoElemento('p','El numero secreto es menor');
//         } else {
//             asignarTextoElemento('p','El numero secreto es mayor');
//         }
//         intentos++;
//         limpiarCaja();
//     }
//     return;

// }

// function limpiarCaja() {
//    // let valorCaja = document.querySelector('#valorUsuario');
//    // valorCaja.value = '';   
//    document.querySelector('#valorUsuario').value = ''; 
// }

// function generarNumeroSecreto() {
//     let numeroGenerado = Math.floor(Math.random() * numeroMaximo) + 1;

//     console.log(numeroGenerado);
//     console.log(listaNumerosSorteados);
//     // Si y sortemos todo los numeros
//     if (listaNumerosSorteados.length == numeroMaximo) {
//         asignarTextoElemento('p','Ya se sortearon todos los numeros posibles');
//     } else {
//     // Si el numero generado est incluido en la list
//         if (listaNumerosSorteados.includes(numeroGenerado)) {
//             return generarNumeroSecreto();
//         }else {
//             listaNumerosSorteados.push(numeroGenerado);
//             return numeroGenerado;
//         }
//     }
// }

// function condicionesIniciales() {
//     asignarTextoElemento('h1', 'Juego del numero secreto');
//     asignarTextoElemento('p', `Indica un numero del 1 al ${numeroMaximo}`);
//     numeroSecreto = generarNumeroSecreto();
//     intentos = 1;
// }

// function reiniciarJuego(){
//     // Limpiar la caja
//     limpiarCaja();
//     // indicar mensaje intervalo de numeros
//     // generar el numero aletorio
//     // Inicializar el numero de intentos
//     condicionesIniciales();
//     // deshabilitar el nuevo juego
//     document.querySelector('#reiniciar').setAttribute('disabled','true');

// }

// condicionesIniciales();

//************************************************************************************* */

// let parrafos = ["Parrafo 1", "Parrafo 2", "Parrafo 3", "Parrafo 4", "Parrafo 5"];

// function asignarParrafos(parrafos, indice) {
    
//     let contenedorParrafos = document.querySelector('.texto__parrafo2');

//     if (indice == null){
//         contenedorParrafos.innerHTML = 'Te olvidaste el indice';
//     } else{
//         contenedorParrafos.innerHTML = `${parrafos[indice]}`;

//     }
// }


// asignarParrafos(parrafos,2);

// function holaMundo (){
//     console.log('Hola mundo');
// }

// function holaParametro(nombre) {
//     console.log(`Bienvenido, ${nombre}`)
// }

// holaParametro('Patrick');

// function numeroParametro(numero) {
//     return numero * 2;
// }

// let dobleNumero = numeroParametro(3);
// console.log(dobleNumero);

// function promedio(x, y, z) {
//     return (x+ y+ z) / 3;
// }

// let promedioXyZ = promedio (3, 4, 5);
// console.log(promedioXyZ);

// function mayorNumero(num1, num2) {
//     return num1 > num2 ? num1 : num2;
// }

// console.log(mayorNumero(7,3));

// function numeroCuadrado(numC) {
//     return numC * numC;
// }

// console.log(numeroCuadrado(5));


// rea una función llamada calcularAreaCirculo que tome el radio de un círculo como parámetro y devuelva su área.

// function calcularAreaCirculo(numero1) {
//     let pi = 3.1416;
//     return pi * (numero1 ** 2); 
// }

// console.log(calcularAreaCirculo(3));

// Escribe una función saludarPersona que tome el nombre de una persona como parámetro y muestre un saludo personalizado en la consola.

// function saludarPersona(nombre) {
//     return console.log(`Bienvenido pes brother, ${nombre}`)
// }

// saludarPersona('Patrick');

// Implementa una función generarNumeroAleatorio que no tenga parámetros y devuelva un número aleatorio entre 0 y 100.

// function generarNumeroAleatorio() {
//     let numeroMaximo = 100;
//     let numeroMinimo = 1;
//     let numeroAleatorio = Math.floor(Math.random()* numeroMaximo)+numeroMinimo;
//     console.log(numeroAleatorio);
// }

// generarNumeroAleatorio();


// Crea una función sumarNumeros que tome dos números como parámetros y devuelva su suma.

// function sumarNumeros(numero1,numero2) {
//     return numero1 + numero2;
// }

// console.log(sumarNumeros(4,3));

// Define una función anónima que tome un número como parámetro y devuelva su cuadrado.

// function anonima(num) {
//     return num ** 2;
    
// }

// console.log(anonima(5));


// Escribe una función de flecha calcularPerimetroRectangulo que tome la base y la altura de un rectángulo y devuelva su perímetro.

// let calcularPerimetroRectangulo2 = (base, altura) => (base + altura) * 2;

// console.log(calcularPerimetroRectangulo2(6,8));

// let calcularPerimetroRectangulo = (base, altura) => {
    
//     perimetro = (base +altura ) * 2;
//     return perimetro;
// }

// console.log(calcularPerimetroRectangulo(6,8));

// const getRandomInRange = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

// // Ejemplo de uso
// const randomNumber = getRandomInRange(9, 14);
// console.log(randomNumber); // Podría imprimir cualquier número entre 3 y 8, inclusive

// console.log(Math.random() * 6);

// let convertirPalabra = palabra => palabra.toUpperCase();

// palabra.toU

// let trans = convertirPalabra('patrick');
// console.log(trans);


// Crea una función que calcule el índice de masa corporal (IMC) de una persona 
// a partir de su altura en metros y peso en kilogramos, que se recibirán como parámetros.

// function calculoImc(altura, peso) {
//     return (peso / altura ** 2);
// }

// let imc = calculoImc('1.5','50');
// console.log(imc);


// // Crea una función que calcule el valor del factorial de un número pasado como parámetro.

// function calculoFactorial(num) {

//     if (num == 0) {
//         return 1;
//     }
//     else { 
//         return num * calculoFactorial(num-1);
//     }
// }
// let numero = 5;
// console.log(calculoFactorial(numero));

// // Crea una función que convierta un valor en dólares, pasado como parámetro, y devuelva 
// // el valor equivalente en reales(moneda brasileña,si deseas puedes hacerlo con el valor 
// // del dólar en tu país). Para esto, considera la cotización del dólar igual a R$4,80.

// function convertirDolares(valor){
//     let cambioDolar = 3.82;
//     return resultado = valor * cambioDolar;
// }
// console.log(convertirDolares(100));

// // Crea una función que muestre en pantalla el área y el perímetro de una sala rectangular,
// // utilizando la altura y la anchura que se proporcionarán como parámetros.

// function calcularAreaPerimetro(altura,anchura){
//     let perimetro = (altura+anchura) * 2;
//     let area = altura * anchura;
//     console.log(`El perimetro es ${perimetro}`);
//     console.log(`El area es ${area}`);
// }
// let alto = 3;
// let ancho = 9;
// console.log(calcularAreaPerimetro(alto,ancho));


// // Crea una función que muestre en pantalla el área y el perímetro de una sala circular, 
// // utilizando su radio que se proporcionará como parámetro. Considera Pi = 3,14.

// function calcularRadioCircular(radio) {
//     let pi = 3.14;
//     let areaC = pi * (radio ** 2);
//     let perimetroC = (2 * pi) * radio;
//     console.log(`El area es ${areaC}`);
//     console.log(`El perimetro es ${perimetroC}`);
// }

// console.log(calcularRadioCircular(4));

// // Crea una función que muestre en pantalla la tabla de multiplicar de un número dado como parámetro.

// function tablaMultiplicar(numeroX){

//     let contadorM = 1;
//     let numeroMaximo = 12;
//     while (contadorM <= numeroMaximo) {
//         console.log(`${numeroX} x ${contadorM} = ${numeroX * contadorM}`);
//         contadorM++;
//     } 
// }

// tablaMultiplicar(4);

// Crea una lista vacía llamada "listaGenerica".

let listaGenericaX = {};
console.log(listaGenericaX);

// Crea una lista de lenguajes de programación llamada "lenguagesDeProgramacion con los
// siguientes elementos: 'JavaScript', 'C', 'C++', 'Kotlin' y 'Python'.

let lenguagesDeProgramacion = ['JavaScript', 'C', 'C++', 'Kotlin', 'Python'];
console.log(lenguagesDeProgramacion);

// Agrega a la lista "lenguagesDeProgramacion los siguientes elementos: 'Java', 'Ruby' y 'GoLang'.

lenguagesDeProgramacion.push( 'Java', 'Ruby', 'GoLang');
console.log(lenguagesDeProgramacion);

// Crea una función que muestre en la consola todos los elementos de la lista "lenguagesDeProgramacion.

function mostrandoElementos() {
    console.log(lenguagesDeProgramacion);
}

mostrandoElementos();

// Crea una función que muestre en la consola todos los elementos de la lista "lenguagesDeProgramacion
// en orden inverso.



function mostrandoInversoElementos() {
    let indice = lenguagesDeProgramacion.length - 1;
    while (indice >= 0) {
        console.log(lenguagesDeProgramacion[indice]);
        indice--;
    }
}

mostrandoInversoElementos();

// Crea una función que calcule el promedio de los elementos en una lista de números.

let numerosLista = [4, 20, 10];
function promedioLista(){
    let promedio = 0;
    let indice = 0;
    while(indice < numerosLista.length){
        console.log('Entrando al while');
        promedio = promedio + numerosLista[indice];
        indice++;
    }
    promedio = (promedio / numerosLista.length);
    console.log(`El promedio es ${promedio}`);
}

promedioLista();

// Crea una función que muestre en la consola el número más grande y el número más pequeño en una lista.

let listaNumerosAleatorios = [1, 20, 18, 34, 21, 12, 25, 4, 9, 14];
function numeroGrandePequeño(listaNumerosAleatorios) {

    let min = listaNumerosAleatorios[0];
    let max = listaNumerosAleatorios[0];
    let indice = 1;

    while(indice < listaNumerosAleatorios.length){
        if (listaNumerosAleatorios[indice] < min) {
            min = listaNumerosAleatorios[indice];
        } else if (listaNumerosAleatorios[indice] > max) {
            max = listaNumerosAleatorios[indice];
        }
        indice++;
    }
    console.log(`El numero menor es ${min}`);
    console.log(`El numero mayor es ${max}`);
}

numeroGrandePequeño(listaNumerosAleatorios);

// Crea una función que devuelva la suma de todos los elementos en una lista.

function sumaElementos(lista) {
    let suma = 0;
    let indice = 0;

    while (indice < lista.length) {
        suma = suma + lista[indice];
        indice++;
    }
    return suma;
}

let lista = [1, 3, 5, 7, 9, 20];
let resultado = sumaElementos(lista);

console.log(`La suma es ${resultado}`);

// Crea una función que devuelva la posición en la lista donde se encuentra un 
// elemento pasado como parámetro, o -1 si no existe en la lista.

function encontrarPosicion(lista, elemento) {
    let indice = 0;

    while (indice < lista.length) {
        if (lista[indice] === elemento) {
            return indice;
        }
        indice++;
    }

    return -1;
}

let numerosx = [3, 5, 1, 9, 2, 8];
let elemento = 9;
let posicion = encontrarPosicion(numerosx, elemento);
console.log("La posición del elemento es:", posicion);

// Crea una función que reciba dos listas de números del mismo tamaño y
// devuelva una nueva lista con la suma de los elementos uno a uno.

function sumarListas(lista1, lista2) {
    if (lista1.length !== lista2.length) {
        console.log("Las listas no tienen el mismo tamaño.");
        return [];
    }

    let resultado = [];
    let i = 0;

    while (i < lista1.length) {
        resultado.push(lista1[i] + lista2[i]);
        i++;
    }

    return resultado;
}

const lista1 = [1, 2, 3, 4];
const lista2 = [5, 6, 7, 8];
const sumaListas = sumarListas(lista1, lista2);
console.log("La lista resultante es:", sumaListas);

// Crea una función que reciba una lista de números y devuelva una nueva 
// lista con el cuadrado de cada número.

function cuadradoDeElementos(lista) {
    let resultado = [];
    let i = 0;

    while (i < lista.length) {
        resultado.push(lista[i] ** 2);
        i++;
    }

    return resultado;
}


const numeros = [1, 2, 3, 4, 5];
const cuadrados = cuadradoDeElementos(numeros);
console.log("La lista de cuadrados es:", cuadrados);
