import React from 'react';
import Formulario from '../componentes/Formulario';
import Lista from '../componentes/Lista';
import styles from "./style.module.scss";



function App() {
  return (
    <div className={styles.AppStyle}>
      <Formulario />
      <Lista />
    </div>
  );
}

export default App;
