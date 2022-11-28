import React from 'react';
import { TodoContext } from '../hooks/TodoContext';
import CreateTodoButton from '../Components/CreateTodoButton';
import TodoCounter from '../Components/TodoCounter';
import TodoSearch from '../Components/TodoSearch';
import TodoItem from '../Containers/TodoItem';
import TodoList from '../Components/TodoList';
import CardNewTask from '../Components/CardNewTask';
import Tamagochi from '../Components/Tamagochi';
import Modal from '../Components/Modal';
import TodoFormModal from '../Components/TodoFormModal';
import '../styles/App.css';

const AppUi = () => {
    const {
            searchedTodos,
            toggleCompleteTodo,
            deleteTodo,
            openModal,
            setOpenModal,
        } = React.useContext(TodoContext)

    return (
        <React.Fragment>
            <div className="main__container">
                <div className="card__container">
                    <CardNewTask />
                    <Tamagochi />
                </div>

                <div className="task__container">
                    <TodoCounter />
                    <TodoSearch />

                            <TodoList>
                            {searchedTodos.map( todo => (
                                <TodoItem 
                                key={todo.text} 
                                text={todo.text}
                                completed={todo.completed}
                                onComplete= {()=>toggleCompleteTodo(todo.text)}
                                deleteTodo= {()=>deleteTodo(todo.text)}
                                />
                                ))}
                            </TodoList>
                        
                        {!!openModal && (
                            <Modal>
                                <TodoFormModal />
                            </Modal>
                        )}

                    <CreateTodoButton 
                    setOpenModal={setOpenModal}
                    />
                </div>
            </div>
        </React.Fragment>
    );
}

export default AppUi;