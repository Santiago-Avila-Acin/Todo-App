import React from 'react';
import { TodoContext } from '../hooks/TodoContext';
import "../styles/TodoCounter.css"

const TodoCounter = () => {
    const { completedTodos, totalTodos } = React.useContext(TodoContext)

    return (
        <React.Fragment>
            <h1 className="todo__text--main">Your task</h1>
            <span className="todo__compliment">Completed {completedTodos} to {totalTodos} Todos</span>
        </React.Fragment>
    );
}

export default TodoCounter;