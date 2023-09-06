import React from 'react';
// import css from './testimonials.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import fourIR from './heroBg.jpg';
import cyberSecurity from "./images/cyberSecurity.png";
import analytics from "./images/analytics.png";
import digitalMarketing from "./images/digitalMarketing.png";
import AOS from 'aos';
import 'aos/dist/aos.css';
import {useEffect} from "react";

const testimonials = () => {
  useEffect(() => {
    AOS.init();
  }, [])

    return (
        <>
        <div className="testimonials"><div className="header" id='testimonials'>
        
            <div className="header-overlay">
                <h3 className='styleh3 blue'>Testimonials</h3>
                <div class="line bluebg secondcolour"></div>
                {/* <div class="line bluebg"></div> */}
            </div>
        </div>
        {/* <div className="container"> */}
        <Container >
        <Row >
        <CardGroup>
            <Col sm ={12} md = {4}>
                <figure class="snip1157">
                <blockquote>Calvin: You know sometimes when I'm talking, my words can't keep up with my thoughts... I wonder why we think faster than we speak. Hobbes: Probably so we can think twice.
                    <div class="arrow"></div>
                </blockquote>
                <img data-aos="fade-up" data-aos-duration="4000" className='JTstyle' src={digitalMarketing} />
                <div class="author">
                    <h5>Pelican Steve <span> LIttleSnippets.net</span></h5>
                </div>
                </figure>
            </Col>

            <Col sm ={12} md = {4}>

            </Col>

            <Col sm ={12} md = {4}>
            
            </Col>
        </CardGroup>
        </Row>
        </Container>
        {/* </div> */}
        </div></>
    );
}
 
export default testimonials;