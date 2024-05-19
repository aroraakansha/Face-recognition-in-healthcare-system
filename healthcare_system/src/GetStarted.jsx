import React from "react";
import blood from "./images/image2.png";
import bed from "./images/bed.png";
import ambulance from "./images/ambulance2.png";
import labs from "./images/labs.png";
import insurance from "./images/insurance.png";
import opd from"./images/Opd.png";
function GetStarted()
{
    return (
      <div className="my-5">
      <h1 className="text-center ">Our Services</h1><br></br><br></br>
      <div className="Container-fluid md-5">
      <div className="row " >
      <div className="col-10-mx-auto">
      <div className="row gy-5">
      <div className="col-md-4 col-10 mx-auto "><div className="card" >
      <img src={bed} className="card-img-top" alt="..."/>
      <div className="card-body">
        <h5 className="card-title text-center">Bed Booking Services</h5>
        <p className="card-text">Here you can easily find the available beds in any hospitals </p>
        <a href="#" className="btn btn-primary">Go somewhere</a>
      </div>
    </div></div>
    <div className="col-md-4 col-10 mx-auto"><div className="card" >
    <img src={blood} className="card-img-top" alt="..."/>
    <div className="card-body">
      <h5 className="card-title text-center">Blood Donation Services</h5>
      <p className="card-text">You can easily donate and find the blood doner for patients</p>
      <a href="./BloodDonation" className="btn btn-primary">Go somewhere</a>
    </div>
  </div></div>
  <div className="col-md-4 col-10 mx-auto"><div className="card" >
  <img src={ambulance} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title text-center">Ambulance Booking Services</h5>
    <p className="card-text">Quick ambulance booking for patient services is available for 24X7 </p>
    <a href="#" className="btn btn-primary">Click Here</a>
  </div>
</div></div>
<div className="col-md-4 col-10 mx-auto"><div className="card" >
<img src={insurance} className="card-img-top" alt="..."/>
<div className="card-body">
  <h5 className="card-title text-center">Insurance Services</h5>
  <p className="card-text">Quick insurance details </p>
  <a href="#" className="btn btn-primary">Go somewhere</a>
</div>
</div></div>
<div className="col-md-4 col-10 mx-auto"><div className="card" >
<img src={opd} className="card-img-top" alt="..."/>
<div className="card-body">
  <h5 className="card-title text-center">OPD Services</h5>
  <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  <a href="#" className="btn btn-primary">Go somewhere</a>
</div>
</div></div>
<div className="col-md-4 col-10 mx-auto"><div className="card" >
<img src={labs} className="card-img-top" alt="..."/>
<div className="card-body">
  <h5 className="card-title text-center">Labs</h5>
  <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  <a href="#" className="btn btn-primary">Go somewhere</a>
</div>
</div></div>
      </div>
      </div>
      </div>
      </div>
      </div>  
    )
}
export default GetStarted;