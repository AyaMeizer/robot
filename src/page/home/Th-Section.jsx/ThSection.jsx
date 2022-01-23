import React from 'react'

import './Th.css' 


//img 
import chatBot from '../../../../images/chatBot.png'

import perform from '../../../../images/perform.png'

import vera from '../../../../images/Vera.png'





const ThSection = () => {
  return (
   <section className='card-info' >
      
       <h1 className='title'> PRODUCTS </h1> 
       

       <div className="cards">
           <div className="card"> 
           <div className='main-icon'>
            <img className='bot' src={chatBot} alt=" chat bot" /> 
            <hr /> 
           </div> 
           <div className='icon-info' >

            <p>  
            It is your next and essential digital step in
             It is your next and essential digital step in a digital world of smart Websites and customer service. Be there first! Provide your users and customers with the best and easiest experience through powering your website with Arabic and English Chatbot.  
             </p>
            </div>
           </div>  
           <div className="card">
               <div className='main-icon' >

            <img className='perform'  src={perform} alt=" perform info " /> 
            <hr /> 
               </div> 
               <div className='icon-info'>

            <p>  
            Bringing all the elements together to paint a dynamic big picture, lucidly.
            Providing descriptive and predictive Analysis, Recommendations and corrective actions, Immediate insights, and Enabling better decision making.
            </p>
               </div>
           </div>  

           <div className="card">
               <div className='main-icon' >

            <img  className='vera' src={vera} alt=" vera  info " /> 
            <hr /> 
               </div> 
               <div className='icon-info'>

            <p>  
            A Break through digital solution, combining performIT and Chatbot. 24/7 employee at your service. Assigned to different departments according to needs. Versatile accessibility and communication.
            </p>
               </div>
           </div>  


       </div>

   </section>
  )
}

export default ThSection
