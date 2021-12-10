import React from "react";
import {FaEnvelope, FaGithub, FaLinkedin,FaPhone} from 'react-icons/fa'

function Contact(){
    return (
     <section className='hero'>
      <div className="contact">
                
            <div className="contact-title">
                 <h2>Contact Me...</h2>
            </div>
            
           <div class="contact-list">

              
                <h3 class="text-secondary"><FaPhone />  +2349012471558</h3>
         
                 <hr />
                 <hr />

                  <hr />
                  <hr />
            
                   <h3 class="text-secondary">< FaEnvelope/>   simeondigital@gmail.com</h3>
               
                  <hr />
                  <hr />
            
      
                <h3 class="text-secondary"><FaGithub /> https://github.com/Simeon1809 </h3>

            <hr />
            <hr />
      
                <h3 class="text-secondary"><FaLinkedin/> https://linkedin.com/in/simeon-ayara-801597b8 </h3>
                
            <hr />
            <hr />
           </div>
           
         </ div>
      </ section>
    )
} 

export default Contact;