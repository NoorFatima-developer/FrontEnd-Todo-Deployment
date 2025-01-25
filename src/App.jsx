import { Route, BrowserRouter as Router, Routes} from "react-router-dom";
import Home from "./pages/Home.jsx"
import Header from "./components/Header.jsx";

function App() {

  return (
    <Router>
      <Header/>
        <Routes>
          <Route path="/" element={<Home/>} />
        </Routes>
    </Router>
  )
}

export default App
