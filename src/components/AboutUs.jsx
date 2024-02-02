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
     <h2 className='str'>
      I am interested in IT and everything around it, I am courteous and enthusistic and keenly ready to gain more experience in the field, and for this reason, i am looking for a company willing to offer me a placement amongst their developers, in return, i would offer my full commitment, and be a pleasant and a friendly addition to the team. I am therefore looking for a job or an internship as a frontend developer in your reputable organisation.
     </h2>
     <h1 className='h32nd'>Skills!</h1>
     <section className='sec'>
      <img src={Mark} className='ded'/>
      <img src={Boostrap} className='dee'/>
      <img src={Cascade} className='ddd'/>
      <img src={Jvscpt} className='jvt'/>
      <img src={RctImg} className='rct'/>
      <img src={Fgma} className='fgm'/>

     </section>

    </div>
  )
}

export default AboutUs