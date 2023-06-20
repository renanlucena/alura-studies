import styles from "./Lista.module.scss";
import Item from './Item';
import { ITarefa } from "../../types/ITarefa";

interface ListaProps{
  tarefas:ITarefa[],
  selecionaTarefa: (tarefaSelecionada: ITarefa) => void
}

export default function Lista({tarefas, selecionaTarefa} : ListaProps) {
  
  return (
    <aside className={styles.listaTarefas}>
        <h2>Estudos do dia</h2>
        <ul>
            {tarefas.map((item) =>(
              <Item key={item.id} {...item} selecionaTarefa = {selecionaTarefa}/>
            ))}
           
            
         
        </ul>
    </aside>
  )
}
