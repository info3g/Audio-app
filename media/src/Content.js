
import React, { useState } from "react";
// import "../App.css";
  
const ReadMore = ({ children }) => {
  const text = children;
  const [isReadMore, setIsReadMore] = useState(true);
  const toggleReadMore = () => {
    setIsReadMore(!isReadMore);
  };
  return (
    <> 
    <div> 
    <p className="text">
      {isReadMore ? text.slice(0, 150) : text}
      <span onClick={toggleReadMore} className="read-or-hide">
        {isReadMore ? <h5 className="midd"> Want to read more ? </h5>: " show less"}
      </span>
    </p>
    </div>
    </>
  );
};
  
const Content = () => {
  return (
    <div className="section22">
      <h5>Key Insights 2</h5>
      <p>
      <ReadMore>
        Robert Wright’s Why Buddhism Is True: The Science and Philosophy of Meditation and Enlightenment (2017) considers Buddhism through the lens of evolutionary psychology, a discipline that regards natural selection as the provenance of many mental traits. Focusing on his personal experience with mindfulness meditation, Wright describes a path to truth, using ideas from the realms of psychology and modern, scientifically influenced philosophy to illuminate ancient wisdom. 
        Most people are profoundly out of touch with the nature of objective reality. The human brain has been wired by evolution to experience the world in a deeply subjective, distorted way. Human genes have been programmed to propagate the species, not perceive truth or attain lasting happiness. People seek happiness under the false assumption that one day they can attain it permanently. But happiness is fleeting, in part because of how the brain experiences it, and in part due to inevitable change and the passage of time. Humans are caught in the cycle of seeking out pleasurable experiences and feeling bad in the in-between moments that constitute most day-to-day experiences. This is the source of much human suffering. 
        Human consciousness is influenced by “false feelings,” which seem authentic but which are deceptive in the sense that they don’t lead to productive, well-adjusted behaviors. Meditation is a tool for identifying such feelings as false. The act of meditating shines a spotlight on subjectivity and bias such that a new, more objective perspective becomes possible. 
        Individual selfhood is constructed from warped perceptions of reality. The boundary between one’s self and the external world is porous, if it exists at all. Individuals’ actions are determined in large part by genetics and external circumstances more than their own agency and choices. This means that selfhood isn’t static or fixed, and personality isn’t a collection of traits that are stable from situation to situation. 
        It’s difficult to pursue the path of truth and enlightenment because the human brain isn’t wired to recognize its own bias. Meditation can help overcome this innate obstacle. While Western practitioners often describe meditation in terms of outcomes like stress reduction, such benefits are secondary. The primary benefit is that meditation helps people perceive reality more clearly, which is good not just for individuals, but for humankind.
      </ReadMore>
       
      </p>
      {/* <div className="wantobutton"> 
      <button>Try 7 days free</button>
      </div> */}
    </div>
  );
};
  
export default Content;