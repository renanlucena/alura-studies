import React from 'react'
import styles from "./Item.module.scss";
import { ITarefa } from '../../../types/ITarefa';

interface ItemProps extends ITarefa{
  selecionaTarefa: (tarefaSelecionada: ITarefa) => void
}

export default function Item({tarefa, tempo, selecionado, completado, id, selecionaTarefa} :ItemProps ) {
  return (
    <li className={`${styles.item} ${selecionado ? styles.itemSelecionado : ''}`} onClick={() => selecionaTarefa({tarefa,tempo,selecionado,completado,id})}>
    <h3>
        {tarefa}
    </h3>
    <span>
        {tempo}
    </span>
</li> 
  )
}
