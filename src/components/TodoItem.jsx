import React from 'react'

const TodoItem = ({title, description, isCompleted, updateHandler, deleteHandler}) => {
  return (
    <div className='todo'>
      <div>
        <h4>{title}</h4>
        <p>{description}</p>
      </div>

      <div>
        <input onClick={updateHandler} type='checkbox' checked={isCompleted} />
        <button onClick={deleteHandler} className='btn'>Delete</button>
      </div>
    </div>
  )
}

export default TodoItem
