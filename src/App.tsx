import React, { useState } from 'react';
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';
import { TodoType } from './models/todoType';

import './App.css'

const App: React.FC = () => {
  const [todos, setTodos] = useState<TodoType[]>([])

  const addTodoHandler = (newTodo: TodoType) => {
    console.log(newTodo)
    // setTodos([...todos, newTodo])
    setTodos(prevTodos => [...prevTodos, newTodo])
  }

  const deleteTodoHandler = (todoId: string) => {
    setTodos(prevTodos => {
      return prevTodos.filter(todo => todo.id !== todoId)
    })
  }

  return (
    <div className="app">
      <TodoForm addTodoType={addTodoHandler} />
      <TodoList todos={todos} onDeleteTodo={deleteTodoHandler}/>
    </div>
  );
}

export default App;