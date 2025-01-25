import React, { useState } from 'react'
import { Link } from 'react-router-dom'

function Register() {


    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const submitHandler = (e) => {
        e.preventDefault()
        // add form data to database or API here
        console.log('Form submitted')
    }



  return (
    <div>
        <div className='login'>
      <section>
        <form onSubmit={submitHandler}>
            <input type='text' placeholder='Name'/>
            <input type='text' placeholder='Email' />
            <input type='password' placeholder='Password' />
            <button type='submit'>Register</button>
            <h4>Or</h4>
            <Link to={"/login"}>Sign In</Link>
        </form>
      </section> 
    </div>
    </div>
  )
}

export default Register
