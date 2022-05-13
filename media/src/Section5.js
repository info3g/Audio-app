import React from 'react'
import img1 from './images/You-Can-Win-eBook.png';
import img2 from './images/cover.png';
import img3 from './images/The-Score-Takes-Care-of-Itself-eBook.png';
import img4 from './images/The-DIfference-Between-Worry-Stress-and-Anxiety-eBook.png';
const Section5 = () => {
  return (
    <>
    <div className='holediv'>
      
      
      <div className='holediv-inner'>
      <div className='holediv-inner-row'>
      <h3>Similar Instareads</h3>
        <ul>
            <li>
                <img src={img1} alt='picc not found'/>
                <h4>You Can Win</h4>
                <p> Tony Robbins </p>
            </li>
            <li>
                <img src={img2} alt='picc not found'/>
                <h4>You Can Win</h4>
                <p> Tony Robbins </p>
            </li>
            <li>
                <img src={img3} alt='picc not found'/>
                <h4>You Can Win</h4>
                <p> Tony Robbins </p>
            </li>
            <li>
                <img src={img4} alt='picc not found'/>
                <h4>You Can Win</h4>
                <p> Tony Robbins </p>
            </li>
        </ul>
        
       
      </div>
      </div>

      {/* <span> 
        <img src={img1} alt='picc not found'/>
        <img src={img2} alt='picc not found'/>
        <img src={img3} alt='picc not found'/>
        <img src={img4} alt='picc not found'/>
        
    </span> */}
   {/* <span>  <h5>You Can Win</h5><h5>You Can Win</h5><h5>You Can Win</h5><h5>You Can Win</h5></span>
   <span>  <h5>Tony Robbins</h5><h5>Tony Robbins</h5><h5>Tony Robbins</h5><h5>Tony Robbins</h5></span> */}
   
    </div>
    
    </>
  )
}

export default Section5;