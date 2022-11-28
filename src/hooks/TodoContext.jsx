import React from 'react';
import useLocalStorage from './useLocalStorage';

const TodoContext = React.createContext();

const TodoProvider = (props) => {
    const [todos,saveTodos] = useLocalStorage("TODOS_V1", []);
    const [searchValue, setSearchValue] = React.useState("")

    const completedTodos = todos.filter (todo => !!todo.completed).length;
    const totalTodos = todos.length;

    let searchedTodos = [];

    if (!searchValue.length >= 1){
        searchedTodos = todos;
        } else {
        searchedTodos = todos.filter(todo =>{
            const todoText = todo.text.toLowerCase()
            const searchText = searchValue.toLowerCase()
            return todoText.includes(searchText);
        })
    }

    const [openModal, setOpenModal] = React.useState(false)

    const toggleCompleteTodo = (text) => {
        const todoIndex = todos.findIndex(todo => todo.text === text)

        const newTodos = [...todos];
        newTodos[todoIndex].completed = !newTodos[todoIndex].completed;
        saveTodos(newTodos);
    }

    const deleteTodo = (text) => {
        const todoIndex = todos.findIndex(todo => todo.text === text)

        const newTodos = [...todos];
        newTodos.splice(todoIndex, 1)
        saveTodos(newTodos);
    }

    const addTodo = (text) => {
        const newTodos = [...todos];
        newTodos.push({
            completed: false,
            text,
        })
        saveTodos(newTodos);
    }
    
    const [newTodoValue, setNewTodoValue] = React.useState("")
    const onChange = (event) => {
        setNewTodoValue(event.target.value)
    }
    
    const onCancel = () => {
        setOpenModal(false)
    }

    const onSubmit = (event) => {
        event.preventDefault();
        addTodo(newTodoValue)
        setOpenModal(false)
    }

    return (
        <TodoContext.Provider value={{
            totalTodos,
            completedTodos,
            searchValue,
            setSearchValue,
            searchedTodos,
            toggleCompleteTodo,
            deleteTodo,
            addTodo,
            openModal,
            setOpenModal,
            onSubmit,
            onChange,
            onCancel,
            newTodoValue,
        }}>
            {props.children}
        </TodoContext.Provider>
    );
}

export {TodoContext, TodoProvider};
