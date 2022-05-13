function startAudio(base, offset = 0) {
    var audio = new Audio()
    audio.volume = 0.7
    audio.currentTime = offset;
    audio.autoplay = true
    audio.load()
  
    audio.addEventListener('load', function(){
      audio.play()
    }, true);
  
    audio.addEventListener('ended', function(){
      this.currentTime = 0;
      this.play();
    }, false);
  
    // Reflect data to localStorage
    localStorage.setItem("audio", base);
  
    setInterval(() => {
      localStorage.setItem("audio_time", audio.currentTime);
    }, 100);
  
    audio.src = base + '/audio.wav'
  
   //...
  }
  
  if("audio" in localStorage) {
    startAudio(
      localStorage.getItem("audio"),
      +localStorage.getItem("audio_time")
    );
  }