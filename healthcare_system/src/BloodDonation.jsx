import react from "react";
import web from "../src/images/modi.png";
function BloodDonation()
{
    return (
        <>
        
        <section>
        <div className="blood">
        <img src={web} className="float-start" width={300} height={500} alt="home-img"  />
        <h1 >Lets Unite To Save Lives</h1>
        <h5 >We are inviting 135 Core Indians to Become Life Savers. Join us in this mission</h5>
        <a href="./RegisterDoner"><button type="button" className="btn btn-primary ">Register As A Doner</button></a>
        <div className="btn">
        <a href="./FindDoner"><button type="button" className="btn btn-primary">Find A Doner</button></a>
       
        </div>
        
        </div>
        
        <div className="container-mt-3"></div>
        
        <div className="bloodd"><h5>*The main aim is to connect the Donor and receiver in real-time within minutes</h5>
        <h5>*Please note this system is not a Blood Bank and does not involve in collection </h5>
        <p>storage & transportation of blood.
        Please refer T&C for more detail</p>
        </div>       
        </section>
        
       <section className="mt-5">
       <div><h1 className="text-center ">Tips </h1>
       <p className="text-center mb-5">Here are some tips to put your mind at ease during the blood donation process</p>
     
       
       <div className="container-fluid mb-5">
       <div className="col-10 mx-auto">
       <div className="row">
       <div className="col-md-4 col-10 mx-auto"><div className="card text-dark bg-light mb-3" >
       <div className="card-header text-center"><h5>The day before</h5></div>
       <div className="card-body">
         
         <ul>
         <li>Have an iron-rich diet such as beans, spinach or meat, poultry.</li>
         <li>Have a proper sleep of at least 8 hours.</li>
         <li>Include more liquids in your diet</li>
         <li>Make sure you haven't had a cold or flu in at least 72 hours</li>
         </ul>
          </div>
     </div>
     
       </div>
       <div className="col-md-4 col-10 mx-auto"><div className="card text-dark bg-light mb-3" >
       <div className="card-header text-center"><h5>On the donation day </h5></div>
       <div className="card-body">
         
         <ul>
         <li>Do carry your identify identification forms e.g. driver’s license</li>
         <li>Drink 2 cups of water before donating blood</li>
         <li>Wear a half sleeve shirt so that you can easily roll it up avoid fast food before donation</li>
         </ul>
          </div>
     </div>
     
       </div>
       <div className="col-md-4 col-10 mx-auto"><div className="card text-dark bg-light mb-3" >
       <div className="card-header text-center"><h5>After the donation</h5></div>
       <div className="card-body">
       <ul>
         <li>Reward yourself with a snack as refreshment immediately.</li>
         <li>Drink more liquids over a period of 24 hours</li>
         <li>Remove the bandage after few hours</li>
         <li>Don’t do vigorous workout & give your body rest</li>
         </ul>
          </div>
     </div>
     
       </div>
       </div>
       </div>
       </div>
       </div>
       
       </section>
        </>
    )
}
export default BloodDonation;
