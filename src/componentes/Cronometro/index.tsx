import React, { useState } from 'react'
import styles from "./Cronometro.module.scss";
import Botao from '../Botao'
import Relogio from "./Relogio"
import { ITarefa } from '../../types/ITarefa';
import { tempoParaSegundos } from '../../common/utils/time';

interface CronometroProps{
    selecionado: ITarefa | undefined
}

export default function Cronometro({selecionado} :CronometroProps) {

    const [tempo, setTempo] = useState<number>();
    if(selecionado?.tempo){
        setTempo(tempoParaSegundos(selecionado.tempo));
    }
    return (
        <div className={styles.cronometro}>
            <p className={styles.titulo}>Escolha um card e inicie o cronômetro</p>
            Tempo: {tempo}
            <div className={styles.relogioWrapper}>

                <Relogio />

            </div>
            <Botao>
                Começar!
            </Botao>
        </div>
    )
}
