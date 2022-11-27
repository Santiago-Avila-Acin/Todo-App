import React from 'react';
import "../styles/TodoList.css"

const TodoList = (props) => {
    return (
        <section className="todo__container">
                <ul>
                    {props.children}
                </ul>
        </section>
    );
}

export default TodoList;