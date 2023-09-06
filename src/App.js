import './App.css';
import React from 'react';
import Navbar from './Navbar';
import Home from './Home';
import Experience from './Experience';
import Services from './Services';
import FourIR from './FourIR';
import About from './About';
import Contact from './Contact';
import Footer from './Footer';
import Carasoul from './Carasoul';
import testimonials from './testimonials';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import "bootstrap/dist/css/bootstrap.min.css";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';


function App() {
// const link = "https://www.figma.com/file/eiS7MT2cAbc4RxSmjDL1tv/Mr-T's-website?type=design&node-id=3-2&mode=design&t=XD1kUHooXPpxHxj6-0"
// var num = [1,2,3,4,5,6];

  return (
    <div className="App">
        <Navbar/>
      <article>
        <Home/>
        <Services/>
        <About/>
        <corporateWear/>
        <Experience/>
        <Carasoul/>
        <FourIR/>
        {/* <testimonials/> */}
        <Contact/>
        <Footer/>
      </article>
    </div>
  );
}

export default App;
