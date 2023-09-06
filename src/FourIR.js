import React from 'react';
import css from './Project.css';
import "bootstrap/dist/css/bootstrap.min.css";
import fourIR from './heroBg.jpg';
import JTone from './JTOne.jpg';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import AOS from 'aos';
import 'aos/dist/aos.css';
import {useEffect} from "react";


const FourIR = () => {

    useEffect(() => {
        AOS.init({duration: 2000});
      }, [])
    
    return (
       <div className="FourIR" id='fourIR'>
        <div className="header">
            <div className="header-overlay">
                <h3 className='styleh3'>4IR</h3>
                <div class="line bluebg secondcolour"></div>
            </div>
        </div>

            <Container className='container'>
                <Row className='row'>
                    <Col className='col-md-6 right'>
                     <img data-aos="fade-right" src= {JTone} alt="Big Image"/>
                    </Col>

                    <Col data-aos="fade-left" xs = {12} className='col-md-6 left'>
                        <h2 className='blue'>Innovation and Growth</h2>
                        {/* <div class="line bluebg" style={{width: '18%'}}></div> */}
                        {/* <br /> */}
                        <p className=''>
                                John Tseriwa is a digital marketer, MC, and public speaker who is passionate about the transformative power of Fourth Industrial Revolution (4IR) technologies. He helps businesses and individuals leverage the potential of 4IR technologies to drive innovation, efficiency, and growth, and shares his knowledge and insights through his work as a digital marketer and public speaker. John's deep understanding of the potential of 4IR technologies makes him a leading voice in the world of 4IR, and his passion, expertise, and dedication are helping to shape the future of business and society.
                        </p>
                    </Col>
                </Row>
            </Container>
       </div>
       
    );
}
 
export default FourIR;