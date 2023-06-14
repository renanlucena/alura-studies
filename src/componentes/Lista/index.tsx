import React from 'react'
import styles from "./Lista.module.scss";
import Item from './Item';

export default function Lista() {
    const tarefas = [{
        tarefa:'React',
        tempo: '02:00:00'
    },
    {
        tarefa:'JavaScript',
        tempo: '01:00:00'
    }
]
  return (
    <aside className={styles.listaTarefas}>
        <h2>Estudos do dia</h2>
        <ul>
            {tarefas.map((tarefa, index) =>(
              <Item key={index} {...tarefa} />
            ))}
           
            
         
        </ul>
    </aside>
  )
}
