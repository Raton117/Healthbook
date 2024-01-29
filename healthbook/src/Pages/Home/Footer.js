import React from "react";
import { BsTwitter } from "react-icons/bs";
import { SiLinkedin } from "react-icons/si";
import { BsYoutube } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";
import medilogo from '../../Images/medilogo.jpg'
import './Footer.css'
const Footer = () => {
  return (
    <div className="footer-wrapper">
      <div className="footer-section-one"style={{marginTop:"100px"}}>
     
        <div className="footer-icons" >
         <BsTwitter />
            <SiLinkedin />  
            <BsYoutube />
            <FaFacebookF />
        </div>
      </div>
      <div className="footer-section-two">
        <div className="footer-section-columns">
          <span>Qualtiy</span>
          <span>Help</span>
          <span>Testimonials</span>
          <span>Work</span>
        </div>
        <div className="footer-section-columns">
          <span>244-5333-7783</span>
          <span>hello@medihelp.com</span>
          <span>press@medihelp.com</span>
          <span>contact@medihelp.com</span>
        </div>
        <div className="footer-section-columns">
          <span>Terms & Conditions</span>
          <span>Privacy Policy</span>
        </div>
      </div>
    </div>
  );
};

export default Footer;