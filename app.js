/**
 * Conceptos Basicos En Programacion
    - Tipos de datos
    - Variables
    - Control de flujo
    - Ciclos
    - Estructuras de datos
    - Funciones
} */

function suma() {
    var numero1 = prompt("Ingrese el primer numero");
    var numero2 = prompt("Ingrese el segundo numero");
    var resultado = parseInt(numero1) + parseInt(numero2);
    document.getElementById('resultado').innerHTML = resultado;
}

function resta() {
    var numero1 = prompt("Ingrese el primer numero");
    var numero2 = prompt("Ingrese el segundo numero");
    var resultado = parseInt(numero1) - parseInt(numero2);
    document.getElementById('resultado').innerHTML = resultado;
}

function multiplicacion() {
    var numero1 = prompt("Ingrese el primer numero");
    var numero2 = prompt("Ingrese el segundo numero");
    var resultado = parseInt(numero1) * parseInt(numero2);
    document.getElementById('resultado').innerHTML = resultado;
}

function division() {
    var numero1 = prompt("Ingrese el primer numero");
    var numero2 = prompt("Ingrese el segundo numero");
    var resultado = parseInt(numero1) / parseInt(numero2);
    document.getElementById('resultado').innerHTML = resultado;
}