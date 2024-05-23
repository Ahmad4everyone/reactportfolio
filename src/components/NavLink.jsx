import React from 'react'
import { Link } from 'react-router-dom'

const NavLink = () => {
  return (
    <div style={{width:'100%', display:'flex', justifyContent:'space-around'}}>
        <Link to='/' style={{textDecoration:'none',fontSize:'20px'}}><a>Home</a></Link>
        <Link to='/about' style={{textDecoration:'none', fontSize:'20px'}}><a>About</a></Link>
        <Link to='/contact' style={{textDecoration:'none', fontSize:'20px'}}><a>Projects</a></Link>
        
        </div>
  )
}

export default NavLink