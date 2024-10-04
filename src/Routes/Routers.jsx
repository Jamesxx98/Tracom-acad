// eslint-disable-next-line no-unused-vars
import React from 'react'
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import LoginForm from '../Components/LoginForm'

function Routers() {
  return (
   <>
   <Router><Routes>
    
    <Route path='/' element={<LoginForm/>}></Route>
    <Route></Route>
    <Route></Route>
    <Route></Route></Routes></Router>
   </>
  )
}

export default Routers