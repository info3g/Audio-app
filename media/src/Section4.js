import React from 'react'
// import {FcUnlock} from "react-icons/fc"
// import {AiOutlineDollarCircle} from "react-icons/ai"
import lok from './images/lock.png';
import dol from './images/dollar.png';
const Section4 = () => {
  return (
    <>
    <div className='parent'> 
    <h2>A small investment for unlimited knowledge</h2>
    <p>Thousands of titles. A broad range of categories to choose from.</p>
    <div className='sec4-lock'>
    <div className='sec4-lock-inner'>  
        <div className='sec4-lock-left'>
            {/* <FcUnlock/> */}
            <div className='lockk'> <img src={lok} alt="imgg"/></div>
            <h4>Day 1</h4>
            <h6>Unlock access to all content</h6>
        </div>
        <div className='sec4-lock-right'> 
        {/* <AiOutlineDollarCircle /> */}
        <div className='doll'> <img src={dol} alt="imgg"/></div>
        <h4>Day 7</h4>
            <h6> Charged today unless you cancel</h6>
        </div>
    </div>
    <button className='blue-gradient-btn'> Try 7 days free </button>
    </div>
        
    </div>
    </>
  )
}

export default Section4;