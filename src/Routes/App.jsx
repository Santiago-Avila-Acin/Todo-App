import React from 'react';
import CreateTodoButton from '../Components/CreateTodoButton';
import TodoCounter from '../Components/TodoCounter';
import TodoSearch from '../Components/TodoSearch';
import TodoItem from '../Containers/TodoItem';
import TodoList from '../Components/TodoList';
import CardNewTask from '../Components/CardNewTask';
import Tamagochi from '../Components/Tamagochi';
import '../styles/App.css';

const todos = [
  { text: "Cortar cebolla", completed: false},
  { text: "Tomar curso introducción a react", completed: false},
  { text: "Llorar con la llorona", completed: false},
]


function App() {
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
            {todos.map( todo => (
                  <TodoItem key={todo.text} text={todo.text} />
                  ))}
          </TodoList>

          <CreateTodoButton />
        </div>
      </div>
    </React.Fragment>
  );
}

export default App;
