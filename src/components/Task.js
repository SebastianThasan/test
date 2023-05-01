import React, { useState } from 'react'
import DeleteButton from './DeleteButton'
import CheckMark from './CheckMark'

const Task = ({ index, item, deleteTask }) => {
  const [isCompleted, setIsCompleted] = useState(false)

  const crossOut = () => {
    setIsCompleted(!isCompleted)
  }
  
  return (
    <li style={{ textDecoration: isCompleted ? "line-through" : "none" }}>
      {item.task}
      <DeleteButton index={index} deleteTask={deleteTask} />
      <CheckMark onClick={crossOut} />
    </li>
  )
}

export default Task

