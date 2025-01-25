import { Route, BrowserRouter as Router, Routes} from "react-router-dom";
import Home from "./pages/Home.jsx"
import Header from "./components/Header.jsx";

function App() {

  return (
    <Router>
      <Header/>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/profile" element={<Profile/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/register" element={<Login/>} />
        </Routes>
    </Router>
  )
}

export default App
