import React, { useContext, useRef, useState } from 'react';
import { AuthContext } from '../../../AuthProvider/AuthProvider';
import './Login.css'
import { FaGoogle, FaGithub } from "react-icons/fa";
import { Link, useLocation, useNavigate } from 'react-router-dom';
  import { ToastContainer, toast } from "react-toastify";
  import "react-toastify/dist/ReactToastify.css";

const Login = () => {
   const [CreateSuccess, setSuccess] = useState("Login success"); 
   const [errors, setError] = useState("");
  const {
    LoginUser,
    LoginWithGoogleAccount,
    LoginWithGithubAccount,
    handleResetPassword,
  } = useContext(AuthContext);
  const location = useLocation()
  console.log(location);
  const from = location.state?.from?.pathname || '/';
  const[show, setShow] = useState(false)
  
  const naviget=useNavigate()
  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
   
    if (!(email, password)) {
      toast('please enter a valid email and password')
      setShow(true)
       return
    }
    if ((email, password)) {
      setShow(false)
      
     }
    LoginUser(email, password)
      .then((result) => {
        // Signed in
         toast(`${CreateSuccess}`);
        naviget(from,{replace: true})
        form.reset()
        const user = result.user;
       
        toast(`${CreateSuccess}`);
        console.log(user);
      })
      .catch((error) => {
        
        const errorMessage = error.message;
        console.log(errorMessage);
        setError(errorMessage)
        toast(errorMessage);
      });
  }

  // 

  // handle login with google
  const handleLoginwithGoogle = () => {
    LoginWithGoogleAccount()
      .then(rsult => {
        setSuccess("welcome. Login Success");
        naviget(from, { replace: true });
         toast(`${CreateSuccess}`);
    })
  }
  // handle login with github
  const handleLoginwithGithub = () =>{
    LoginWithGithubAccount().then((rsult) => { 
      naviget(from, { replace: true });
      setSuccess("welcome. Login Success");
      toast(`${CreateSuccess}`);
    });
  }
  const emailRef = useRef()
  
  const sendPasswordReset = () => { 
    console.log(emailRef.current.value);
    const email = emailRef.current.value;
    if (!email){
      toast('Please enter your email address')
      return;
    }
    handleResetPassword(email)
      .then(() => {
        toast("Please check your email")
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        toast(errorMessage)
      });
  }
  return (
    <div className="hero min-h-screen bg-base-200 ">
      <div className="hero-content flex-col ">
        <div className="text-center">
          <h1 className="text-5xl font-bold font-serif mb-5">Login now!</h1>
        </div>
        <ToastContainer
          position="bottom-center"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
        <div className="card flex-shrink-0 w-full  shadow-2xl bg-base-100 custom-cart max-w-sm">
          <form onSubmit={handleLogin} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="text"
                ref={emailRef}
                placeholder="email"
                name="email"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="password"
                name="password"
                className="input input-bordered"
              />
              <label className="label " onClick={sendPasswordReset}>
                {show && (
                  <a
                    href="#"
                    className="label-text-alt link link-hover text-blue-500"
                  >
                    Forgot password?
                  </a>
                )}
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary ">Login</button>
            </div>
          </form>
          <p className="or text-center">or</p>
          <div className="socialLogin flex pb-5 px-2 justify-center items-center gap-5">
            <div onClick={handleLoginwithGoogle}>
              <FaGoogle className="icon" />
            </div>

            <div onClick={handleLoginwithGithub}>
              <FaGithub className="icon" />
            </div>
          </div>
          <p className="text-center mb-3 font-serif">
            If You New here...{" "}
            <span className="text-orange-600">
              {" "}
              <Link to={"/signup"}>Register</Link>{" "}
            </span>{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;