import React from 'react'

export default function Home() {
  return (
    <div className='container'>
       <section className='todosContainer'>
       <form onSubmit={submitHandler}>
        <input 
            type='email' 
            placeholder='Email'
            value={email} 
            onChange={(e)=> setEmail(e.target.value)}
            required
            />
            <input 
            type='password'
            placeholder='Password'
            value={password}
            onChange={(e)=> setPassword(e.target.value)}
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
