import React from 'react'
// import { BsApple } from "react-icons/bs";
// import {FaGooglePlay} from "react-icons/fa";
import img from './images/happy-user.png';
import app from './images/app-store-btn.png';
import store from './images/google-play-2.png';
import imgg from './images/Ellipse 440.png';
import imgg1 from './images/Mask Group 222.png';
import imgg2 from './images/Ellipse 441.png';
import imgg3 from './images/Ellipse 442.png';
import imgg4 from './images/FullSizeRender.png';
import {AiFillStar} from "react-icons/ai"
import './App.css';
// import Review from './Review';
const Section3 = () => {
  return (
    <>
  <div className='top-section-3-space'>fdgfd</div>
    <div className='top-section3'>
    <div className='section3'>
        <div className='section3-inner'> 
        <div className='section3-left'>
         <div className="happy-user">
          <img src={img} alt='Happy User' className="happpy-user-img"/>
          <ul>
            <li><a href="#"> <img src={app} alt='app'/> </a></li>
            <li><a href="#"> <img src={store} alt='app'/> </a></li>
          </ul>
      
          </div>
    
        </div>

        <div className='section3-right'>

        <div className='sec3-review'>
              <div className="img-review"><img src={imgg} alt='picc not found'/></div>
              <div className="img-text-review">   <h5>Arty White <AiFillStar/> <AiFillStar/> <AiFillStar/> <AiFillStar/> <AiFillStar/></h5>
                <p> Never seen better quotes! Interface is sleek. This is 5 / 5. The idea of getting only the most relevant quotes is amazing. Love it 💜</p>
              </div>
        </div>

        <div className='sec3-review'>
              <div className="img-review"><img src={imgg1} alt='picc not found'/></div>
              <div className="img-text-review">   <h5>Xenia Cowels<AiFillStar/> <AiFillStar/> <AiFillStar/> <AiFillStar/> <AiFillStar/></h5>
                <p> I love the content on the app. I use it everyday and it keeps up with all the books I follow. these are like short stories for most self help, business, informational literature ever written.</p>
              </div>
        </div>

        <div className='sec3-review'>
              <div className="img-review"><img src={imgg2} alt='picc not found'/></div>
              <div className="img-text-review">   <h5>Santna Monga <AiFillStar/> <AiFillStar/> <AiFillStar/> <AiFillStar/> <AiFillStar/></h5>
              <p> Productive app. It’s super perfect. Such an easy way to find details about your favorite book, which helps you enjoying great ones. Many thanks.</p>
              </div>
        </div>


        <div className='sec3-review'>
              <div className="img-review"><img src={imgg3} alt='picc not found'/></div>
              <div className="img-text-review">   <h5>Lim Lay Siong <AiFillStar/> <AiFillStar/> <AiFillStar/> <AiFillStar/> <AiFillStar/></h5>
              <p>  Welldone Instaread! Worth of money. Try it. Helps alot to improve our english. A very fast developing app. Have a very bright future.</p>
              </div>
        </div>


        <div className='sec3-review'>
              <div className="img-review"><img src={imgg4} alt='picc not found'/></div>
              <div className="img-text-review">   <h5>Murshid Moossa<AiFillStar/> <AiFillStar/> <AiFillStar/> <AiFillStar/> <AiFillStar/></h5>
                <p> Really loving this! Beautifully designed app with well written summaries from a wide range of categories. Thanks to audiobooks for making my time productive when Im stuck in traffic. I really loved the custom made covers which makes them unique from other apps.</p>
              </div>
        </div>
        
          <div>
            
          
            
        </div>
        
        </div>
        
        <div className="review-btn">  <button>Try 7 days free</button> </div>
    </div>
    </div>
    </div>
    </>
  )
}

export default Section3;
