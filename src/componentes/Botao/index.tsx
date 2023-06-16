import React, { ReactElement } from 'react'
import styles from "./Botao.module.scss";
interface BotaoProps{
    children: ReactElement | string
}
export default function Botao({children}:BotaoProps){
        return(
            <button className={styles.botao}>
                {children}
            </button>
        )
    }

