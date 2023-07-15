/**
 * Hay varios tipos de funciones: tradicional, de flecha, anonima y asincrona
 */
// funcion tradicional sin argumentos
function miNombre(){
    console.log('Mi nombre es: ' + 'Jorge');   
    console.log(`Mi nombre es: ${'Marta'}`);   
    console.log(`Mi nombre es: ${'Julio'}`);   

}

// llamar la función
miNombre();

// función con argumentos
/**
 * 
 * @param {String} apellido 
 */
function miApellido(apellido){
    console.log(`Mi apellido: ${apellido}`); 
}

miApellido('Grajales');
