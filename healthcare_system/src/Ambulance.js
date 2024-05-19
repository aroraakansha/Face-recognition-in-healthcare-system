import React,{useState} from "react";
import photo from "../src/images/contact.png";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import axios from "axios";
function Ambulance(){
  const navigate = useNavigate();
  const [DriverName,setname]=useState('');
  const [Phone,setphone]=useState('');
  const [State,setstate]=useState('');
  const [District,setdistrict]=useState('');
  const [Pincode,setpincode]=useState('');
   
    const handleSubmit = async () => {
      const resp = await axios.post("http://localhost:3001/ambulancereg", {
        name:DriverName,
        phone:Phone,
        state:State,   
        district:District,
        pincode:Pincode            
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
          navigate("/home");
        },  6000)
    };
    return (
        <>
        <div className="row">
        <div className="col-md-3">
          <img src={photo} className="img-fluid" alt="Responsive image" />
        </div>
        <section className="vh-100 col">
          <div className="container h-100">
            <div className="row d-flex justify-content-center align-items-center h-100">
              <div className="col-xl-9">
                <h1 className=" mb-4 text-center">Ambulance Details</h1>

                <div className="card border">
                  <div className="card-body">
                    <div className="row align-items-center pt-4 pb-3">
                      <div className="col-md-3 ps-5">
                        <h6 className="mb-0">Driver Name</h6>
                      </div>
                      <div className="col-md-9 pe-5">
                        <input
                          type="text"
                          className="form-control form-control-lg"
                          placeholder="@abc "
                          name="name"
                          value={DriverName}
                          onChange={(e) => setname(e.target.value)}
                          required
                        />
                      </div>
                    </div>
                    <hr className="mx-n3" />
                    <div className="row align-items-center pt-4 pb-3">
                      <div className="col-md-3 ps-5">
                        <h6 className="mb-0">Phone No</h6>
                      </div>
                      <div className="col-md-9 pe-5">
                        <input
                          type="text"
                          className="form-control form-control-lg"
                          placeholder="@12345"
                          name="phone"
                          value={Phone}
                          onChange={(e) => setphone(e.target.value)}
                          required
                        />
                      </div>
                    </div>

                    <hr className="mx-n3" />

                    <div className="row align-items-center py-3">
                      <div className="col-md-3 ps-5">
                        <h6 className="mb-0">State</h6>
                      </div>
                      <div className="col-md-9 pe-5">
                        <input
                          type="text"
                          className="form-control form-control-lg"
                          placeholder="UttarPradesh"
                          name="state"
                          value={State}
                          onChange={(e) => setstate(e.target.value)}
                          required
                        />
                      </div>
                    </div>
                    <hr className="mx-n3" />
                    <div className="row align-items-center py-3">
                    <div className="col-md-3 ps-5">
                      <h6 className="mb-0">District</h6>
                    </div>
                    <div className="col-md-9 pe-5">
                      <input
                        type="text"
                        className="form-control form-control-lg"
                        placeholder="@Ghaziabad"
                        name="district"
                        value={District}
                        onChange={(e) => setdistrict(e.target.value)}
                        required
                      />
                    </div>
                  </div>                       
                    <hr className="mx-n3" />
                    <div className="row align-items-center py-3">
                    <div className="col-md-3 ps-5">
                      <h6 className="mb-0">Pincode</h6>
                    </div>
                    <div className="col-md-9 pe-5">
                      <input
                        type="text"
                        className="form-control form-control-lg"
                        placeholder="@201001"
                        name="pincode"
                        value={Pincode}
                        onChange={(e) => setpincode(e.target.value)}
                        required
                      />
                    </div>
                  </div>
                    <hr className="mx-n3" />

                    <div className="px-5 py-4">
                      <button type="button" className="btn btn-primary btn-lg"
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
        </section>
      </div>
        </>
    )
}
export default Ambulance;