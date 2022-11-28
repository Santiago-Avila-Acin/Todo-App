import React from 'react';
import AppUi from './AppUi';
import {TodoProvider} from "../hooks/TodoContext"

// const defaultTodos = [
//   { text: "Cortar cebolla", completed: true},
//   { text: "Tomar curso introducción a react", completed: false},
//   { text: "Llorar con la llorona", completed: false},
// ]

function App() {


  return (
    <TodoProvider>
      <AppUi />
    </TodoProvider>
  );
}

export default App;
