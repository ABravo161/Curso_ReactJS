// Desestructuración
const persona = {
  nombre:'Tony',
  edad:45,
  clave: 'Ironman',
  rango: 'Soldado',
};


const useContext = ( {nombre, clave, edad, rango = 'Capitan'} ) => {

  return {
    nombreClave: clave,
    anios: edad,
    latlgn:{
      lat:12.2154,
      lgn:-12.656
    },
  }
};

const {nombreClave, anios, latlgn:{lat, lgn}} = useContext( persona );
console.log(nombreClave, anios);
console.log(lat, lgn);
