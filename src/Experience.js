import React from 'react';
import css from './Project.css';
import "bootstrap/dist/css/bootstrap.min.css";
import cyberSecurity from './cyberSecurity.png';
import analytics from './analytics.jpg';
import digitalMarketing from './digitalMarketing.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faLock } from '@fortawesome/free-solid-svg-icons';
import { faChartSimple } from '@fortawesome/free-solid-svg-icons';
import { faHashtag } from '@fortawesome/free-solid-svg-icons';
import aboutJt from './aboutJT.jpg';
import Card from 'react-bootstrap/Card';
import AOS from 'aos';
import 'aos/dist/aos.css';
import {useEffect} from "react";

const Experience = () => {
    useEffect(() => {
        AOS.init();
      }, [])
    

    return (
        <div className="Experience element " id='experience'>
            <div className="header-overlay">
            <h3 className='styleh3'>My Experience</h3>
            </div>
            <div className="containerhr">
                         <div class="line bluebg secondcolour"></div>
                    </div>
                <div className="container" >
                    {/* <p className='blue'>Experience</p> */}
            
                    <div className="">
                    {/* <p className='black'>As a technology professional, I can help you stay secure online, gain insights from data, and create effective digital marketing strategies. Let me share my knowledge and experience with you</p> */}
                   
                    
                    </div>
                        
                <div class="services">   
                    <div class="container">
                        <div class="row">
                            <Card data-aos="fade-up" className='cyberSecurity'>
                                <Card.Header className='txtleft'><FontAwesomeIcon icon={faLock} className='Icons spaceIcon i'/></Card.Header>
                                <Card.Body>
                                    <blockquote className="blockquote mb-0">
                                    <p>
                                        {' '}
                                        John is a skilled cybersecurity professional with a background in protecting against digital threats. With experience in identifying vulnerabilities, implementing security measures, and responding to incidents, John is dedicated to keeping systems and data secure.{' '}
                                    </p><br />
                                    <footer className="blockquote-footer ">
                                        Cyber Security<cite title="Source Title"></cite>
                                    </footer>
                                    </blockquote>
                                </Card.Body>
                            </Card>
                            <Card data-aos="fade-up" className='analytics'>
                                <Card.Header className='txtleft'><FontAwesomeIcon icon={faChartSimple} className='Icons spaceIcon i'/></Card.Header>
                                <Card.Body>
                                    <blockquote className="blockquote mb-0">
                                    <p>
                                        {' '}
                                        John is a skilled data analyst with experience in statistical analysis, data visualization, and predictive modeling. He turns complex data sets into actionable insights, identifying trends, developing KPIs, and optimizing processes to drive informed business decisions and help clients achieve their goals.{' '}
                                    </p><br />
                                    <footer className="blockquote-footer">
                                        Data Analytics<cite title="Source Title"></cite>
                                    </footer>
                                    </blockquote>
                                </Card.Body>
                            </Card>
                            <Card data-aos="fade-up" className='digitalMarketing'>
                                <Card.Header className='txtleft'><FontAwesomeIcon icon={faHashtag} className='Icons spaceIcon i'/></Card.Header>
                                <Card.Body>
                                    <blockquote className="blockquote mb-0">
                                    <p>
                                        {' '}
                                        John is a talented digital marketer with expertise in SEO, social media, email marketing, and more. Committed to delivering results, he crafts compelling content, optimizes campaigns, and analyzes data to refine strategies and drive growth.{' '}
                                    </p><br />
                                    <footer className="blockquote-footer">
                                        Digital Marketing<cite title="Source Title"></cite>
                                    </footer>
                                    </blockquote>
                                </Card.Body>
                            </Card>
                        </div>
                    </div>
                    </div>
                </div>
        </div>
    );
}
 
export default Experience;