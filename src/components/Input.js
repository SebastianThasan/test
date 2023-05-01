import React, { useState } from 'react'

const Input = ({ addTask }) => {
  const [task, setTask] = useState('')

  const handleAddTask = () => {
    const newItem = { task, value: true }
    addTask(newItem)
    setTask('')
  }

  return (
    <div>
      <input
        type="text"
        placeholder="Add task..."
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />
      <button onClick={handleAddTask}>Add Task</button>
    </div>
  )
}

export default Input
