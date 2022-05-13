import React from 'react'
import {AiOutlineCopyrightCircle} from "react-icons/ai";
import {AiFillTwitterCircle} from "react-icons/ai";
import {BsFacebook} from "react-icons/bs";
import {BsInstagram} from "react-icons/bs";
import {TiSocialYoutubeCircular} from "react-icons/ti";
import { BsApple } from "react-icons/bs";
import {FaGooglePlay} from "react-icons/fa";
const Section6 = () => {
  return (
    <>
    <div className='sec6-left'>
    <h3> Get Smarter in Minutes</h3>
    <h4>Through sudio & text formats</h4>

    <h5>Term of Service ! Privacy Policy</h5>
    <p><AiOutlineCopyrightCircle/>Instaread 2021. All rights reserved</p>
    </div>
    <div className='sec6-middle'>
        <h3>Catagories</h3>
        <ul>
            <span>New </span>
            <span>Popular </span>
            <span>Business and Economics </span>
            <span>Self-Help</span>
            <span>Politics</span>
            <span>Instaread Originals</span>
            <span>Health & Fitness </span>
            <span>Fiction</span>
            <span>Science</span>
            <span>Religion </span>
            <span>Sports & Recreation </span>

           
        </ul>
    </div>
    <div className='sec6-right'>
        <h3> Company</h3>
        <span>Help & Contact</span>
        <span>Teams</span>
        <span>Articles</span>
        <span>The Nugget</span>
        <span>Subscription FAQs</span>
    </div>
    <div className='sec6-last'>
        <span><AiFillTwitterCircle/><BsFacebook/><BsInstagram/> <TiSocialYoutubeCircular/></span>
        <button><BsApple/> Download on the App Store</button>
        <button><FaGooglePlay/> Download on the App Store</button>
    </div>
    
    </>
  )
}

export default Section6;