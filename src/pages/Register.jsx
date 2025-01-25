import React from 'react'
import { Link } from 'react-router-dom'

function Register() {
  return (
    <div>
        <div className='register'>
      <section>
        <form>
            <input type='text' placeholder='Email' />
            <input type='password' placeholder='Password' />
            <button type='submit'>Register</button>
            <h4>Or</h4>
            <Link to={"/register"}>Sign Up</Link>
        </form>
      </section> 
    </div>
    </div>
  )
}

export default Register
