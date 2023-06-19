import React from 'react'
import logo from "../Images/logo.png"
import { Link } from 'react-router-dom'
import "../Components/Navbar.css"


const Navbar = () => {
  const links=[
    {
      path:"/",
      title:"Home"
    },
    {
      path:"/signin",
      title:"Sign in"
    },{
      path:"/",
      title:"Host an Adventure"
    },
  ]
  return (
    <header class="header" id='header'>
      <nav class="nav_container" style={{width:"100%",margin:"auto",display:"flex", alignItems:"center",padding:"20px",backgroundColor:"white",boxShadow: "rgba(17, 12, 46, 0.15) 0px 48px 100px 0px", textDecoration:"none"}}>
      <div style={{width:"100px", marginLeft:"50px"}}>
        <Link to="/">
        <img width="100px" src={logo} alt="Logo" />
        </Link>

      </div>
      <div className='aaa' style={{width:"50%",margin:"auto",marginRight:"50px",display:"flex", alignItems:"center", justifyContent:"space-around", textDecoration:"none", fontWeight:"700", fontSize:"Large"}}>
        {links.map((link)=>(
          <div>

            <Link key={link.path} to={link.path}  >{link.title}</Link>
          </div>
        ))}
      </div>
          
      </nav>

    </header>
  )
}

export default Navbar