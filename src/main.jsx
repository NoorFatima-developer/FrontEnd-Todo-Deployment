import { createContext, StrictMode, useState } from 'react'
import { createRoot } from 'react-dom/client'
import "./styles/app.scss"
import App from './App.jsx'


// yahan pr mai backend ka url save kr ri o variable mai ta k hr jagah mai jahan pr b use kro mjy pura url na 
// dena pry bs mjy variable ka nam e dena pry...

export const server = "https://backend-todo-deploy.vercel.app/api/v1";
export const Context = createContext({isAuthenticated: false});

const AppWrapper = () => {

  const [isAuthenticated, setisAuthenticated] = useState(false);
  const [loading, setloading] = useState(false);
  const [user, setUser] = useState({});

  return (
    <Context.Provider 
    // ab aghr meny authenticated ki value change krwani hai tu mai krwaskti hon by using setisAuthenticated:
    value={{
      isAuthenticated, 
      setisAuthenticated,
      loading, 
      setloading, 
      user, 
      setUser,
      }}
      >
      <App />
    </Context.Provider>
  )
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* aghr maidirectly contentProvider ko yahan dedeti or osk andr value tu update ni krskti thie ku k update tu useState sy honi this isluealeda sy oper fun banaya hai mai.. */}
    <AppWrapper/>
  </StrictMode>,
)
