import React, {useEffect, useRef, useState} from 'react'
import { social } from './data'
import {Link} from 'react-router-dom'
import {FaBars} from 'react-icons/fa'

 const Navbar = () => {
  const [showLinks, setShowLinks] = useState(false)
  const   linksRef = useRef (null)
  const linksContainerRef = useRef (null)

  useEffect(() => {
   const linksHeight = linksRef.current.getBoundingClientRect().height
   if (showLinks){
     linksContainerRef.current.style.height = `${linksHeight}px`
   }
   else{
     linksContainerRef.current.style.height = '0px'
   }
  }, [showLinks])
      return(
        <nav>
           <div className="nav-center">
              <div className="nav-header"> 
              <h3 className='koolkay'> Koolkay <span className='consult'>consult</span></h3>
              <button className="nav-toggle"
               onClick={() => setShowLinks(!showLinks)
              }><FaBars />
              </button>
              </div>
                <div className='links-container' ref={linksContainerRef} >
                  <ul className="links" ref={linksRef}>
                  <li>
                    <Link to="/">Home</Link>
                  </li>
                  <li>
                    <Link to="/About">About</Link>
                  </li>
                  <li>
                    <Link to="/Skills">Skills</Link>
                  </li>
                  <li>
                    <Link to="/Contact">Contact</Link>
                  </li>
                  <li>
                    <Link to="/Projects">Projects</Link>
                  </li>
                  </ul>
                  </div>
                
                <ul className="social-icons">
                  {social.map((media) => {
                    const {id,url, icon} = media;
                    return(
                      <li key={id}>
                      <a href={url} />
                      </li>
                    )
                  })}
                </ul>
          </div>
        
        </nav>
      )    
    }
 
export default Navbar;