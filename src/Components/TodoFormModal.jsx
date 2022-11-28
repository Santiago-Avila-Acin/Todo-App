import React from 'react';
import "../styles/TodoFormModal.css"
import { TodoContext } from '../hooks/TodoContext';

const TodoFormModal = () => {
    const {
        newTodoValue,
        onChange,
        onCancel,
        onSubmit,
    } =React.useContext(TodoContext)

    return (
        <form className='todo-form-modal' onSubmit={onSubmit}>
            <label>Add new modal</label>
            <textarea
            placeholder='Homework'
            onChange={onChange}
            value={newTodoValue}
            />
            <div className='TodoForm-buttonContainer'>
            <button className='TodoForm-button TodoForm-button--cancel' type='button' onClick={onCancel}>
                Cancel
            </button>
            <button className='TodoForm-button TodoForm-button--add' type='submit'>
                Add
            </button>
            </div>
        </form>
    );
}

export default TodoFormModal;