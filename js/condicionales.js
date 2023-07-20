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
let diaMateria = 'miercoles';

if (materia1 ==='frontend' && materia2==='inglés' && diaMateria ==='miercoles') {
    console.log('Los profes son: Jorge' + ' - ' + ' Fabiola');
}else{
    console.log('No son los profes');
}

// condicional switch, también se basa por una condicion y se utilizar varios case
// ejempo4: Mostrar las actividades que realizan dependiendo del día
const diaActividad = 'lunes';

switch (diaActividad) {
    case 'lunes':
        console.log('lunes');
        console.log('Estudio');        
        console.log('Trabajo');        
        console.log('Doy clases');        
        
        break;
    case 'martes':
        console.log('martes');
        console.log('Estudio');        
        console.log('Trabajo');        
        console.log('Doy clases');         
        console.log('Ensayo con la banda');         
        
        break;
    case 'miercoles':
        console.log('miercoles');
        console.log('Estudio');        
        console.log('Trabajo');        
        console.log('Doy clases: grupo 2 y grupo 5');         
        console.log('Ensayo con la banda');         
        
        break;
    case 'jueves':
        console.log('jueves');
        console.log('Estudio');        
        console.log('Trabajo');        
        console.log('Doy clases');         
            
        break;
    case 'viernes':
        console.log('viernes');
        console.log('Estudio');        
        console.log('Trabajo');        
        console.log('Doy clases: a los grupos 2 y 5');               
             
        break;
    case 'sabado':
        console.log('sabado');
        console.log('Estudio');        
        console.log('Trabajo');        
        console.log('en la noche me tomo unas politas');            
    
        break;
    case 'domingo':
        console.log('domingo');
        console.log('Estudio');        
        console.log('voy a la ciclovia');        
        console.log('voy a cine');               
        
        break;

    default:
        console.log('Error en sintaxis del día');
        break;
}

