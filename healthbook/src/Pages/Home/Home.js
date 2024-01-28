import React from 'react'
import hand from '../../Images/hand.jpg'
import doc1 from '../../Images/doc1.jpg'
import doc2 from '../../Images/doc2.jpg'
import About from './About'
import Footer from './Footer'
import Testimonial from './Testimonial'

const Home = () => {
  return (
    <>
    <div className="home-container">
   
    <div style={{
        backgroundImage: `url(${doc1})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        width: '100vw',
        height: '50vh',
      }}>

    
   <div className="home-banner-container">
     <div className="home-bannerImage-container">
       <img src="" alt="" />
     </div>
     <div className="home-text-section" style={{textAlign:"center",
     alignItems:"center",justifyContent:"center",
     padding:"50px"}}>
       <h1 className="primary-heading" style={{ color: 'red',textAlign:"center" }}>
         Health Book 
       </h1>
       <h2 style={{ color: '#000037' }}>
       Integrated Health Management Solution<br></br>
       Connect, Monitor, Improve - Your Health, Seamlessly Synced!
       </h2>
      
     </div>
     <div className="home-image-section">
       <img src=" " alt="" />
     </div>
   </div>
 </div>
 </div>

   <Testimonial/>
   <Footer/>

    

     
      
    </>
    
  )
}

export default Home