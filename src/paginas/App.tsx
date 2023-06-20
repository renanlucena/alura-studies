import React, { useState } from 'react';
import Formulario from '../componentes/Formulario';
import Lista from '../componentes/Lista';
import styles from "./App.module.scss";
import Cronometro from '../componentes/Cronometro';
import { ITarefa } from '../types/ITarefa';

function App() {

  const[tarefas, setTarefas] = useState<ITarefa[]>([]);
  const [selecionado, setSelecionado] = useState<ITarefa>();

  function selecionaTarefa(tarefaSelecionada: ITarefa){
    setSelecionado(tarefaSelecionada);
    setTarefas(tarefasAnteriores => tarefasAnteriores.map(tarefa => ({
      ...tarefa,
      selecionado: tarefa.id === tarefaSelecionada.id 
    })))


  }

  return (
    <div className={styles.AppStyle}>
      <Formulario setTarefas = {setTarefas} />
      <Lista tarefas={tarefas} selecionaTarefa ={selecionaTarefa}/>
      <Cronometro selecionado={selecionado}/>
    </div>
  );
}

export default App;
