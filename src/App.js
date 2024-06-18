
import './App.css';
import freecodecamplogo from './imagenes/freecodecamp-logo.png';
import Boton from './componentes/Boton';
import Contador from './componentes/Contador';
import { useState } from 'react';

function App() {

  const [cantClics,setNumClics]=useState(0) ;

  const Clic=()=>{
    setNumClics(cantClics+1);
  }

  const reiniciarContador=()=>{

    setNumClics(0);

  }

  return (
    <div className='App'>
     <div className='freecodecamp-logo-contenedor'>
      <img
        className='freecodecamp-logo'
        src={freecodecamplogo}
        alt='logo de freecodecamp'
      />
     </div>
     <div className='contenedor-principal'>
        <Contador numClics={cantClics} />
        <Boton texto='Clic' esBotonDeClic={true} manejarClic={Clic}/>
        <Boton texto='Reiniciar' esBotonDeClic={false} manejarClic={reiniciarContador}/>
     </div>
    </div>
  );
}

export default App;
