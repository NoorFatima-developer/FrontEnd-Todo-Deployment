import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { Context, server } from '../main';
import toast from 'react-hot-toast';
import axios from 'axios';

function Header() {

  // import context here:jo meny main.jsx mai banaya hai..
  const {isAuthenticated, setisAuthenticated} = useContext(Context);
  console.log(isAuthenticated);

  // submitHandler logout klyr paste:

  const logoutHandler = async() => {

   try {
        await axios.get(`${server}/users/logout`, 
        // ye must true krna hai otherwise cookie work nahi krygi...
        {
          withCredentials: true
        }
    )

    // and must add toast in app.jsx..
    // toast.success("Nice hogya...")
    toast.success("Logout Successfully")
    setisAuthenticated(false);

   } catch (error) {
    toast.error(error.response?.data?.message || "Some error")
    console.log(error);
    setisAuthenticated(true);
}
};


  return (
    <nav className='header'>
        <div>
            <h2>Todo App.</h2>
        </div>
        <article>
            <Link to={"/"}>Home</Link>
            <Link to={"/profile"}>Profile</Link>
            {isAuthenticated ? <button onClick={logoutHandler} className='btn'>Logout</button>
             : <Link to={"/login"}>Login</Link>
            }
        </article>
    </nav>
  )
}

export default Header
