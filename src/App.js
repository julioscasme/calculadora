import logo from './logo.svg';
import './App.css';
import freeCodeCampLogo from './img/freecodecamp-logo.png'
import Boton from './componentes/Boton'
import Pantalla from './componentes/Pantalla'
import BotonClear from './componentes/BontonClear'
import { useState } from 'react';
import { evaluate } from 'mathjs';

function App() {

const[input, setImput] = useState('');

const agregarInput = val => {
  setImput(input + val);
};

const calcularResultado = () => {
  const evaluar = evaluate(input);
  
  if(input != ''){
    setImput(evaluar)
  }
  else{
    alert('Valor no válido');
    setImput("");
  }
};


  return (
    <div className="App">
      <div className='freedocecamp-logo-contenedor'>
        <img
          src={freeCodeCampLogo}
          className='freecodecamp-logo'
          alt='Logo de freeCodeCamp'
        />
      </div>

      <div className='contenedor-calculadora'>

        <Pantalla input={ input } />

        <div className='fila'>
          <Boton manejarClic={agregarInput} >1</Boton>
          <Boton manejarClic={agregarInput} >2</Boton>
          <Boton manejarClic={agregarInput} >3</Boton>
          <Boton manejarClic={agregarInput} >+</Boton>
        </div>
        <div className='fila'>
          <Boton manejarClic={agregarInput} >4</Boton>
          <Boton manejarClic={agregarInput} >5</Boton>
          <Boton manejarClic={agregarInput} >6</Boton>
          <Boton manejarClic={agregarInput} >-</Boton>
        </div>
        <div className='fila'>
          <Boton manejarClic={agregarInput} >7</Boton>
          <Boton manejarClic={agregarInput} >8</Boton>
          <Boton manejarClic={agregarInput} >9</Boton>
          <Boton manejarClic={agregarInput} >*</Boton>
        </div>
        <div className='fila'>
          <Boton manejarClic={calcularResultado} >=</Boton>
          <Boton manejarClic={agregarInput} >0</Boton>
          <Boton manejarClic={agregarInput} >.</Boton>
          <Boton manejarClic={agregarInput} >/</Boton>
        </div>
        <div className='fila'>
          <BotonClear manejarClear={() => setImput("")} >Clear</BotonClear>
        </div> 

      </div>

    </div>
  );
}

export default App;
