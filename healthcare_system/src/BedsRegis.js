import react, { useEffect, useState } from "react";
import axios from "axios";
import photo from "../src/images/contact.png";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";

function BedsRegis() {
  const navigate = useNavigate();
  const [name, setname] = useState("");
  const [bed1, setbed1] = useState("");
  const [bed2, setbed2] = useState("");
  const [bed3, setbed3] = useState("");
  const [bed4, setbed4] = useState("");
  const [bed5, setbed5] = useState("");
  const [bed6, setbed6] = useState("");
  const [bed7, setbed7] = useState("");
  const [bed8, setbed8] = useState("");
  const [bed9, setbed9] = useState("");
  const [bed10, setbed10] = useState("");
  const handleSubmit = async () => {
    const resp = await axios.post("http://localhost:3001/BedsRegis", {
      Name: name,
      Bed1: bed1,
      Bed2: bed2,
      Bed3: bed3,
      Bed4: bed4,
      Bed5: bed5,
      Bed6: bed6,
      Bed7: bed7,
      Bed8: bed8,
      Bed9: bed9,
      Bed10: bed10,
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
      navigate("/Ambulance");
    }, 6000);
  };
  return (
    <>
      {" "}
      <>
        <div class="h-100 d-flex align-items-center justify-content-center ">
          <div class="border ">
            <div class="my-3">
              <div class="row align-items-center g-3">
                <div class="col-auto mx-4 mb-2">
                  <label class="col-form-label" for="inputPassword">
                    Hospital Name
                  </label>
                </div>
                <div class="col-auto mx-5 mb-2">
                  <input
                    type="text"
                    class="form-control"
                    name="Name"
                    value={name}
                    onChange={(e) => setname(e.target.value)}
                    required
                  />
                </div>
              </div>
              <div class="row align-items-center g-3">
                <div class="col-auto mx-5 mb-2">
                  <label class="col-form-label" for="inputPassword">
                    Casyality Beds
                  </label>
                </div>
                <div class="col-auto mx-5 mb-2">
                  <input
                    type="text"
                    class="form-control"
                    name="Bed1"
                    value={bed1}
                    id="password"
                    onChange={(e) => setbed1(e.target.value)}
                    required
                  />
                </div>
              </div>
              <div class="row align-items-center g-3">
                <div class="col-auto mx-5 mb-2">
                  <label class="col-form-label" for="inputPassword">
                    General Ward Beds
                  </label>
                </div>
                <div class="col-auto mx-5 mb-2">
                  <input
                    type="number"
                    class="form-control"
                    name="Bed2"
                    value={bed2}
                    onChange={(e) => setbed2(e.target.value)}
                    required
                  />
                </div>
              </div>
              <div class="row align-items-center g-3">
                <div class="col-auto mx-5 mb-2">
                  <label class="col-form-label" for="inputPassword">
                    Semi-Special Beds
                  </label>
                </div>
                <div class="col-auto mx-5 mb-2">
                  <input
                    type="number"
                    class="form-control"
                    name="Bed3"
                    value={bed3}
                    onChange={(e) => setbed3(e.target.value)}
                    required
                  />
                </div>
              </div>
              <div class="row align-items-center g-3">
                <div class="col-auto mx-5 mb-2">
                  <label class="col-form-label" for="inputPassword">
                    Special Beds
                  </label>
                </div>
                <div class="col-auto mx-5 mb-2">
                  <input
                    type="number"
                    class="form-control"
                    name="Bed4"
                    value={bed4}
                    onChange={(e) => setbed4(e.target.value)}
                    required
                  />
                </div>
              </div>
              <div class="row align-items-center g-3">
                <div class="col-auto mx-5 mb-2">
                  <label class="col-form-label" for="inputPassword">
                    Deluxe Beds
                  </label>
                </div>
                <div class="col-auto mx-5 mb-2">
                  <input
                    type="number"
                    class="form-control"
                    name="Bed5"
                    value={bed5}
                    onChange={(e) => setbed5(e.target.value)}
                    required
                  />
                </div>
              </div>
              <div class="row align-items-center g-3">
                <div class="col-auto mx-5 mb-2">
                  <label class="col-form-label" for="inputPassword">
                    CCU Beds
                  </label>
                </div>
                <div class="col-auto mx-5 mb-2">
                  <input
                    type="number"
                    class="form-control"
                    name="Bed6"
                    value={bed6}
                    onChange={(e) => setbed6(e.target.value)}
                    required
                  />
                </div>
              </div>
              <div class="row align-items-center g-3">
                <div class="col-auto mx-5 mb-2">
                  <label class="col-form-label" for="inputPassword">
                    ICCU
                  </label>
                </div>
                <div class="col-auto mx-5 mb-2">
                  <input
                    type="number"
                    class="form-control"
                    name="Bed7"
                    value={bed7}
                    onChange={(e) => setbed7(e.target.value)}
                    required
                  />
                </div>
              </div>
              <div class="row align-items-center g-3">
                <div class="col-auto mx-5 mb-2">
                  <label class="col-form-label" for="inputPassword">
                    Sicy Beds
                  </label>
                </div>
                <div class="col-auto mx-5 mb-2">
                  <input
                    type="number"
                    class="form-control"
                    name="Bed8"
                    value={bed8}
                    onChange={(e) => setbed8(e.target.value)}
                    required
                  />
                </div>
              </div>
              <div class="row align-items-center g-3">
                <div class="col-auto mx-5 mb-2">
                  <label class="col-form-label" for="inputPassword">
                    Nicu Beds
                  </label>
                </div>
                <div class="col-auto mx-5 mb-2">
                  <input
                    type="number"
                    class="form-control"
                    name="Bed9"
                    value={bed9}
                    onChange={(e) => setbed9(e.target.value)}
                    required
                  />
                </div>
              </div>
              <div class="row align-items-center g-3">
                <div class="col-auto mx-5 mb-2">
                  <label class="col-form-label" for="inputPassword">
                    Picu Beds
                  </label>
                </div>
                <div class="col-auto mb-2 mx-5 ">
                  <input
                    type="number"
                    class="form-control"
                    name="Bed10"
                    value={bed10}
                    onChange={(e) => setbed10(e.target.value)}
                    required
                  />
                  
                </div>
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
      </>
    </>
  );
}
export default BedsRegis;
