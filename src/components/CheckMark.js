import React from 'react';

function CheckMark({ onClick }) {
  return (
    <button onClick={onClick}>Completed</button>
  )
}

export default CheckMark