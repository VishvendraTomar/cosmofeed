import React, { useState } from 'react'
import './App.css'
import HomePage from './page/HomePage'
import Login from './page/Login'
import { Route, Router } from 'react-router-dom'
import mainroute from './page/MainRoute'
// import log from "./page/log"
function App() {
    const [currentUser , setCurrentUser] = useState(null)
    const handleLogin = (user) =>{
       setCurrentUser(user)
    }
  return (
    

      //  <div>
      //   {currentUser ? (
      //     <HomePage currentUser = {currentUser}/>
      //   ):(<Login onLogin = {handleLogin}/>
      //   )}
      //  </div>
     <Router>
         <switch>
            <Route path='/' Component={mainroute}/>
         </switch>
     </Router>
  )
}

export default App
