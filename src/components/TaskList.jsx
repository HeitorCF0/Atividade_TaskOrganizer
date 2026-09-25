import { useState } from 'react'
import ListItem from './ListItem'
import Summary from './Summary'
import './TaskList.css'

const TaskList = () => {

    const [tasks, setTasks] = useState([
        {id: 1, titulo: "Tarefa 1", concluida: false},
        {id: 2, titulo: "Tarefa 2", concluida: true},
        {id: 3, titulo: "Tarefa 3", concluida: false},
    ])

    const concluirTarefa = (id) => {
        setTasks(tasks.map(task =>
            task.id === id ? {...task, concluida: true} : task
        ))
    }

    const excluirTarefa = (id) => {
        setTasks(tasks.filter(task => task.id !== id))
    }

    const possuiTarefasPendentes = tasks.some(task => !task.concluida)

    return (
        <main className='task-list'>
            <h2>Lista de Tarefas</h2>
            <Summary tasks={tasks}/>
            <p id='message'>{tasks.length === 0
                ? 'Sem tarefas na lista'
                : possuiTarefasPendentes
                    ? 'Você ainda possui tarefas pendentes.'
                    : 'Parabéns! Todas as tarefas foram concluídas!'}</p>
            <ul className='task-list-items'>
                {tasks.map(task => (
                    <li key={task.id}>
                        <ListItem
                            id={task.id}
                            titulo={task.titulo}
                            concluida={task.concluida}
                            concluirTarefa={concluirTarefa}
                            excluirTarefa={excluirTarefa}
                        />
                    </li>
                ))}
            </ul>
        </main>
    )
}

export default TaskList