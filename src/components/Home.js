import React from 'react'
import AhmadPhoto from '../image/AhmadPhoto.JPG'
import PortFolio from '../components/PortFolio.css'

const Home = () => {
  return (
    <div className='ola'>
        <h1 className='h1st'>Hello!</h1>
        <h3 className='h31st'>I'm Ridwan,<br/>a front-end Developer.</h3>
        <img src={AhmadPhoto} className='img1'/>
        <div id='new'>
        <p style={{color:'white'}}>E-mail: ahmadmut24@gmail.com</p>
        <p style={{color:'white'}}>Github: Ahmad4everyone</p>
        <p style={{color:'white'}}>Phone: +2348133275988</p>
        </div>
        
        

    </div>
  )
}

export default Home