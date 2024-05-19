import react from "react";
import web from "../src/images/image2.png";
import { NavLink } from "react-router-dom";
function AboutPage()
{
  return (
    <>
    <div className="py-xl-5 d-inline-block bg-light">
    <section id="header" className="d-flex align-items-center" >
    <div className="container-fluid nav_bg">
      <div className="row">
      <div className="col-10 mx-auto">
      <div className="row">
      <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">
      <h1>About US</h1>
      <h4>Welcome to our HealthCareHub- Your Partner in Health and Wellness!</h4>
      <p>At Healthcarehub, we believe in delivering high-quality, compassionate, and patient-centered healthcare services.  we have become a trusted name in the healthcare industry. Our commitment to providing comprehensive, personalized care is what sets us apart.</p>
      <p><h5>Our Mission</h5>
      Our mission is to improve the health and well-being of the communities we serve. We are dedicated to delivering exceptional healthcare services, fostering innovation, and promoting a culture of empathy and respect.</p>
      <p><h5>Our Vision</h5>
      To be the healthcare provider of choice, recognized for our commitment to quality, patient satisfaction, and community health.
      
      </p>
            
      </div>
      <div className="col-lg-6 order-1 order-lg-2 header-img">
      <img src={web} className="img=fluid animated" alt="home-img"/></div>
      </div>
      </div>
      </div>
      </div></section>
      </div>
    <div id="faq" >
      <section className="about"  >
      <div class="py-xl-5 d-inline-block bg-light">
      <h5 >Core Values</h5>
      <ol>
      <li> Patient-Centered Care: Our patients are at the heart of everything we do. We prioritize their needs, dignity, and comfort in the healthcare journey.</li>
      <li> Excellence: We strive for excellence in all aspects of our services, from medical expertise and technology to customer service and patient outcomes.
      </li>
      <li> Compassion: We approach healthcare with kindness, understanding, and empathy, making a positive difference in the lives of our patients and their families.</li>
      <li>Collaboration: We believe in teamwork and collaboration among our healthcare professionals, staff, and partners to achieve the best possible outcomes for our patients.</li>
      <li>Integrity: We uphold the highest ethical standards, ensuring trust, transparency, and honesty in all our interactions.</li>
      </ol>
      <h5 >Our Services</h5>
      <p>At HealthcareHub, we offer a comprehensive range of healthcare services, including:

      Primary Care: General check-ups, preventive screenings, and routine medical care.
      Specialty Care: Expert consultations and treatments provided by skilled specialists in various fields.
      Emergency Services: 24/7 emergency care with a team of experienced physicians and nurses.
      Surgical Services: State-of-the-art surgical procedures performed by highly trained surgeons.
      Diagnostic Services: Advanced imaging, laboratory tests, and diagnostic procedures for accurate and timely diagnoses.
      Rehabilitation Services: Physical therapy, occupational therapy, and other rehabilitation programs to aid recovery and improve quality of life.</p>
      <h5>Our Team</h5>
      <p>Our healthcare professionals are dedicated experts who are passionate about making a difference in the lives of our patients. From doctors and nurses to administrative staff, everyone at [Healthcare System Name] is committed to providing excep</p>
      <p>Thank you for choosing HealthcareHub as your healthcare provider. We are honored to be your partners in health, and we look forward to serving you with the highest level of care and compassion.

      For inquiries, appointments, or more information about our services, please contact us or schedule an appointment online.</p>
      <h3>Details</h3>
      <p>
      Name:HealthCareHub<br></br>
      Address:<a href="https://www.akgec.ac.in/"> Ajay Kumar Garg Engineering College,Ghaziabad<br></br></a>
      Phone:12345<br></br>
      Email: <a href = "akansha.arora2001.com?">
      Email
      </a>
      </p>
      </div>
      </section>
      </div>
      </>
  );
}
export default AboutPage;