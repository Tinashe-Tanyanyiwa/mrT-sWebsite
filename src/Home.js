import React from 'react';
import css from './Project.css';
import "bootstrap/dist/css/bootstrap.min.css";
import heroBg from './heroBg.jpg';
import homecover from "./homePageHim.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faTwitter, faInstagram, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
// import Button from 'react-bootstrap/Button';
import JT from './JT.png';
import Button from 'react-bootstrap/Button';
import AOS from 'aos';
import 'aos/dist/aos.css';
// import {useEffect} from "react";

const Home = () => {
  const [isNavExpanded, setIsNavExpanded] = useState(false);
  const handleLinkClick = () => {
    setIsNavExpanded(false);
  };

    var TxtRotate = function(el, toRotate, period) {
        this.toRotate = toRotate;
        this.el = el;
        this.loopNum = 0;
        this.period = parseInt(period, 10) || 2000;
        this.txt = '';
        this.tick();
        this.isDeleting = false;
      };
      
      TxtRotate.prototype.tick = function() {
        var i = this.loopNum % this.toRotate.length;
        var fullTxt = this.toRotate[i];
      
        if (this.isDeleting) {
          this.txt = fullTxt.substring(0, this.txt.length - 1);
        } else {
          this.txt = fullTxt.substring(0, this.txt.length + 1);
        }
      
        this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';
      
        var that = this;
        var delta = 300 - Math.random() * 100;
      
        if (this.isDeleting) { delta /= 2; }
      
        if (!this.isDeleting && this.txt === fullTxt) {
          delta = this.period;
          this.isDeleting = true;
        } else if (this.isDeleting && this.txt === '') {
          this.isDeleting = false;
          this.loopNum++;
          delta = 500;
        }
      
        setTimeout(function() {
          that.tick();
        }, delta);
      };
      
      window.onload = function() {
        var elements = document.getElementsByClassName('txt-rotate');
        for (var i=0; i<elements.length; i++) {
          var toRotate = elements[i].getAttribute('data-rotate');
          var period = elements[i].getAttribute('data-period');
          if (toRotate) {
            new TxtRotate(elements[i], JSON.parse(toRotate), period);
          }
        }
        // INJECT CSS
        var css = document.createElement("style");
        css.type = "text/css";
        css.innerHTML = ".txt-rotate > .wrap { border-right: 0.08em solid #666 }";
        document.body.appendChild(css);
      };
      useEffect(() => {
        AOS.init();
      }, [])
    

    return (
        <div className="home" id='home' > 
                <Container >
                <Row >
                    <Col sm={8} className='landingContainer'>

                        <div className="keepStraight jtpad flexMe">
                            <a href="https://www.linkedin.com/company/18669517/admin/feed/posts/" target="_blank"><FontAwesomeIcon icon={faLinkedinIn} className='whiteIcons spaceIcon' style={{ float: 'left' }}/></a>
                            <a href="https://www.facebook.com/search/top?q=sagehill%20business%20solutions" target="_blank"><FontAwesomeIcon icon={faFacebook} className='whiteIcons spaceIcon' style={{ float: 'left' }} /></a>
                            <a href="https://twitter.com/john_tseriwa?s=20" target="_blank"><FontAwesomeIcon icon={faTwitter} className='whiteIcons spaceIcon' style={{ float: 'left' }}/></a>
                            <a href="https://www.instagram.com/sagehill_technologies/" target="_blank"><FontAwesomeIcon icon={faInstagram} className='whiteIcons spaceIcon' style={{ float: 'left' }}/></a>
                        </div>
                        <h3 className='text-left homeText jtpad text-shadow  flexMe noNextLine' >Meet John Tseriwa</h3>
                        <h3 className='text-left homeText jtpad text-shadow  flexMe noNextLine' >
                            A Leader in &nbsp;
                            <span
                                class="txt-rotate spanCol"
                                data-period="2000"
                                data-rotate='[ " Digital Marketing", " Analytics", " Cyber Security"]'>
                            </span> 
                        </h3>
                        <p className='homepad'>I offer professional speaking services for public events, <br /> technology forums, and MC roles at various occasions.</p>
                        {/* <p className='text-left jtpad text-shadow white justify'>My name is John Tseriwa and I am a professional with extensive <br /> experience in the fields of Data Analysis, Cybersecurity, and Digital Marketing. */}
                        {/* </p> */}
                        {/* <button className='button pad jtpad flexMe left'><div> Contact </div></button> */}
                        {/* <button className=' button pad left'><div className='white'>Contact</div></button> */}
                        <Button   type="submit" onClick={handleLinkClick} className ="homepad button  ">
                          <a href="#contact" className='white text'>Contact</a>
                        </Button>
                        {/* <Button   className = 'pad jtpad' style={{ display: 'flex' }}>Contact</Button> */}
                    </Col>
                    <Col sm={3}>
                      {/* <div className="right-column row " > */}
                      <img data-aos="fade-up" data-aos-duration="4000" className='JTstyle' src={JT} alt="John Tseriwa"/>
                      {/* </div> */}
                    </Col>
                    </Row>
                    </Container>
        </div>
    );
}
 
export default Home;