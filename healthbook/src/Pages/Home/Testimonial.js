import React from "react";
import feature from "../../Images/feature.jpg";
import { AiFillStar } from "react-icons/ai";
import './Testimonial.css'
const Testimonial = () => {
  return (
    <div className="work-section-wrapper">
      <div className="work-section-top">
        <p className="primary-subheading">Testimonial</p>
        <h1 className="primary-heading">What They Are Saying</h1>
        <p className="primary-text">
          Lorem ipsum dolor sit amet consectetur. Non tincidunt magna non et
          elit. Dolor turpis molestie dui magnis facilisis at fringilla quam.
        </p>
      </div>
      <div className="testimonial-section-container"style={{display: "flex",flexDirection:"row"}} >
      <div className="testimonial-section-bottom">
        
        <img src={feature} alt="" style={{width:"100px",height:"100px"}}/>
        <p>
          Lorem ipsum dolor sit amet consectetur. Non tincidunt magna non et
          elit. Dolor turpis molestie dui magnis facilisis at fringilla quam.
        </p>
        <div className="testimonials-stars-container">
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
        </div>
        <p>John Doe</p>
        
      </div>

      <div className="testimonial-section-bottom">
        
        <img src={feature} alt="" style={{width:"100px",height:"100px"}}/>
        <p>
          Lorem ipsum dolor sit amet consectetur. Non tincidunt magna non et
          elit. Dolor turpis molestie dui magnis facilisis at fringilla quam.
        </p>
        <div className="testimonials-stars-container">
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
        </div>
        <p>John Doe</p>
        
      </div>

      <div className="testimonial-section-bottom" >
        
        <img src={feature} alt="" style={{width:"100px",height:"100px"}}/>
        <p>
          Lorem ipsum dolor sit amet consectetur. Non tincidunt magna non et
          elit. Dolor turpis molestie dui magnis facilisis at fringilla quam.
        </p>
        <div className="testimonials-stars-container">
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
        </div>
        <p>John Doe</p>
        
      </div>
      </div>
      
    </div>
  );
};

export default Testimonial;