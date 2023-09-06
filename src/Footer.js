import React from 'react';
import css from './Project.css';
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import {
    Box,
    Container,
    Row,
    Column,
    FooterLink,
    Heading,
  } from "./FooterStyles";
  import logo from "./Logo.png"
  import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faTwitter, faInstagram, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';


export default function Footer() {

  const [isNavExpanded, setIsNavExpanded] = useState(false);

  const handleLinkClick = () => {
    setIsNavExpanded(false);
  };

  return (
    <div>
      <Box className='cbrQsx'>
      <Container >
        <Row>
        <Column>
        <FooterLink href="#"><a href="/" className="brand-name">
        <img src={logo} width={120} height={120} alt="logo" />
      </a></FooterLink>
          </Column>
          <Column>
            <Heading>SERVICES</Heading>
            <FooterLink  href="#digitalMarketing" onClick={handleLinkClick}>
              Digital Marketing
            </FooterLink>
            <FooterLink href="#analytics" onClick={handleLinkClick}>
              Analytics
            </FooterLink>
            <FooterLink href="#cyberSecurity" onClick={handleLinkClick}>
              Cyber Security
            </FooterLink>
            <FooterLink href="#about" onClick={handleLinkClick}>
              Speaker
            </FooterLink>
          </Column>
          <Column>
            <Heading>REACH ME</Heading>
            <FooterLink href="#">+263785470033</FooterLink>
            <FooterLink href="#">77 Quorn Avenue, Mt pleasant, Harare </FooterLink>
            <FooterLink href="#">tanyanyiwatinashe7<br />@sagehilltechnologies.com</FooterLink>
          </Column>
          <Column>
            <Heading>SOCIAL MEDIA</Heading>
            <div className="keepStraight ">
              <a href="https://www.linkedin.com/company/18669517/admin/feed/posts/" target="_blank"><FontAwesomeIcon icon={faLinkedinIn} className='whiteIcons spaceIcon white' style={{ float: 'left' }}/></a>
              <a href="https://www.facebook.com/search/top?q=sagehill%20business%20solutions" target="_blank"><FontAwesomeIcon icon={faFacebook} className='whiteIcons spaceIcon white' style={{ float: 'left' }} /></a>
              <a href="https://twitter.com/john_tseriwa?s=20" target="_blank"><FontAwesomeIcon icon={faTwitter} className='whiteIcons spaceIcon white' style={{ float: 'left' }}/></a>
              <a href="https://www.instagram.com/sagehill_technologies/" target="_blank"><FontAwesomeIcon icon={faInstagram} className='whiteIcons spaceIcon white' style={{ float: 'left' }}/></a>
          </div>
          </Column>
        </Row><br />
            <div class="liney whitebg "></div>
            <span className='white copypad'>© 2023 John Tseriwa. All rights reserved.</span>
      </Container>
    </Box>
    </div>
  )
}
