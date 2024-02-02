import React from 'react'
import AhmadPhoto from '../image/AhmadPhoto.JPG'
import PortFolio from '../components/PortFolio.css'


const Home = () => {
  return (
    <div className='ola'>
        <h1 className='h1st'>Hello!</h1>
        <h3 className='h31st'>I'm Ridwan,<br/>a front-end Developer.</h3>
        <img src={AhmadPhoto} className='img1'/>
        
        

    </div>
  )
}

export default Home