// ciclo for, sirve para imprimir varios valores y tiene un limite

/**
 * mostrar la tabla de multiplicar con base en 2 hasta 10
 * 2X1= 2
 */

let num = 1;
let base = 2;
let resultado = '';

for (num = 1; num <= 10; num++) {
    
    resultado += `${base} X ${num} = ${num * base}\n`;
    
}

console.log(resultado);