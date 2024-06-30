import React from 'react'
import AhmadPhoto from '../image/AhmadPhoto.JPG'
import PortFolio from '../components/PortFolio.css'
import CV from '../image/CV.jpg'

const Home = () => {
  return (
    <div className='ola'>
        <h1 className='h1st'>Hello!</h1>
        <h3 className='h31st'>I'm Ridwan,<br/>a front-end Developer.</h3>
        <img src={AhmadPhoto} className='img1'/>
        <div id='new'>
        <a style={{color:'white'}} href='mailto:ahmadmut24@gmail.com'>Email</a><br></br>
        <a style={{color:'white'}} href='https://wa.me/+2348133275988'>Whatsapp</a><br></br>
        <a style={{color:'white'}} href='https://github.com/Ahmad4everyone?tab=repositories&q=&type=&language=&sort='>Github</a>
        </div>
        
       

    </div>
  )
}

export default Home