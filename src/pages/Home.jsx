import React, { useState } from 'react'

export default function Home() {

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  return (
    <div className='container'>
       <section className='todosContainer'>
       <form onSubmit={submitHandler}>
        <input 
            type='text' 
            placeholder='Title'
            value={title} 
            onChange={(e)=> setTitle(e.target.value)}
            required
            />
            <input 
            type='text'
            placeholder='Description'
            value={description}
            onChange={(e)=> setDescription(e.target.value)}
            required
            />
            <button type='submit'>
              Add Task
            </button>
        </form>
       </section>
    </div>
  )
}
