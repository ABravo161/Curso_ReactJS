import { getHeroesById } from "./bases/08-imp-exp";

// const promesa = new Promise( (resolve, reject) => {

//   setTimeout( () => {
//     const heroe = getHeroesById(2);
//     resolve(heroe);
//   }, 2000)

// });

// promesa.then( ( heroe ) => {
//   console.log('Heroe:', heroe)
// })
// .catch( error => console.warn(error));

const getHeroesByIdAsync = (id) => {

  return new Promise( (resolve, reject) => {

    setTimeout( () => {
      const heroe = getHeroesById(id);
      heroe ? 
        resolve(heroe)
      : reject('No se encontro el heroe con id ',id);
    }, 2000)
  });
};

getHeroesByIdAsync(10)
  .then(console.log()) //.then(heroe => console.log( heroe))
  .catch(console.warn); //.catch(error => console.warn(error));

