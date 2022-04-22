const persona = {
  nombre: 'Tony',
  apellido: 'Muzzarella',
  edad: 45,
  direccion:{
    ciudad: 'Capeletti',
    pais: 'Italia',
  }
};

//console.table
console.log( persona );

const persona2 = {...persona};
persona2.nombre = 'Peter';
console.log(persona2)