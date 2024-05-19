import react from "react";
import one from "./images/insurance1.png";
import two from "./images/insurance3.png";
import three from "./images/insurance2.png";
import four from "./images/insurance4.png";
import five from "./images/insurance5.png";
import six from "./images/insurance6.png";
function Insurance()
{
    return (
        <div>
        <section><div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={two} className="d-block w-100" alt="..."/>
          </div>
          <div className="carousel-item">
            <img src={one}className="d-block w-100" alt="..."/>
          </div>
          <div className="carousel-item">
            <img src={three} className="d-block w-100" alt="..."/>
          </div>
          <div className="carousel-item">
          <img src={four} className="d-block w-100" alt="..."/>
        </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div></section>
      
      <section className="mx-auto my-auto">
      <h3 className="mt-5">Health Insurance</h3>
      <ul className="pl-2 mx-4">
  <li>Health insurance takes care of your medical expenses and ensures that out-of-pocket expenses are curtailed up to the Sum insured</li>
  <li>A health insurance policy ensures that you can avail cashless treatment at a network hospital, typically covering 30 days and 60 days pre and post hospitalization, respectively, in most of the Health Insurance plans.</li>
  <li>One can add value to the Base Health Insurance Plan by complementing them with additional benefits such as Personal Accident (PA) Cover, Critical Illness (CI) Cover, etc. These products are available at a very nominal cost adding benefits, which are not a part of the Base Health Insurance plan. For Example, A PA plan helps by providing coverage for disability, which is typically not covered under the basic health insurance plan. An individual needs not go through any waiting period and medical checkups for a PA cover</li>
  <li>One can also invest on one of the popular senior citizen health insurance policies and ensure comprehensive security for their elderly parents or secure their old age that often brings along several ailments that require expensive medical treatment</li>
  <li>Almost all the health insurance plans include Coronavirus treatment cover. As per the IRDAI guidelines, insurers have also launched COVID-19 specific best health insurance</li>
  <li>Two special COVID health insurance policies namely, Corona Rakshak policy and Corona Kavach policy also introduced that provide lump sum payment upon diagnosis and also pay for the cost of consumable items like PPE Kits, Masks, Gloves, etc.</li>
  

</ul>
<br></br>
<h3>Benefits of Health Insurance Health Coverage</h3>
<p className="pl-2 mx-4">Health Insurance plans have enhanced offerings to cover a wide spectrum of requirements, like a family health plan offers complete cover to all members of a family under a single umbrella.</p>
<ul className="pl-2 mx-4">
  <li>Medical Bills: Coverage against medicinal expenses incurred, including pre and post hospitalization</li>
  <li>Pre-existing Diseases: Coverage for any pre-existing disease is provided to you after a certain waiting period.</li>
  <li>Claim Reimbursement: Coverage for expenses incurred for hospitalization due to a medical</li>
  <li>Tax Rebate: Annual premium paid for health coverage are subject to tax exemption u/s 80D of ITA, 1961. Tax exemption ranges from Rs. 25,000 to Rs. 75,000.</li>
  <li>Tax benefits are subject to changes in tax laws.</li>
  <li>Other Benefits: As an innovative feature, OPD expenses are now covered under few Insurer plans and don’t require hospitalization for minimum 24 hours for claim reimbursement. Standalone OPD plans are also available in the market</li>
</ul>
      </section>
      <section className="my-5">
      <div className="container">
  <div className="row">
    <div class="col-sm">
     <img src={five} className="mx-auto d-block w-100" ></img>
    </div>
    <div className="col-sm">
    <div class="card" >
    <div class="card-body">
      <h2 class="card-title text-primary">Affordable
      options </h2>
      <p class="card-text">We help you find health insurance plans with affordable premiums, uncover discounts and monthly payment options provided by our Insurance partners</p>
     
    </div>
  </div>
    </div>
    <div className="col-sm">
      
    </div>
  </div>
</div>
      </section>
      <section>
      <img src={six} className="d-block w-100"></img>
      </section>
        </div>
    )
}
export default Insurance;