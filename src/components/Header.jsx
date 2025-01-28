import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { Context, server } from '../main';
import toast from 'react-hot-toast';
import axios from 'axios';

function Header() {

  // import context here:jo meny main.jsx mai banaya hai..
  const {isAuthenticated, setisAuthenticated, loading, setloading} = useContext(Context);
  console.log(isAuthenticated);

  // submitHandler logout klyr paste:

  const logoutHandler = async() => {
   setloading(true);
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
    setloading(false);

   } catch (error) {
    toast.error(error.response?.data?.message || "Some error")
    console.log(error);
    setisAuthenticated(true);
    setloading(false);
}
};


  return (
    <nav className='header'>
        <div>
            <h2>Learn Backend</h2>
        </div>
        <article>
            <Link to={"/home"}>Home</Link>
            <Link to={"/profile"}>Profile</Link>
            {isAuthenticated ? <button onClick={logoutHandler} disabled={loading} className='btn'>Logout</button>
             : <Link to={"/login"}>Login</Link>
            }
        </article>
    </nav>
  )
}

export default Header
