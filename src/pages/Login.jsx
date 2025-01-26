import React from 'react'
import { Link } from 'react-router-dom'

function Login() {


    if(isAuthenticated) return <Navigate to={"/"}/>;

  return (
    <div className='login'>
      <section>
        <form>
            <input type='text' placeholder='Email' />
            <input type='password' placeholder='Password' />
            <button type='submit'>Login</button>
            <h4>Or</h4>
            <Link to={"/register"}>Sign Up</Link>
        </form>
      </section> 
    </div>
  )
}

export default Login
