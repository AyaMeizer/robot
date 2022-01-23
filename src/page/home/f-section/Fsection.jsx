import React from "react";

import "./FSec.css"; 

import robot from '../../../../images/robo.png'


const Fsection = () => {
  return (
    <section className="info">
      <div className="main-info">
        <p> Your smart partner for </p> 

        <br /> <br /> 
        <h1>
        
          Digital Transformation Through <br /> AI Product Development & <br /> Storytelling
        </h1>
        <br /> <br /> 
        <p>
          In an age of information overload, <br />  we help our clients make sense of
          it all.
        </p> 

     <div className="get-start">
         <button> GET STARTED   </button>
     </div>
      </div>

       <div className="robot">
           <img src={ robot } alt="smart robot" />
       </div>
     
    </section> 
  );
};

export default Fsection;
