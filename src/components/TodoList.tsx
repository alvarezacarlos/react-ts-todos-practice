import React from 'react'
import { TodoListInterface } from '../models/todoListInterface'

import './TodoList.css'

const TodoList: React.FC<TodoListInterface> = props => {

    return (
        <ul>
            {props.todos.map(todo =>
                <li key={todo.id}>
                    <span>{todo.text}</span>
                    <button onClick={() => props.onDeleteTodo(todo.id)}>Delete</button>
                </li>
            )
            }
        </ul>
    )
}

export default TodoList