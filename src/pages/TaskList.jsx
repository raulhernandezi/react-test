import React, { Fragment, useState, useRef, useEffect } from "react";
import { v4 as uuid } from "uuid";
import { ToDoList } from "../components/ToDoList";

const TASK_LIST = 'tasks'

export function TaskList() {

    //Estado y funcion que actualiza el estado
    const [todos, setTodos] = useState(
        [{
        id: uuid(),
        text: "Hacer la compra",
        completed: false
        }]
    )

    const newTaskRef = useRef()

    //Si el array esta vacio, la funcion se ejecuta solo al inicio
    //Si el array tiene algo, la funcion se ejecuta cada vez que se modifica
    useEffect(() => {
        const tasks = JSON.parse(localStorage.getItem(TASK_LIST))
        console.log(tasks)
        if (tasks) {
            setTodos(tasks)
        }
    }, [])

    
    useEffect(() => {
        localStorage.setItem(TASK_LIST, JSON.stringify(todos))
    }, [todos])


    const handleAdd = () => {
        const newTask = newTaskRef.current.value
        if (newTask.trim() === "") {
            return
        }
        //METODO QUE HACE ACTUALIZAR EL STATE Y REFRESCA LA PAGINA
        setTodos(todos => {
            return [
                ...todos,
                {
                    id: uuid(),
                    text: newTask,
                    completed: false
                }
            ]
        })
        //RESETEAR EL INPUT
        newTaskRef.current.value = null;
    }

    const handleDelete = (task) => {

        console.log('Handle Delete PARENT')
        const newTodos = todos.filter(todo => todo.id !== task)
        //const newTodos = todos.filter(task => !task.completed)
        setTodos(newTodos)
    }

    const handleClear = () => {
        setTodos([])
    }



    const toggleCompleted = (id) => {
        const tasks = [...todos]
        const task = tasks.find(task => task.id === id)

        task.completed = !task.completed
        setTodos(tasks)
    }

    return (
        <Fragment>
            <h1 className='page-title'>Mi Lista de Tareas</h1>
            <div>¡Tienes <span style={{fontWeight: 'bold'}}>{todos.filter(task => !task.completed).length}</span> tareas pendientes!</div>
            <ToDoList todos={todos} toggleCompleted={toggleCompleted} deleteTask={handleDelete}/>
            <hr style={{marginTop: '2rem'}}></hr>
            <div style={{margin: '2rem 0rem'}}>
                <input ref={newTaskRef} type="text" placeholder="Nueva Tarea" />
                <button style={{marginLeft: '0.5rem'}} onClick={handleAdd}>Añadir Tarea</button>
            </div>
            <button className="clearList" onClick={handleClear}>Vaciar Lista</button>
        </Fragment>
    );
}