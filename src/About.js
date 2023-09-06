import React from 'react';
import css from './Project.css';
import "bootstrap/dist/css/bootstrap.min.css";
// import testi1 from './heroBg.jpg';
import aboutJt from './aboutJT.jpg';
import AOS from 'aos';
import 'aos/dist/aos.css';
// import {useEffect} from "react";
import Button from 'react-bootstrap/Button';
import { useEffect, useState } from 'react';

const About = () => {
  const [isNavExpanded, setIsNavExpanded] = useState(false);
  const handleLinkClick = () => {
    setIsNavExpanded(false);
  };

  useEffect(() => {
    AOS.init();
  }, [])

    return (
      <div className="testi" id='about'>
         <div className="header">
            <div className="header-overlay">
                <h3 className='styleh3'>About</h3>
                <div class="line bluebg secondcolour"></div>
                {/* <div class="line bluebg"></div> */}
            </div>
        </div>
        <div class="about">
  <div class="container">
    <div class="row">
      <div class="col-md-6 right">
        <img data-aos="fade-right" src={aboutJt} alt="John Tseriwa"/>
      </div>
      <br />
      <div data-aos="fade-left" class="col-md-6 left" id='speaker'>
       <h3 className='black jtpad '>John Tseriwa</h3>
       {/* <div class="line bluebg" style={{width: '18%'}}></div> */}
        <p className='black jtpad'>John Tseriwa is a dynamic and engaging presenter who specializes in digital marketing, cybersecurity, and analytics and data science. With years of experience in the industry, John is able to distill complex concepts into clear and actionable insights, making him a sought-after speaker at conferences, industry events, and corporate gatherings.</p>
        {/* <button className=' button pad'><div className='white'>Contact</div></button> */}
        <Button type="submit" onClick={handleLinkClick} className =" button  ">
           <a href="#contact" className='white text'>Contact</a>
        </Button>
      </div>
    </div>
  </div>
</div>
</div>
    );
}
 
export default About;