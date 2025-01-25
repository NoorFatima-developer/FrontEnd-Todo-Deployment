import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import "./styles/app.scss"
import App from './App.jsx'


// yahan pr mai backend ka url save kr ri o variable mai ta k hr jagah mai jahan pr b use kro mjy pura url na 
// dena pry bs mjy variable ka nam e dena pry...

export const server = "https://backend-todo-deploy.vercel.app/api/v1";

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
