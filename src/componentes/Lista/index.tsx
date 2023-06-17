import {useState} from 'react'
import styles from "./Lista.module.scss";
import Item from './Item';


export default function Lista() {
  const[tarefa, setTarefa] = useState([{
    tarefa:'React',
    tempo: '02:00:00'
},
{
    tarefa:'JavaScript',
    tempo: '01:00:00'
}
])
  return (
    <aside className={styles.listaTarefas}>
        <h2 onClick={() =>{
          setTarefa([...tarefa, {tarefa: "Estudar estado", tempo:"05:00:00"}])
        }}>Estudos do dia</h2>
        <ul>
            {tarefa.map((item, index) =>(
              <Item key={index} {...item} />
            ))}
           
            
         
        </ul>
    </aside>
  )
}
