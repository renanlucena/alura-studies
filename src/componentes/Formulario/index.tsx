import React, { useState } from 'react'
import Botao from '../Botao'
import styles from "./Formulario.module.scss";

export default function Formulario() {
    const [tarefa, setTarefa] = useState("");
    const [tempo, setTempo] = useState("00:00:00");

    function adicionarTarefa(e: React.FormEvent){
        e.preventDefault();
        console.log('state: ', tarefa)
    }
    return (
        <form className={styles.novaTarefa} onSubmit={adicionarTarefa}>
            <div className={styles.inputContainer}>
                <label htmlFor='tarefa'>
                    Adicione um novo estudo
                </label>
                <input 
                    type='text'
                    value={tarefa}
                    onChange={e => setTarefa(e.target.value)}
                    name='tarefa'
                    id='tarefa'
                    placeholder='O que você quer estudar?'
                    required
                    />

            </div>
            <div className={styles.inputContainer}>
                <label htmlFor='tempo'>
                    Tempo
                </label>
                <input 
                    type='time'
                    value={tempo}
                    onChange={e => setTempo(e.target.value)}
                    step= '1'
                    name='tempo'
                    id='tempo'
                    min="00:00:00"
                    max="01:30:00"
                    required
                />

            </div>
            <Botao>Adicionar</Botao>

        </form>
    )
}
