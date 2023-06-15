import React from 'react'
import {Routes, Route} from "react-router-dom"
import Home from '../Pages/Home'
import Signin from '../Pages/Signin'
import Host from '../Pages/Host'


const AllRoutes = () => {
  return (
    <Routes>
        <Route path='/' element={<Home />} ></Route>
        <Route path='/signin' element={<Signin />} ></Route>
        <Route path='/host' element={<Host />} ></Route>
    </Routes>
  )
}

export default AllRoutes