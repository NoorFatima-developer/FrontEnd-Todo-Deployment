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
        {/* jb kisi id ko msg k sath print krwana ho tb callback ka use krty hain or iska func home.jsx mai hai */}
        <input onClick={()=>updateHandler(id)} type='checkbox' checked={isCompleted} />
        <button onClick={()=>deleteHandler(id)} className='btn'>Delete</button>
      </div>
    </div>
  )
}

export default TodoItem
