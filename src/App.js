import React, { useState } from 'react'
import './App.css'
import Input from './components/Input'
import TodoList from './components/ToDoList'

const App = () => {
  const [tasks, setTasks] = useState([])

  const addTask = (newTask) => {
    setTasks([...tasks, newTask])
  }

  const deleteTask = (index) => {
    setTasks(tasks.filter((task, i) => i !== index))
  }

  return (
    <div className="App">
      <h1>Todo List App</h1>
      <Input addTask={addTask} />
      <TodoList items={tasks} deleteTask={deleteTask} />
    </div>
  )
}

export default App



/*
-------> Use display grid to create a layout with multiple rows and columns
import React from 'react';
import './App.css';

function App() {
  return (
    <div className="grid-container">
      <div className="header">Header</div>
      <div className="sidebar">Sidebar</div>
      <div className="content">Content</div>
      <div className="footer">Footer</div>
    </div>
  );
}

export default App;*/

/*
import React from 'react';
import './App.css';
import MyComponent from './components/MyComponent';

function App() {
  return (
    <MyComponent />
  );
}

export default App;*/




