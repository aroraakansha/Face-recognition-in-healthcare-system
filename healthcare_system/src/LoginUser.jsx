import react,{useState} from "react";
import photo from "../src/images/login.png";
import { NavLink } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";
function LoginUser()
{

  
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const login = async () => {
    let resp = await axios.post("http://localhost:3001/login", {
      email: email, 
      password: password});

    console.log("Login Response.");
    console.log(resp);
    if(resp.data.message){
      window.sessionStorage.setItem("email", resp.data.message.email);
      window.sessionStorage.setItem("firstname", resp.data.message.firstname);
      
      setTimeout(() => {
        navigate("/home");
      },  1000)
      
    }
  }
  
    return (
      <div >
        <div className="container-sm">
        <section className="mx-5 my-5"><section className="vh-100">
        <div className="container-fluid">
          <div className="row">
            <div className="col-sm-6 text-black">
      
              <div className="px-5 ms-xl-4">
                <i className="fas fa-crow fa-2x me-3 pt-5 mt-xl-4" ></i>
                <span className="h1 fw-bold mb-0">HealthcareHub</span>
              </div>
      
              <div className="d-flex align-items-center h-custom-2 px-5 ms-xl-4 mt-5 pt-5 pt-xl-0 mt-xl-n5">
      
                <form >

                  <h3 className="fw-normal mb-3 pb-3" >Log in</h3>
      
                  <div className="form-outline mb-4">
                    <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" id="form2Example18" className="form-control form-control-lg"
                />
                    <label className="form-label" for="form2Example18">Email address</label>
                  </div>
      
                  <div className="form-outline mb-4">
                    <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" id="form2Example28" className="form-control form-control-lg" />
                    <label className="form-label" for="form2Example28">Password</label>
                  </div>
      
                  <div className="pt-1 mb-4">
                    <button onClick={() => login()} className="btn btn-info btn-lg btn-block" type="button" 
                   >Login</button>
                  </div>
      
                  <p className="small mb-5 pb-lg-2"><a className="text-muted" href="./ForgotPassword">Forgot password?</a></p>
                  <p>Don't have an account? <a href="./Register" className="link-info">Register here</a></p>
      
                </form>
      
              </div>
      
            </div>
            <div className="col-sm-6 px-0 d-none d-sm-block">
              <img src={photo}
                alt="Login image" className="w-100 vh-100" />
            </div>
          </div>
        </div>
      </section></section>
        </div>
        </div>
    )
}
export default LoginUser;