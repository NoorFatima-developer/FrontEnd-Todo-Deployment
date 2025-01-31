import { Navigate, Route, BrowserRouter as Router, Routes} from "react-router-dom";
import Home from "./pages/Home.jsx"
import Header from "./components/Header.jsx";
import Profile from "./pages/Profile.jsx";
import Login from "./pages/Login.jsx";
import Register from "./pages/Register.jsx";
import { Toaster } from "react-hot-toast";
import { useContext, useEffect } from "react";
import axios from "axios";
import { Context, server } from "./main.jsx";

function App() {

  const { setUser, setisAuthenticated, setloading} = useContext(Context);

  useEffect(() => {
    setloading(true);
    // Get my id:
    axios.get(`${server}/users/me`, {
      withCredentials: true,
    }).then(res=>{
      console.log(res.data.user);

      // and yahan pr jo user ki information hai osko hum save krny klye createcontext kea hai oska b main.jsx mai:
      setUser(res.data.user);
      setisAuthenticated(true);
      setloading(false);
  })
  .catch((error) =>{
    // dono same hain jesy mrzi mai empty deskti hon:
    // setUser(null);
    setUser({});
    setisAuthenticated(false);
    setloading(false);
  });
  }, [])

  return (
    <Router>
      <Header/>
        <Routes>
        <Route path="/" element={<Navigate to="/login" />}/>
          <Route path="/home" element={<Home/>} />
          <Route path="/profile" element={<Profile/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/register" element={<Register/>} />
        </Routes>
        <Toaster/>
    </Router>
  )
}

export default App
