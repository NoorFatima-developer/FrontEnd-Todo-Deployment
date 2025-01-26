import { Route, BrowserRouter as Router, Routes} from "react-router-dom";
import Home from "./pages/Home.jsx"
import Header from "./components/Header.jsx";
import Profile from "./pages/Profile.jsx";
import Login from "./pages/Login.jsx";
import Register from "./pages/Register.jsx";
import { Toaster } from "react-hot-toast";
import { useEffect } from "react";
import axios from "axios";
import { server } from "./main.jsx";

function App() {

  useEffect(() => {
    // Get my id:
    axios.get(`${server}/users/me`, {
      withCredentials: true,
    }).then(res=>{
      res.data;
    })
  }, [])

  return (
    <Router>
      <Header/>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/profile" element={<Profile/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/register" element={<Register/>} />
        </Routes>
        <Toaster/>
    </Router>
  )
}

export default App
