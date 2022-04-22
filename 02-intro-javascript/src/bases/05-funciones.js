//Funciones en JS
const saludar1 = function( nombre ){
  return `Hola ${ nombre }`;
}

const saludar2 = ( nombre ) => {
  return `Hola ${ nombre }`;
}

const saludar3 = ( nombre ) => `Hola ${ nombre }`;

const saludar4 =  () => `Hola mundo`;


console.log( saludar1('Goku') );
console.log( saludar2('Vegeta') );
console.log( saludar3('Gohan') );
console.log( saludar4() );

const getUser = () => (
  {
    uid: 'ABC123',
    username: 'user123'
  })


console.log( getUser() );

// Tarea
// 1. Treansformen a una función de Flecha
// 2. Tiene que retornar un objeto implícito
// 3. Pruebas
const getUsuarioActivo = ( nombre ) => 
  ({
    uid: 'ABC435',
    username: nombre,
  });

const usuarioActivo = getUsuarioActivo('Fernando');
console.log( usuarioActivo );