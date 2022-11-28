import React from 'react'
import { TodoContext } from '../hooks/TodoContext';
import "../styles/CardNewTask.css"

const CardNewTask = () => {
    const {
        newTodoValue,
        onSubmit,
        onChange,
    } =React.useContext(TodoContext)

    return (
        <React.Fragment>
                <h1>Create new task</h1>
                <form onSubmit={onSubmit} className="new-task__container">
                    <label className="new-task__container">
                        Task name
                    </label>
                        <input
                        onChange={onChange}
                        value={newTodoValue}
                        placeholder="New task"
                        type="text"
                        />

                    <button type='submit' className="primary-button">Create task</button>
                </form>
        </React.Fragment>
    );
}

export default CardNewTask;