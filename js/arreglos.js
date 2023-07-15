// los arreglos sirven para contener varias variables
// sintaxis se declara como una variable let o const 

const auto = [];// array o arreglo vacio 
let  Auto = ['Deportivo', 'rojo', 'automatico', 250000000];

// mostrar los datos del Auto 
console.log(auto);
console.log({Auto});

// ejemplo 2
const movies = ['Flash', 'Indiana Jones:5', 'Destino Final'];
// mostrar todas las pelis
console.log(movies);
// mostrar solo la peli indiana jones
console.log(movies[1]);

// combinar arreglos
let libros = [
    'Sistemas',
    'Contabilidad',
    25000,
    37000,
    25000*0.2,
    ['Wilson', 'Pedro', true, '14/07/23']
];

// mostrar todo la información de los libros
console.log(libros);
// mostrar la fecha 
console.log(libros[5][3]);

// muestra el último valor de arreglo
let ultimoValor = libros[libros.length - 1];
console.log('El último valor es: ', ultimoValor);

// cuántos valores tiene el array de libros
console.log('Los valores: ', libros.length);

// Agregar un nuevo elemento al array de libros
let nuevoLibro = libros.push('El Principito');
console.log({nuevoLibro, libros});

// Agregar un nuevo elemento al principio del array de libros
let elementoLibroPrincipio = libros.unshift('Crimen y castigo');
console.log({elementoLibroPrincipio, libros});

// Eliminar un elemento del array de libros
let borrarElemento = libros.splice(7);
console.log({borrarElemento, libros});


