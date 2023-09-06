import React from 'react';
import './Project.css';
import "bootstrap/dist/css/bootstrap.min.css";
import  { Component } from "react";
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import C1 from "./images/C1.JPG";
import C2 from "./images/C2.NEF";
import C3 from "./images/C3.JPG";
import C4 from "./images/C4.NEF";
import C5 from "./images/C5.JPG";
import C6 from "./images/C6.JPG";
import C7 from "./images/C7.NEF";
import C8 from "./images/C8.NEF";

export default class Carasoul extends Component {
  render() {
    var settings = {
      dots: true,
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
      pauseOnHover: true
    };
    return (
      <div className='margbot Carasoul'>
        <div className="header" id='services'>
            <div className="header-overlay">
                <h3 className='styleh3'>Corporate wear</h3>
                <div class="line bluebg secondcolour"></div>
                {/* <div class="line bluebg"></div> */}
            </div>
        </div>
        <br />
        <p>John Tseriwa: Elevating brands with embroidered corporate style.</p>
        <div className="containerhr">
          
        </div>
        <div className='container imgwidth'>
        <Slider {...settings}>
          <div >
            <img className='slider-image padleft' src={C1} alt="Image One" />
          </div>
          <div >
            <img className='slider-image padleft' src={C6} alt="Image One" />
          </div>
          <div >
            <img className='slider-image padleft' src={C3} alt="Image One" />
          </div>
          <div >
            <img className='slider-image padleft' src={C1} alt="Image One" />
          </div>
          <div >
            <img className='slider-image padleft' src={C5} alt="Image One" />
          </div>
          <div >
            <img className='slider-image padleft' src={C6} alt="Image One" />
          </div>
        </Slider>
        </div>
      </div>
    );
  }
} 
// Carasoul