import React from 'react'

const TodoItem = ({title, description}) => {
  return (
    <div className='todo'>
      
      <div>
        <h4>{title}</h4>
        <p>{description}</p>
      </div>
      <div></div>
    </div>
  )
}

export default TodoItem
