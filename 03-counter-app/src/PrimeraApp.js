import React from 'react';

const PrimeraApp = ( {saludo = 'Hola mundo'} ) => {

  return (
    <>
      <h1> {saludo} </h1>
      <p>Mi primera App</p>
    </>
  )
  
}

export default PrimeraApp;