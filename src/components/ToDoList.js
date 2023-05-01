import React from 'react'
import Task from './Task'

const ToDoList = ({ items, deleteTask }) => {
  return (
    <ul>
      {items.map((item, index) => (
        <Task key={index} index={index} item={item} deleteTask={deleteTask} />
      ))}
    </ul>
  )
}

export default ToDoList
