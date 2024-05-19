import react, { useState } from "react";
import axios from "axios";
import image from "./images/hospital3.png";
import photo from "../src/images/contact.png";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

function Register() {
    const navigate = useNavigate();
  const [Name,setname]=useState();
  const [Pin,setpin]=useState();
  const[Phone,setphone]=useState();
  const[Emer,setemer]=useState();
  const[Email,setemail]=useState();
  const[Add,setadd]=useState();
  const[State,setstate]=useState();
  const[Dict,setdict]=useState();
  const[Pass,setpass]=useState();
  const[Cpass,setCpass]=useState();


  const handleSubmit = async () => {
    const resp = await axios.post("http://localhost:3001/hospitalreg", {
      name:Name,
      pincode:Pin,
      phone:Phone,
      emergency:Emer,
      email:Email,
      address:Add,
      state:State,
      district:Dict,
      password:Pass,
      confirmPassword:Cpass
      
    });
    console.log(resp);
    toast.success(resp.data.message, {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      });
      setTimeout(() => {
        navigate("/BedsRegis");
      },  6000)
  };
  return (
    <>
      <section>
        <section className="h-100 bg-dark ">
            <div className="container py-5 h-100">
              <div className="row d-flex justify-content-center align-items-center h-100">
                <div className="col">
                  <div className="card card-registration my-4">
                    <div className="row g-0">
                      <div className="col-xl-6 d-none d-xl-block">
                        <img
                          src={image}
                          alt="Sample photo"
                          className="img-fluid"
                          id="dca"
                        />
                      </div>

                      <div className="col-xl-6" method="Post">
                        <div className="card-body p-md-5 text-black">
                          <h3 className="mb-5 text-uppercase">Hospital Registration</h3>

                          <div className="row">
                            <div className="col-md-6 mb-4">
                              <div className="form-outline">
                                <input
                                  type="text"
                                  name="name"
                                  className="form-control form-control-lg"
                                  autoComplete="off"
                                  value={Name}
                                   onChange={(e) => setname(e.target.value)}
                                  required
                                />
                                <label className="form-label">Hospital Name</label>
                              </div>
                            </div>
                            <div className="col-md-6 mb-4">
                              <div className="form-outline">
                                <input
                                  type="number"
                                  name="pincode"
                                  id="form3Example1n"
                                  class="form-control form-control-lg"
                                  value={Pin}
                          onChange={(e) => setpin(e.target.value)}
                                  required
                                />
                                <label className="form-label">Pincode</label>
                              </div>
                            </div>
                          </div>

                          <div className="row">
                            <div className="col-md-6 mb-4">
                              <div className="form-outline">
                                <input
                                  type="text"
                                  name="phone"
                                  className="form-control form-control-lg"
                                  autoComplete="off"
                                  value={Phone}
                                   onChange={(e) => setphone(e.target.value)}
                                  required
                                />
                                <label className="form-label">Phone No</label>
                              </div>
                            </div>
                            <div className="col-md-6 mb-4">
                              <div className="form-outline">
                                <input
                                  type="text"
                                  name="emergency"
                                  id="form3Example1n"
                                  class="form-control form-control-lg"
                                  value={Emer}
                                   onChange={(e) => setemer(e.target.value)}
                                  required
                                />
                                <label className="form-label">Emergency Contact Number</label>
                              </div>
                            </div>
                          </div>

                          <div class="form-outline mb-4">
                            <input
                              type="email"
                              name="email"
                              id="form3Example8"
                              className="form-control form-control-lg"
                              value={Email}
                                   onChange={(e) => setemail(e.target.value)}
                              required
                            />
                            <label className="form-label">Email id</label>
                          </div>

                         

                          <div className="form-outline mb-4">
                            <input
                              type="text"
                              name="address"
                              id="form3Example9"
                              class="form-control form-control-lg"
                              value={Add}
                                   onChange={(e) => setadd(e.target.value)}
                                   required
                            />
                            <label className="form-label">Address</label>
                          </div>
                          <div className="row">
                            <div className="col-md-6 mb-4">
                              <div className="form-outline">
                                <input
                                  type="text"
                                  name="state"
                                  className="form-control form-control-lg"
                                  autoComplete="off"
                                  value={Dict}
                                   onChange={(e) => setdict(e.target.value)}
                                  required
                                />
                                <label className="form-label">State</label>
                              </div>
                            </div>
                            <div className="col-md-6 mb-4">
                              <div className="form-outline">
                                <input
                                  type="text"
                                  name="district"
                                  id="form3Example1n"
                                  class="form-control form-control-lg"
                                  value={State}
                                   onChange={(e) => setstate(e.target.value)}
                                  required
                                />
                                <label className="form-label">District</label>
                              </div>
                            </div>
                          </div>

                          <div className="form-outline mb-4">
                            <input
                              type="Password"
                              name="password"
                              className="form-control form-control-lg"
                              autoComplete="off"
                              value={Pass}
                                   onChange={(e) => setpass(e.target.value)}
                              required
                            />
                            <label className="form-label">Password</label>
                          </div>
                            
                          <div className="form-outline mb-4">
                            <input
                              type="Password"
                              name="confirmPassword"
                              className="form-control form-control-lg"
                              value={Cpass}
                                   onChange={(e) => setCpass(e.target.value)}
                              required
                            />
                            <label
                              className="form-label"
                              >
                              Confirm Password
                            </label>
                          </div>

                          <div className="d-flex justify-content-end pt-3">
                            <button
                              type="button"
                              name="Submit"
                              className="btn btn-warning btn-lg ms-2"
                               onClick={() => handleSubmit()}
                            >
                              Submit
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
        </section>
      </section>
    </>
  );
}

export default Register;
