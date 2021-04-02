import React from 'react'
import './TodoItem.css'

export const TodoItem = ({ todo }) => {
    return <div className="todo-item">
        {todo.text}
        <button>complete</button>
        <button>delete</button>
    </div>
}