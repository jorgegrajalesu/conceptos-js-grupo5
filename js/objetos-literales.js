// sintaxis de un objeto 
let libros = {
    nombre: 'Crimen y castigo',
    nombre2: 'El principito',
    precio1: 60000,
    precio2: 120000,
    stock: true,
};

// muestra todas las propiedades del objeto libros
console.table(libros);

// muestra el libro crimen y castigo
console.log('El libro es: ', libros.nombre);