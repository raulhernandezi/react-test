import React, { Fragment } from "react";

export function ToDoItem({ todo, toggleCompleted, deleteTask }) {

    const { id, text, completed } = todo;

    const handleClick = () => {
        toggleCompleted(id)
    }

    const handleDelete = () => {
        console.log(id)
        deleteTask(id)
    }

    return (
        <Fragment>
            <li style={{margin: '1.2rem 0rem'}}>
                - {text}
                <input type="checkbox" checked={completed} onChange={handleClick}/>
                <h4 style={{margin: '0px', display: 'inline'}} onClick={handleDelete}>🗑️</h4>
            </li>
        </Fragment>
    );
}
