import React from 'react'
import { Link } from 'react-router-dom'

const NavLink = () => {
  return (
    <div style={{width:'100%', display:'flex', justifyContent:'space-around'}}>
        <Link to='/' style={{textDecoration:'none'}}><a>Home</a></Link>
        <Link to='/about' style={{textDecoration:'none'}}><a>About</a></Link>
        <Link to='/contact' style={{textDecoration:'none'}}><a>Projects</a></Link>
        
        </div>
  )
}

export default NavLink