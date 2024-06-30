import React from 'react'
import PortFolio from '../components/PortFolio.css'
import octave from '../image/octave.JPG'
import tiktak from '../image/tiktak.png'
import quizApp from '../image/quizApp.png'
import country from '../image/countryFlag.jpg'
import upwork from '../image/upwork.PNG'




const Contact = () => {
  return (
    <div >
         
      <div className='duni'>
      <img src={octave} style={{width:'150px'}}/>
      <a href='https://octave-nine.vercel.app/'>Octave</a>
      <img src={upwork} style={{width:'150px'}}/>
      <a href='https://bangbade-upwork.vercel.app/'>Upwork</a>
     <img src={tiktak} style={{width:'150px'}}/>
     <a href='https://tik-tak-toe-game-ahmad.vercel.app/'>Game</a>
      <img src={quizApp} style={{width:'150px'}}/>
      <a href='https://quiz-app-nine-livid.vercel.app/'>Quiz</a>
      <img src={country} style={{width:'150px'}}/>
      <a href='https://api4countries.vercel.app/'>CountryFlags</a>



      </div>

        </div>
  )
}

export default Contact