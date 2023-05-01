import React from 'react'

const DeleteButton = ({ index, deleteTask}) => {
  const handleDeleteTask = () => {
    deleteTask(index)
  }

  return (
    <button onClick={handleDeleteTask}>
      <span>❌</span>
    </button>
  )
}

export default DeleteButton
