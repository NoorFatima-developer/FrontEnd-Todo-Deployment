import React from 'react'

// pass by using props...
const TodoItem = ({title, description, isCompleted, updateHandler, deleteHandler, id}) => {
  return (
    <div className='todo'>
      <div>
        <h4>{title}</h4>
        <p>{description}</p>
      </div>

      <div>
{/* aghr mai yahan function bana deti tu yahan pr mai direct function hi pass krna tha id deny ki zrort ni thie..lkn
meny ab function e home.jsx mai dea hai tu isleye yahan as a props pass horha hai tu m phr ab id dogi.. */}
        <input onClick={()=>updateHandler(id)} type='checkbox' checked={isCompleted} />
        <button onClick={()=>deleteHandler(id)} className='btn'>Delete</button>
      </div>
    </div>
  )
}

export default TodoItem
