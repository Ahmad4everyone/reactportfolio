import React from 'react'
import PortFolio from '../components/PortFolio.css'
import octv from '../image/octv.jpg'
import tiktak from '../image/tiktak.png'
import quizApp from '../image/quizApp.png'
import country from '../image/countryFlag.jpg'
import grade from '../image/studentGrade.png'



const Contact = () => {
  return (
    <div >
         
      <div className='duni'>
        <p style={{color:'blue', fontWeight:'bold'}}>Click the name below the images!</p>
      <img src={octv} style={{width:'150px'}}/>
      <a href='https://octave-nine.vercel.app/'>Octave</a>
     <img src={tiktak} style={{width:'150px'}}/>
      <a href='https://tik-tak-toe-game-ahmad.vercel.app/'>Game</a>
      <img src={quizApp} style={{width:'150px'}}/>
      <a href='https://quiz-app-nine-livid.vercel.app/'>Quiz</a>
      <img src={country} style={{width:'150px'}}/>
      <a href='https://api4countries.vercel.app/'>CountryFlags</a>
      <img src={grade} style={{width:'150px'}}/>
      <a href='https://grading-system-six.vercel.app/'>StudentGrade</a>


      </div>

        </div>
  )
}

export default Contact