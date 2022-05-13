import React, { useEffect, useState } from 'react'
import Navbar from './Navbar';
import ReactAudioPlayer from 'react-audio-player';
import { MdPlayCircleOutline } from "react-icons/md";
import { MdHttps } from "react-icons/md";
import Content  from './Content';
import Section3 from './Section3';
import Section2 from './Section2';
import Section4 from './Section4';
import Section5 from './Section5';
// import Section6 from './Section6';
// import Sdata from './Sdata';
const getLocalSong = ()=>{
let list= localStorage.getItem('songlist')
 console.log(list);
 if (list){
   return JSON.parse(localStorage.getItem('songlist'));
 }else {
   return [];
 }
}

const Home = () => {
const [name, setName] = useState(getLocalSong());
const shoot = (a) => {
        setName(a);
    }



const songList =  [{description: 'Hello song', key: 0, songListData: 'https://pwdown.com/113515/Bijlee Bijlee - Harrdy Sandhu.mp3'},
{description: 'Thinking Out Loud', key: 1, songListData: 'https://pagalfree.com/musics/128-Sheila Ki Jawani - Tees Maar Khan 128 Kbps.mp3'},
{description: 'See You Again', key: 2, songListData: 'https://pagalsong.in/uploads/systemuploads/mp3/Agneepath (2011)/Chikni Chameli.mp3'}
];


useEffect(()=>{
  localStorage.setItem('songlist',JSON.stringify(name))
},[name]);


// name.shoot('ended', function(){
//   this.currentTime = 0;
//   this.play();
// }, false);

// // Reflect data to localStorage
// localStorage.setItem("song", name);

// setInterval(() => {
//   localStorage.setItem("name", audio.currentTime);
// }, 100);

// // audio.src = base + '/audio.wav'

// //...
// // }

// if("song" in localStorage) {
// startAudio(
//   localStorage.getItem("name"),
//   +localStorage.getItem("name_time")
// );
// }

  return (
    <>
      <div className="section-1-full"> </div>
      <div className='section-1' > 

        <Navbar/>
        <div className='section-1-inner' > 
        <div className='left'> 
          <h5>Overview</h5>
          <p>
          Robert Wright’s Why Buddhism Is True: The Science and Philosophy of Meditation and Enlightenment (2017) considers Buddhism through the lens of evolutionary psychology, a discipline that regards natural selection as the provenance of many mental traits. Focusing on his personal experience with mindfulness meditation, Wright describes a path to truth, using ideas from the realms of psychology and modern, scientifically influenced philosophy to illuminate ancient wisdom. 
          Most people are profoundly out of touch with the nature of objective reality. The human brain has been wired by evolution to experience the world in a deeply subjective, distorted way. Human genes have been programmed to propagate the species, not perceive truth or attain lasting happiness. People seek happiness under the false assumption that one day they can attain it permanently. But happiness is fleeting, in part because of how the brain experiences it, and in part due to inevitable change and the passage of time. Humans are caught in the cycle of seeking out pleasurable experiences and feeling bad in the in-between moments that constitute most day-to-day experiences. This is the source of much human suffering. 
          Human consciousness is influenced by “false feelings,” which seem authentic but which are deceptive in the sense that they don’t lead to productive, well-adjusted behaviors. Meditation is a tool for identifying such feelings as false. The act of meditating shines a spotlight on subjectivity and bias such that a new, more objective perspective becomes possible. 
          Individual selfhood is constructed from warped perceptions of reality. The boundary between one’s self and the external world is porous, if it exists at all. Individuals’ actions are determined in large part by genetics and external circumstances more than their own agency and choices. This means that selfhood isn’t static or fixed, and personality isn’t a collection of traits that are stable from situation to situation. 
          It’s difficult to pursue the path of truth and enlightenment because the human brain isn’t wired to recognize its own bias. Meditation can help overcome this innate obstacle. While Western practitioners often describe meditation in terms of outcomes like stress reduction, such benefits are secondary. The primary benefit is that meditation helps people perceive reality more clearly, which is good not just for individuals, but for humankind.
          </p>
          <h5>Key Insights 1</h5>
          <p > 
          Robert Wright’s Why Buddhism Is True: The Science and Philosophy of Meditation and Enlightenment (2017) considers Buddhism through the lens of evolutionary psychology, a discipline that regards natural selection as the provenance of many mental traits. Focusing on his personal experience with mindfulness meditation, Wright describes a path to truth, using ideas from the realms of psychology and modern, scientifically influenced philosophy to illuminate ancient wisdom. 
          Most people are profoundly out of touch with the nature of objective reality. The human brain has been wired by evolution to experience the world in a deeply subjective, distorted way. Human genes have been programmed to propagate the species, not perceive truth or attain lasting happiness. People seek happiness under the false assumption that one day they can attain it permanently. But happiness is fleeting, in part because of how the brain experiences it, and in part due to inevitable change and the passage of time. Humans are caught in the cycle of seeking out pleasurable experiences and feeling bad in the in-between moments that constitute most day-to-day experiences. This is the source of much human suffering. 
          Human consciousness is influenced by “false feelings,” which seem authentic but which are deceptive in the sense that they don’t lead to productive, well-adjusted behaviors. Meditation is a tool for identifying such feelings as false. The act of meditating shines a spotlight on subjectivity and bias such that a new, more objective perspective becomes possible. 
          Individual selfhood is constructed from warped perceptions of reality. The boundary between one’s self and the external world is porous, if it exists at all. Individuals’ actions are determined in large part by genetics and external circumstances more than their own agency and choices. This means that selfhood isn’t static or fixed, and personality isn’t a collection of traits that are stable from situation to situation. 
          It’s difficult to pursue the path of truth and enlightenment because the human brain isn’t wired to recognize its own bias. Meditation can help overcome this innate obstacle. While Western practitioners often describe meditation in terms of outcomes like stress reduction, such benefits are secondary. The primary benefit is that meditation helps people perceive reality more clearly, which is good not just for individuals, but for humankind.   
          </p>
          <p> 
          <Content />
          </p>
          <button>Try 7 days Free</button>
        </div>
        <div className='right'> 
          <h3>Audiobook</h3>
          <div className='audio'> 
          <ReactAudioPlayer
            src={name}
            autoPlay
            controls
            />
            </div>
            <br/>
            <h6 >Table of Content</h6>
            <ol>
            {songList.map(song => {
              return (
                <li key={song.key}>{song.description} <a href="javascript:void(0);" onClick={() => shoot(song.songListData)}><MdPlayCircleOutline/></a></li>
              );
              })}
              {/* <Sdata /> */}
            </ol>
          <div className='lockk'> 
            <MdHttps />
            <h5>Unlock access to <br></br>thousands of titles</h5>
            <button>Try 7 days free</button>
          </div>
        </div>
        </div>
    
      </div>
        <Section2 />
        <Section3 />
        <Section4 />
        <Section5 />
        {/* <Section6 /> */}
    </>
  )
}

export default Home;
