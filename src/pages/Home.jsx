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
            <button type='submit' disabled={loading}>Login</button>
            <h4>Or</h4>
            <Link to={"/register"}>Sign Up</Link>
        </form>
       </section>
    </div>
  )
}
