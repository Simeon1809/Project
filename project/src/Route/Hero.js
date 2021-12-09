import React from 'react'
import homeImg from '../images/profile.jpg'

const Hero = () => {

  return (
  <section className='hero' >
    <div className='hero-center'>
      <article className='hero-info'>
      <h1>Welcome to my portfolio page </h1>
                <p>I am passionate about what i do and enjoy every aspect of software development</p>
                <p>if you want someone who will help bring all your thought to reliality using scalable and dynamic design then you have found the right guy </p>
      </article>
      <article className='hero-images'>
        <img src={homeImg} className='phone-img' alt='phone'/>
      </article>
    </div>
  </section>
)}

export default Hero
