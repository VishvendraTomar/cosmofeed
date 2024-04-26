import React from 'react'
import HomePage from './HomePage'
import Login from './Login'
import { Route } from 'react-router-dom'

function mainroute() {
  return (
     <Router>
        <Route path = "/" exact component = {Login}/>
        <Route path = "/homepage" component = {HomePage} />
     </Router>
  )
}

export default mainroute