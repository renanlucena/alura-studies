import React from 'react';
import Formulario from '../componentes/Formulario';
import Lista from '../componentes/Lista';
import styles from "./App.module.scss";
import Cronometro from '../componentes/Cronometro';




function App() {
  return (
    <div className={styles.AppStyle}>
      <Formulario />
      <Lista />
      <Cronometro/>
    </div>
  );
}

export default App;
