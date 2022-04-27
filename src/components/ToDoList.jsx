import React from 'react'
import { ToDoItem } from './ToDoItem';

export function ToDoList({ todos, toggleCompleted, deleteTask }) {

    const handleDelete = (task) => {
        console.log('***Handle Delete ToDoList***')
        console.log(task)
        console.log("****************************")
        deleteTask(task)
    }

    return (
        <ul>
            {todos.map(todo => (
                <ToDoItem key={todo.id} todo={todo} toggleCompleted={toggleCompleted} deleteTask={handleDelete}></ToDoItem>            
            ))}
        </ul>
    )
}
