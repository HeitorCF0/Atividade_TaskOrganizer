import React from 'react'
import './ListItem.css'

const ListItem = ({id, titulo, concluida, concluirTarefa, excluirTarefa}) => {
    return (
        <div className={`list-item ${concluida ? 'completed' : ''}`}>
            <h4>{titulo}</h4>
            <p>Concluída: {concluida ? 'Concluída' : 'Pendente'}</p>
            <div className='list-item-actions'>
                <button id='Conclude' onClick={() => concluirTarefa(id)} disabled={concluida}>
                    Concluído
                </button>
                <button id='Exclude' onClick={() => excluirTarefa(id)}>
                    Excluir
                </button>
            </div>
        </div>
    )
}

export default ListItem