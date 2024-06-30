import React from 'react'
import PortFolio from '../components/PortFolio.css'
import Boostrap from '../image/Boostrap.JPG'
import Cascade from '../image/Cascade.JPG'
import Mark from '../image/Mark.JPG'
import Jvscpt from '../image/Jvscpt.JPG'
import RctImg from '../image/RctImg.JPG'
import Fgma from '../image/Fgma.JPG'


const AboutUs = () => {
  return (
    <div className='div2'>
     <h3 className='str'>
    Hello! I'm Ridwan, a driven and enthusiastic rontend developer with a passion for creating innovative solutions.I recently completed my internship at the <b>Oyo State Government's Management Information Centre in Ibadan,Nigeria.</b>Where i gained valuable experiences. <br></br>This internship not only deepened my technical skills but also instilled in me the importance of effective communication,adaptability, and problem-solving in a fast-paced enviroment.
     </h3>
     <hr></hr>
    
     <h1 className='h32nd'>Skills!</h1>
    <ul>
      <li><h1>HTML</h1></li>
      <li><h1>CSS</h1></li>
      <li><h1>BOOSTRAP</h1></li>
      <li><h1>JAVASCRIPT</h1></li>
      <li><h1>REACT</h1></li>
    </ul>
     {/* <section className='sec'>
      <img src={Mark} className='ded'/>
      <img src={Boostrap} className='dee'/>
      <img src={Cascade} className='ddd'/>
      <img src={Jvscpt} className='jvt'/>
      <img src={RctImg} className='rct'/>
      <img src={Fgma} className='fgm'/>

     </section> */}

    </div>
  )
}

export default AboutUs