import React from 'react';
import "../styles/TodoItem.css"

const TodoItem = ({ onComplete, completed, text, deleteTodo}) => {

    return (
        <li>
            <div className="todo">
                <button onClick ={onComplete} className= {`todo__check ${completed && "todo__check--completed"}`}></button>
                <p className= {` todo__text ${completed && "todo__text--completed"}`}>{text}</p>
                <p onClick={deleteTodo} className="todo__close">x</p>
            </div>
        </li>
    );
}

export default TodoItem;