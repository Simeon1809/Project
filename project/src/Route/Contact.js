import React from "react";
import {FaEnvelope, FaGithub, FaLinkedin,FaPhone} from 'react-icons/fa'

function Contact(){
    return (
     <section className='hero'>
      <div className="contact">
                <h2>Contact Me...</h2>

            
           <div class="contact_list">
                  <hr />
                  <hr />
               <div class="contact_email">
                   <h3 class="text-secondary">< FaEnvelope/>   simeondigital@gmail.com</h3>
                </div>
                  <hr />
                  <hr />
               <div class="contact_phone">
                <h3 class="text-secondary"><FaPhone />  +2349012471558</h3>
            </div>
                <hr />
            <hr />
            <div class="contact_media">
      
                <h3 class="text-secondary"><FaGithub /> https://github.com/Simeon1809/Project </h3>
            </div>

            <hr />
            <hr />
            <div class="contact_media">
      
                <h3 class="text-secondary"><FaLinkedin/> https://linkedin.com/in/simeon-ayara-801597b8 </h3>
            </div>
            <hr />
            <hr />
           </div>
           

          <div class="social-icons">
            <a href="#!">
               <i class="fab fa-twitter fa-2x"></i>
            </a>
            <a href="#!">
               <i class="fab fa-facebook fa-2x"></i>
            </a>
            <a href="#!">
               <i class="fab fa-instagram fa-2x"></i>
            </a>
            <a href="#!">
               <i class="fab fa-github fa-2x"></i>
            </a>
            </div>
         </ div>
      </ section>
    )
} 

export default Contact;