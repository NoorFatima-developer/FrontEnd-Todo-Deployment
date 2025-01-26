import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import axios from "axios";
import { Context, server } from '../main';
import toast from "react-hot-toast"

function Register() {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const {isAuthenticated, setisAuthenticated} = useContext(Context);

    const submitHandler = async(e) => {
        e.preventDefault()
        // add form data to database or API here
        console.log(name, email, password)
        // mai front end mai backend sy data fetch krny klye fetch b use krskti thie or axios b , so meny axios use kea hai...

       try {
        const {data} = await axios.post(`${server}/users/new`, {
            name,
            email,
            password
        },{
            headers: {
                'Content-Type': 'application/json'
            },
            // ye must true krna hai otherwise cookie work nahi krygi...
            withCredentials: true
        })

        // and must add toast in app.jsx..
        // toast.success("Nice hogya...")
        toast.success(data.message)

       } catch (error) {
        toast.error(error.response?.data?.message || "Some error")
        console.log(error);
        
    }
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