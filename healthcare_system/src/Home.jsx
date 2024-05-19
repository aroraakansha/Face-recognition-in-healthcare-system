import React from "react";
import web from "../src/images/image1.png";
import { NavLink } from "react-router-dom";
import one from "../src/images/hospital1.png";
import two from "../src/images/hospital2.png";
import ambulance from "../src/images/ambulance.png";
import image from "../src/images/image3.png";
import GetStarted from "./GetStarted";
import Ambulance from "./Ambulance";

function Home() {
    return (
      <div >
      <section id="header" className="d-flex align-items-center col " >
      <div className="container-fluid nav_bg">
        <div className="row">
        <div className="col-10 mx-auto">
        <div className="row">
        <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">
        <h1>Specialists Healing Humankind</h1>
        <h1>Experts To Provive Advance </h1>
        <h1><strong className="br">Medical Treatments And Facilities</strong></h1>
        <a href="/GetStarted" className="my-5" >Get Started</a>
      
        </div>
        <div className="col-lg-6 order-1 order-lg-2 header-img">
        <img src={web} className="img=fluid animated" alt="home-img"/></div>
        </div>
        </div>
        </div>
        </div></section>
        <section className="col mx-6 my-6">
        <h1 className="mx-6 my-6">Emergency Medical Services offered by Every Hospital</h1>
        
        <div className="row">
         <h4>
        <ul>
        <li>Stroke</li>
        <li>Roat Traffic Accident</li>
        <li>Heart Attack</li>
        <li>Fits or Epileptic Seizures</li>
        <li>Respiratory Problem</li>
        <li>Burns</li>
        <li>Bone Fractures</li>
        <li>Diabetic Coma</li>
        <li>Poisoning</li>
        <li>Mother and Child Emergency</li>
        <li>Gastritis</li>
        <li>Gall Bladder Stone Emergency</li>
        <li>Kidney Stone Emergency</li>
        <li>Animal Bite</li>
        <li>Allegric Reactions</li>
        <li>Appendicitis</li>
        <li>Bleeding</li>
        <li>Severe Pain</li>
        <li>Sepsis</li>
        <li>Severe Trauma</li>
        <li>High Grade Fever</li>
        <li>Dehydration</li>
        </ul>
        </h4>
        </div>
        </section>
       <section className="mx-5 my-5">
       <div class="gap">
      
       <h3 className="text-center text-primary mx-5 my-5">At Felix, We Are Equipped To Handle Critically Ill Or Injured Patients With Life-Threatening Conditions
       </h3>
       <h2 id="right"><img className="img-fluid" src={ambulance}></img> 24X7 Emergenct Number<button type="button"class="btn btn-danger">Emergency</button></h2>
       
       
         </div>
             
       </section>
      
      </div>
    );
  }
  
  export default  Home;
  