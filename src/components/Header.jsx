import React, { useContext } from 'react'
import { Link } from 'react-router-dom'

function Header() {

  // import context here:jo meny main.jsx mai banaya hai..

  useContext(Context)

  return (
    <nav className='header'>
        <div>
            <h2>Todo App.</h2>
        </div>
        <article>
            <Link to={"/"}>Home</Link>
            <Link to={"/profile"}>Profile</Link>
            <Link to={"/login"}>Login</Link>
        </article>
    </nav>
  )
}

export default Header
