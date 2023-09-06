import React from 'react';
import css from './Project.css';
import "bootstrap/dist/css/bootstrap.min.css";
import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import AOS from 'aos';
import 'aos/dist/aos.css';



const Contact = () => {
  const form = useRef();
  const [smShow, setSmShow] = useState(false);
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_kt9dlhi', 'template_ytrou8k', form.current, 'ETfcMsqmzaetUZLdc')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset()
      setSmShow(true)
  };
  

    return (
      <div className="contact" id='contact'>
        <div  className="header">
            <div className="header-overlay">
                <h3 className='styleh3'>Contact</h3>
                <div class="line bluebg secondcolour"></div>
            </div>
        </div>
        {/* <div className ="contact-row container"> */}
      <Container>
      <Row>
      <Col sm ={12} md = {6} className='centerObjects ' >
  <div className ="contact-left-column">
    <div data-aos="fade-up" className ="contact-card">
      <div className ="contact-card-header white">Location</div>
      <div className ="contact-card-body">
        <p className ="card-text black">123 Main St<br/>Anytown, USA</p>
      </div>
    </div>
    <div data-aos="fade-up" className ="contact-card">
      <div className ="contact-card-header white">Contact Details</div>
      <div className ="contact-card-body">
        <p className ="card-text black">Phone: 555-1234<br/>Fax: 555-5678</p>
      </div>
    </div>
    <div data-aos="fade-up" className ="contact-card">
      <div className ="contact-card-header white">Email</div>
      <div className ="contact-card-body">
        <p className ="card-text black">contact@example.com</p>
      </div>
    </div>
  </div>
  </Col>

  <Col sm = {12} md = {6}>
  <div className ="contact-right-column">
    <div className ="contact-card">
      {/* <d iv class="contact-card-header">Contact Us</div> */}
      <div className ="contact-card-body">
        <form ref = {form} onSubmit={sendEmail}>
          <div data-aos="fade-up" className ="contact-form-group">
            <label for="inputName" className='black'>Full Name</label>
            <input type="text" className ="contact-form-control" id="inputName" name='name' placeholder="Enter your name" required/>
          </div>
          <div data-aos="fade-up" className ="contact-form-group">
            <label for="inputPhone" className='black'>Phone Number</label>
            <input type="tel" className ="contact-form-control" id="inputPhone" name='number' placeholder="Enter your phone number" required/>
          </div>
          <div data-aos="fade-up" className ="contact-form-group">
            <label for="inputEmail" className='black'>Email address</label>
            <input type="email" className ="contact-form-control" id="inputEmail" name='email' placeholder="Enter your email address" required/>
          </div>
          <div data-aos="fade-up" className ="contact-form-group">
            <label for="inputMessage" className='black'>Message</label>
            <textarea className ="contact-form-control" id="inputMessage" rows="5" name='message' placeholder="Enter your message" required></textarea>
          </div>
          <Button /*onClick={() => setSmShow(true)}*/ type="submit" className ="contact-btn me-2">
            Submit
          </Button>

          <Modal
          size="sm"
          show={smShow}
          onHide={() => setSmShow(false)}
          aria-labelledby="example-modal-sizes-title-sm"
         >
        <Modal.Header closeButton>
          <Modal.Title id="example-modal-sizes-title-sm">
            Successful
          </Modal.Title>
          </Modal.Header>
          <Modal.Body>Your email has been sent, Thank you for reaching out to me.</Modal.Body>
        </Modal>
        </form>
      </div>
    </div>
  </div> 
  </Col>
  </Row>
  </Container>
</div>
// </div>
    );
}
 
export default Contact;