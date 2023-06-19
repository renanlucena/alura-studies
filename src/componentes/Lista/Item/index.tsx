import React from 'react'
import styles from "./Item.module.scss";
import { ITarefa } from '../../../types/ITarefa';

export default function Item({tarefa, tempo, selecionado, completado, id} :ITarefa ) {
  return (
    <li className={styles.item}>
    <h3>
        {tarefa}
    </h3>
    <span>
        {tempo}
    </span>
</li> 
  )
}
