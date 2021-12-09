import React from "react";
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";

import Hero from './Hero';
import About from './About';
import Error from './Error';
import Contact from './Contact';
import Navbar from './Navbar';
import Footer from './Footer';
import Skills from './Skills';
import Projects from './Projects';

const RouterSetup = ()=> {
    return (
       <Router>
          <Link> 
             <Navbar /> 
          </Link>
           <Switch>
           <Route path="/Skills">
              <Skills />
           </Route>
            <Route  path="/About">
              <About />
           </Route>
          <Route path="/Contact">
              <Contact />
          </Route>
          <Route exact path="/">
              <Hero />
          </Route>
          <Route path="/Projects">
              <Projects />
          </Route>
          <Route path="*">
              <Error />
          </Route>
          </Switch>  
          <Footer />
      </Router>
    )
} 

export default RouterSetup;