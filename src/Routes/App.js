import React from 'react';
import CreateTodoButton from '../Components/CreateTodoButton';
import TodoCounter from '../Components/TodoCounter';
import TodoSearch from '../Components/TodoSearch';
import TodoItem from '../Containers/TodoItem';
import TodoList from '../Components/TodoList';
// import './App.css';

const todos = [
  { text: "Cortar cebolla", completed: false},
  { text: "Tomar curso introducción a react", completed: false},
  { text: "Llorar con la llorona", completed: false},
]


function App() {
  return (
    <React.Fragment>
      <TodoCounter />
      <TodoSearch />
      <TodoList>
        {todos.map( todo => (
              <TodoItem key={todo.text} text={todo.text} />
              ))}
      </TodoList>
      <CreateTodoButton />
    </React.Fragment>
  );
}

export default App;
