

const personajes = ['Goku', 'Vegeta', 'Trunks'];
const [, , p3] = personajes;
console.log(p3);

const retornaArreglo = () => {
  return ['ABC', 123];
}

const [letras, numeros] = retornaArreglo();
console.log(letras, numeros);


const useState = (valor) => {
  return [valor, () => console.log('Hola mundo')];
}


//tarea 
// 1. el primer valor se llamara nombre
// 2. el segundo valor se llamara setNombre
const [nombre, setNombre] = useState('Goku');
console.log(nombre);
setNombre();