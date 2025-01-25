import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import axios from "axios";

function Register() {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const submitHandler = (e) => {
        e.preventDefault()
        // add form data to database or API here
        console.log(name, email, password)
        axios.post("https://backend-todo-deploy.vercel.app/api/v1/users/me")
}

  return (
    <div>
        <div className='login'>
      <section>
        <form onSubmit={submitHandler}>
            <input 
            type='text' 
            placeholder='Name' 
            value={name} 
            onChange={(e)=> setName(e.target.value)}
            required
            />
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


// useState React ka ek hook hai jo functional components ko state manage karne ki facility deta hai.
// State kisi variable ki value hoti hai jo time ke sath change ho sakti hai aur uska effect directly UI par dikhta hai.