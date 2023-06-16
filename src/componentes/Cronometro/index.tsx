import React from 'react'
import styles from "./Cronometro.module.scss";
import Botao from '../Botao'
import Relogio from './Relogio'


export default function Cronometro() {
    return (
        <div className={styles.cronometro}>
            <p className={styles.titulo}>Escolha um card e inicie o cronômetro</p>
            <div className={styles.relogioWrapper}>

                <Relogio />

            </div>
            <Botao>
                Começar!
            </Botao>
        </div>
    )
}
