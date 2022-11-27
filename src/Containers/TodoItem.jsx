import React from 'react';
import "../styles/TodoItem.css"

const TodoItem = (props) => {
    return (
        <li>
            <div className="todo">
                <div className="todo__check"></div>
                <p>{props.text}</p>
                <p className="todo__close">x</p>
            </div>
        </li>
    );
}

export default TodoItem;