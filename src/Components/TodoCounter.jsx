import React from 'react';
import "../styles/TodoCounter.css"

const TodoCounter = () => {
    return (
        <React.Fragment>
            <h1 className="todo__text">Your task</h1>
            <span className="todo__compliment">Completed 2 to 5</span>
        </React.Fragment>
    );
}

export default TodoCounter;