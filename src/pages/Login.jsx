import React, { useContext } from 'react'
import { Link, Navigate } from 'react-router-dom'

function Login() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const {isAuthenticated, setisAuthenticated} = useContext(Context);



    if(isAuthenticated) return <Navigate to={"/"}/>;

  return (
    <div className='login'>
      <section>
        <form onSubmit={SubmitHandler}>
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
            <button type='submit'>Login</button>
            <h4>Or</h4>
            <Link to={"/register"}>Sign Up</Link>
        </form>
      </section> 
    </div>
  )
}

export default Login
