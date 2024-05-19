import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import React from 'react';
import Home from './Home';
import {BrowserRouter,Route,Routes}from "react-router-dom";
import AboutPage from './About';
import Navbar from "./Navbar";
import ContactUs from './Contact';
import Login from './Login';
import BookNow from './Book';
import BloodDonation from './BloodDonation';
import Insurance from './Insurance';
import RegisterDoner from './RegisterDoner';
import FindDoner from"./FindDoner";
import Register from "./Register";
import LoginUser from "./LoginUser";
import Footer from './Footer';
import DriverLogin from './DriverLogin';
import GetStarted from './GetStarted';
import Opd from './Opd';
import HospitalLogin from './HospitalLogin';
import HospitalRegister from './HosRegister';
import { ToastContainer } from 'react-toastify';
import Labs from './Labs';
import Ambulance from './Ambulance';
import Bed from './Bed';
import PrintDoner from './PrintDoner';
import HospitalData from './HospitalData';
import Beds from './Beds';
import BedsRegis from './BedsRegis';
import ForgotPassword from './ForgotPassword';
function App() {
  return (
    <div >
    <ToastContainer />

    <Navbar/>
   <BrowserRouter>
    <Routes>
    <Route exact path="/Home" element={<Home></Home>}></Route>
    <Route exact path="/" element={<Home></Home>}></Route>
    <Route exact path="/About" element={<AboutPage/>}></Route>
    <Route exact path="/Contact" element={<ContactUs></ContactUs>}></Route>
    <Route exact path="/Login" element={<Login></Login>}></Route>
    <Route exact path="/Book" element={<BookNow></BookNow>}></Route>
    <Route exact path="/BloodDonation" element={<BloodDonation></BloodDonation>}></Route>
    <Route exact path="/Insurance" element={<Insurance></Insurance>}></Route>
    <Route exact path="/RegisterDoner" element={<RegisterDoner></RegisterDoner>}></Route>
    <Route exact path="/FindDoner" element={<FindDoner></FindDoner>}></Route>
    <Route exact path="/Register" element={<Register></Register>}></Route>
    <Route exact path="/LoginUser" element={<LoginUser></LoginUser>}></Route>
   <Route exact path=".DriverLogin" element={<DriverLogin></DriverLogin>}></Route>
  <Route exact path='GetStarted' element={<GetStarted></GetStarted>}></Route>
  <Route exact path="Opd" element={<Opd></Opd>}></Route>
  <Route exact path="HospitalLogin" element={<HospitalLogin></HospitalLogin>}></Route>
 <Route exact path="HosRegister"element={<HospitalRegister></HospitalRegister>}></Route>
 <Route exact path="/Labs" element={<Labs></Labs>}></Route>
 <Route exact path="/Ambulance" element={<Ambulance></Ambulance>}></Route>
 <Route exact path="/Bed"element={<Bed></Bed>}></Route>
 <Route exact path="/PrintDoner"element={<PrintDoner></PrintDoner>}></Route>
 <Route exact path="/HospitalData"element={<HospitalData></HospitalData>}></Route>
 <Route exact path="/Beds"element={<Beds></Beds>}></Route>
 <Route exact path="/BedsRegis"element={<BedsRegis></BedsRegis>}></Route>
 <Route exact path="/ForgotPassword"element={<ForgotPassword></ForgotPassword>}></Route>
   </Routes>
   <Footer></Footer>
  </BrowserRouter>

    
  </div>
  );
}

export default App;
