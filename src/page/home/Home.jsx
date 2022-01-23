import React from "react";
import Header from "../../header/Header";
import Fsection from "./f-section/Fsection";
import ForthSection from "./forth-Section/forth";
import Scsection from "./Sec-Section/Scsection";
import ThSection from "./Th-Section.jsx/ThSection";


const Home = () => {
  return (
    <div>    
      <Header/> 
      <Fsection/>  
      <Scsection/> 
      <ThSection/>
      <ForthSection/>
    </div> 
  );
};

export default Home;
