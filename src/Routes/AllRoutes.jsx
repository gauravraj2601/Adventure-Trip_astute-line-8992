import React from 'react'
import {Routes, Route} from "react-router-dom"
import Home from '../Pages/Home'
import Signin from '../Pages/Signin'
import Host from '../Pages/Host'
import Login from "../Pages/Login"
import SingleCard from '../Pages/SingleCard'


const AllRoutes = () => {
  return (
    <Routes>
        <Route path='/' element={<Home />} ></Route>
        <Route path='/signin' element={<Signin />} ></Route>
        <Route path='/host' element={<Host />} ></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='singleCard/:id' element={<SingleCard />}></Route>
    </Routes>
  )
}

export default AllRoutes