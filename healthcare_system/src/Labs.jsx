import React from "react";
import photo1 from "./images/labs1.png";
import photo2 from "./images/labs2.png";
import photo3 from "./images/lab3.png";
import photo4 from "./images/lab4.png";
import photo5 from "./images/lab6.png";
import photo6 from "./images/lab7.png";
import photo7 from "./images/lab8.png";
function Labs(){
    return (
       <>
        <section>
        <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src={photo1} class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src={photo2} class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src={photo3} class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
    <img src={photo4} class="d-block w-100" alt="..."/>
  </div>
  <div class="carousel-item">
  <img src={photo5} class="d-block w-100" alt="..."/>
</div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div></section>

<section>
<div class="container mt-5">
  <div class="row">
    <div class="col-sm">
    <div className="card">
    <img className="card-img-top" src="..." alt="Card image cap"/>
    <div className="card-body">
      <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    </div>
  </div>
    </div>
    <div class="col-sm">
    <div className="card">
    <img className="card-img-top" src="..." alt="Card image cap"/>
    <div className="card-body">
      <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    </div>
  </div>
    </div>
    <div class="col-sm">
    <div className="card" >
    <img className="card-img-top" src="..." alt="Card image cap"/>
    <div className="card-body">
      <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    </div>
  </div>
    </div>
  </div>
</div>
</section>
        </>
    )
}
export default Labs;