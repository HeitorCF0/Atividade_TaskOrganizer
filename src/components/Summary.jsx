import './Summary.css'

const Summary = ({tasks}) => {
    const completedTasks = tasks.filter(task => task.concluida).length
    const pendingTasks = tasks.length - completedTasks

    return (
        <section className='summary' aria-label='Resumo das tarefas'>
            <h3>Resumo</h3>
            <p>Total: {tasks.length}</p>
            <p>Concluídas: {completedTasks}</p>
            <p>Pendentes: {pendingTasks}</p>
        </section>
    )
}

export default Summary
