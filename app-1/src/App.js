// Create an application that displays a list of todos and an interface to add a new todo. 
// You will need a few components: App.js, List.js, Todo.js, and AddTodo.js. 
// List.js will be responsible for rendering a mapped list of todos which will be passed as props from App.js. 
// AddTodo.js will be responsible for rendering the necessary input and button to make this interface work.

import React, { useState } from 'react';
import './App.css';
import List from './components/List';
import AddTodo from './components/AddTodo';


function App() {
  const [todos, setTodos ] = useState([]);

  const addTodo = (task) => {
    const newTodos = [...todos, task];
    setTodos(newTodos);
  }
  
  return (
    <div className="App">
      <AddTodo addTodo={addTodo} />
      <List taskList={todos} />
    </div>
  );
}

export default App;
