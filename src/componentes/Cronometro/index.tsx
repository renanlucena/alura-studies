import React, { useEffect, useState } from 'react'
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

    useEffect(() =>{
        if(selecionado?.tempo)
            setTempo(tempoParaSegundos(selecionado.tempo))
    },[selecionado]);

    function regressiva(contador: number = 0){
        setTimeout(() => {
            if(contador > 0){
                setTempo(contador - 1);
                return regressiva(contador -1);
            }
        }, 1000)

    }

    return (
        <div className={styles.cronometro}>
            <p className={styles.titulo}>Escolha um card e inicie o cronômetro</p>
           
            <div className={styles.relogioWrapper}>

                <Relogio tempo={tempo} />

            </div>
            <Botao onClick={() => regressiva(tempo)}>
                Começar!
            </Botao>
        </div>
    )
}
