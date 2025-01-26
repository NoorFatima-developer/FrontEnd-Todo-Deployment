import React, { useContext } from 'react'
import { Link, Navigate } from 'react-router-dom'

function Login() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const {isAuthenticated, setisAuthenticated} = useContext(Context);

    const submitHandler = async(e) => {
        e.preventDefault()
        // add form data to database or API here
        console.log(name, email, password)
        // mai front end mai backend sy data fetch krny klye fetch b use krskti thie or axios b , so meny axios use kea hai...

       try {
        const {data} = await axios.post(`${server}/users/login`, {
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
        setisAuthenticated(false);

       } catch (error) {
        toast.error(error.response?.data?.message || "Some error")
        console.log(error);
        setisAuthenticated(true);
    }
};

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
