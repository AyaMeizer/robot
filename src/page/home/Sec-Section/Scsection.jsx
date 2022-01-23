import React from 'react'
import './Secsection.css'

import robotHand from '../../../../images/robotHand.jpeg'

const Scsection = () => {
  return (

    <section className="intro">

        <div className='intro-info'>
            <div className='int'>

        <p> INTRO </p> 
        <h1>  We Turn Data Into Business <br /> Intelligence  </h1>
            </div>
        <div className="knowing">
            <p> Knowing what is happening in your business and being on top of <br />
                things is a challenging task in this competitive market. <br /> <br />

                "Our mission here at i2i is to help you manage your business using <br /> 
                simple, yet sophisticated tools.    
                <br /> <br />
             </p>
                 <h2>  Join the journey!  </h2>
        </div> 
        </div>
        <div className="robotHand">
            <img src={robotHand} alt="robot hand" />
        </div>
    </section>  
    
)
}

export default Scsection
