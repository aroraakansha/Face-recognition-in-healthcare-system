import react, { useEffect, useState } from "react";
import axios from "axios";
import photo from "../src/images/contact.png";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import 'react-toastify/dist/ReactToastify.css';

function FindDoner() {
  const navigate = useNavigate();
  const [name, setname] = useState("");
  const [phone, setphone] = useState("");
  const [email, setemail] = useState("");
  const [address, setaddress] = useState("");
  const [state, setstate] = useState("");
  const [dist, setdist] = useState("");
  const [bg, setbg] = useState("");
  const handleSubmit = async () => {
    const resp = await axios.post("http://localhost:3001/finddoner", {
      Name: name,
      Phoneno: phone,
      Email: email,
      Address: address,
      State: state,
      District: dist,
      BloodGroup: bg,
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
        navigate("/PrintDoner");
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
                <h1 className=" mb-4 text-center">Find Blood Doner</h1>

                <div className="card border">
                  <div className="card-body">
                    <div className="row align-items-center pt-4 pb-3">
                      <div className="col-md-3 ps-5">
                        <h6 className="mb-0">Full name</h6>
                      </div>
                      <div className="col-md-9 pe-5">
                        <input
                          type="text"
                         className="form-control form-control-lg"
                          placeholder="@abc "
                          name="Name"
                          value={name}
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
                          name="Phoneno"
                          value={phone}
                          onChange={(e) => setphone(e.target.value)}
                          required
                        />
                      </div>
                    </div>

                    <hr className="mx-n3" />

                    <div className="row align-items-center py-3">
                      <div className="col-md-3 ps-5">
                        <h6 className="mb-0">Email address</h6>
                      </div>
                      <div className="col-md-9 pe-5">
                        <input
                          type="Email"
                         className="form-control form-control-lg"
                          placeholder="example@example.com"
                          name="Email"
                          value={email}
                          onChange={(e) => setemail(e.target.value)}
                          required
                        />
                      </div>
                    </div>
                    <hr className="mx-n3" />

                    <div className="row align-items-center py-3">
                      <div className="col-md-3 ps-5">
                        <h6 className="mb-0">Address</h6>
                      </div>
                      <div className="col-md-9 pe-5">
                        <input
                          type="Address"
                         className="form-control form-control-lg"
                          placeholder="@houseNo154"
                          name="Address"
                          value={address}
                          onChange={(e) => setaddress(e.target.value)}
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
                          type="string"
                         className="form-control form-control-lg"
                          placeholder="@UttarPradesh"
                          name="State"
                          value={state}
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
                          type="String"
                         className="form-control form-control-lg"
                          placeholder="@Ghaziabad"
                          name="District"
                          value={dist}
                          onChange={(e) => setdist(e.target.value)}
                          required
                        />
                      </div>
                    </div>
                    <hr className="mx-n3" />
                    <div className="row align-items-center py-3">
                      <div className="col-md-3 ps-5">
                        <h6 className="mb-0">Blood Group</h6>
                      </div>
                      <div className="col-md-9 pe-5">
                        <input
                          type="string"
                         className="form-control form-control-lg"
                          placeholder="@A+"
                          name="BloodGroup"
                          value={bg}
                          onChange={(e) => setbg(e.target.value)}
                          required
                        />
                      </div>
                    </div>
                    <hr className="mx-n3" />

                    <div className="px-5 py-4">
                      <button
                        type="button"
                       className="btn btn-primary btn-lg"
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
  );
}
export default FindDoner;
