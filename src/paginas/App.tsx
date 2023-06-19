import React, { useState } from 'react';
import Formulario from '../componentes/Formulario';
import Lista from '../componentes/Lista';
import styles from "./App.module.scss";
import Cronometro from '../componentes/Cronometro';
import { ITarefa } from '../types/ITarefa';

function App() {

  const[tarefas, setTarefas] = useState<ITarefa[]>([])

  return (
    <div className={styles.AppStyle}>
      <Formulario setTarefas = {setTarefas} />
      <Lista tarefas={tarefas} />
      <Cronometro/>
    </div>
  );
}

export default App;
