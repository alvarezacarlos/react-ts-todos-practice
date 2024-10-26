import React, { useRef } from 'react'

import { TodoType } from '../models/todoType'

import { AddTodoType } from '../models/addTodoType'

import './TodoForm.css'

const TodoForm: React.FC<AddTodoType> = props => {

    const textInputRef = useRef<HTMLInputElement>(null)

    const clearFormHandler = () => {
        if (textInputRef.current) {
            textInputRef.current.value = ''
        }
    }

    const submitHandler = (event: React.FormEvent) => {
        event.preventDefault()
        const enteredText = textInputRef.current!.value
        if (enteredText) {
            const newTodo: TodoType = {
                id: Math.random().toString(),
                text: enteredText
            }
            props.addTodoType(newTodo)
            clearFormHandler()
        }
    }

    return (
        <form action="" onSubmit={submitHandler}>
            <div className='form-control'>
                <label htmlFor="todo-text">Todo Text</label>
                <input type="text" id="todo-text" ref={textInputRef} />
            </div>
            <button type="submit">Add Todo</button>
        </form>
    )
}

export default TodoForm