import React from 'react';
import css from './Project.css';
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

const Services = () => {
  useEffect(() => {
    AOS.init();
  }, [])

    return (
        <>
        <div className="services"><div className="header" id='services'>
        
            <div className="header-overlay">
                <h3 className='styleh3 blue'>Services</h3>
                <div class="line bluebg secondcolour"></div>
                {/* <div class="line bluebg"></div> */}
            </div>
        </div>
        {/* <div className="container"> */}
        <Container >
        <Row >
        <CardGroup>
        <Col sm ={12} md = {4}>
      <Card data-aos="fade-up" id='digitalMarketing'>
        {/* <img className='slider-image' src={C1} alt="Image One" /> */}
        <Card.Img variant="top" src={digitalMarketing} />
        <Card.Body>
          <Card.Title className='light-blue'>Digital Marketing</Card.Title>
          <Card.Text className='text-me'>
           Expand Your Reach with John Tseriwa
            Boost your online presence with John Tseriwa's expert digital marketing services. From captivating social media campaigns to search engine optimization, John helps you attract targeted traffic and convert visitors into loyal customers. Experience remarkable growth and achieve your business goals with John's digital marketing expertise.
          </Card.Text>
        </Card.Body>
        <Card.Footer className='darkbluebg' style={{ }}>
          <small className="text-muted"></small>
        </Card.Footer>
      </Card>
      </Col>

      <Col sm ={12} md = {4}>
      <Card data-aos="fade-up" id='analytics'>
        <Card.Img variant="top" src={analytics} />
        <Card.Body>
          <Card.Title className='light-blue'>Analytics</Card.Title>
          <Card.Text>
            Data-Driven Insights by John Tseriwa
            Unleash the power of data with John Tseriwa's analytics services. Gain valuable insights, track key performance indicators, and make informed decisions for strategic growth. Trust John's expertise to navigate the data landscape and gain a competitive edge.{' '}
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted"></small>
        </Card.Footer>
      </Card>
      </Col>

      <Col sm ={12} md = {4}>
      <Card data-aos="fade-up" id='cyberSecurity'>
        <Card.Img variant="top" src={cyberSecurity} />
        <Card.Body>
          <Card.Title className='light-blue'>Cyber Security</Card.Title>
          <Card.Text>
            Protect Your Digital Assets with John Tseriwa
            Safeguard your sensitive information with John Tseriwa's robust cyber security services. Identify vulnerabilities, implement security measures, and receive ongoing monitoring and support. Rest easy knowing that your digital assets are protected under John's meticulous care.
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted"></small>
        </Card.Footer>
      </Card>
      </Col>
    </CardGroup>
    </Row>
    </Container>
    {/* </div> */}
    </div></>
    );
}
 
export default Services;