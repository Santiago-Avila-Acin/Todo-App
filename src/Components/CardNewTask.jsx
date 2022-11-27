import React from 'react'
import "../styles/CardNewTask.css"

const CardNewTask = () => {
    return (
        <React.Fragment>
                <h1>Create new task</h1>
                <div class="new-task__container">
                    <p>Task name</p>
                    <input placeholder="New task" type="text" />
                </div>
            <button class="primary-button">Create task</button>
        </React.Fragment>
    );
}

export default CardNewTask;