import React from 'react'

import './App.css'
import Login from './components/Login'
import Success from './components/Success'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";


function App() {
  return (
    
     <Router>
  <Switch>
    <Route exact path="/" component={Login} />
    <Route path="/success" component={Success} />
  </Switch>
</Router>
     
  )
  
}

export default App
