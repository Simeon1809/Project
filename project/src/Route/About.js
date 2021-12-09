import React, {} from 'react';
import '../index.css';
import about from './about.jpeg'

const About = () =>
{
     return (
        <section className='hero'>
            <div className="about">
            <div>
         <img src={about} alt="about image"/>
            </div>
            <div>
                <h2>HELLO GUYS</h2>
                <p>My name is simeon, am a full-stack software developer based in Lagos, Nigeria,i have a Strong background in design and integration with intuitive problem-solving skills.I have experience in the energy sector having worked in the poweer sector for over 5 years. Proficient in JAVASCRIPT, C#, and SQL. Passionate about implementing and launching new projects. Ability to translate business requirements into technical solutions. Looking to start the career as an entry-level software engineer with a reputed firm driven by technology.</p>
            </div>
        </div>

        </section>
    )
}

export default About;