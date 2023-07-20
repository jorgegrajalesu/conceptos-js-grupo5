// if y else, determina si la condición se cumple o no
// ejemplo1: Mostrar el nombre del profe de frontend 

let nombreMataria = 'frontend';

if (nombreMataria==='frontend') {
    // mostrar nombre del profe
    console.log(`Nombre del profe: Jorge - ${nombreMataria}`);
    
}else{
    console.log('No es el nombre del profe');
}

/**
 *  ejemplo2: Determinar el ingreso a un bar, solo pueden ingresar los mayores de edad.
 * */ 
console.warn('ejemplo2: Determinar el ingreso');

let edadPersona = 56;

if (edadPersona >= 18) {

    console.log(`Tu edad es: ${edadPersona} - puedes ingresar`);
    
}else{
    console.log(`Tu edad es: ${edadPersona} - no puedes ingresar`);
}

/**
 *  ejemplo3: Determinar los profes de inglés y frontend, el día miercoles.
 * */ 
console.warn('ejemplo3: Mostrar profes');

const materia1 = 'frontend';
const materia2 = 'inglés';
let diaMateria = 'jueves';

