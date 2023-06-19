import React, { useState } from 'react'
import Botao from '../Botao'
import styles from "./Formulario.module.scss";
import { ITarefa } from '../../types/ITarefa';
interface FormularioProps{
    setTarefas: React.Dispatch<React.SetStateAction<ITarefa[]>>
}

export default function Formulario({setTarefas}: FormularioProps) {
    const [tarefa, setTarefa] = useState("");
    const [tempo, setTempo] = useState("00:00:00");

    function adicionarTarefa(e: React.FormEvent){
        e.preventDefault();
        setTarefas(tarefasAntigas => [...tarefasAntigas, {tarefa, tempo}]);
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
            <Botao type="submit">Adicionar</Botao>

        </form>
    )
}
