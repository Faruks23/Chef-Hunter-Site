import React, { useContext, useState } from 'react';
import { Link, useNavigate, useNavigation } from 'react-router-dom';
import './Register.css'
import { AuthContext } from '../../../AuthProvider/AuthProvider';
  import { ToastContainer, toast } from "react-toastify";
  import "react-toastify/dist/ReactToastify.css";
import { updateProfile } from 'firebase/auth';

const Register = () => {
  const { CreateUser, } = useContext(AuthContext);
  const [CreateSuccess,setSuccess]=useState('')
  const [error, setError] = useState('')
  const Navigate=useNavigate()

  const handleCreatuser = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const photoUrl = form.photoUrl.value;
    console.log(name, email, password, photoUrl);
    if (!email) {
      toast("please enter your email or password")
      return;
    } else if (!password) { 
      toast("please enter your password")
    }
    if (password.length < 6) {
     
      toast("Password must be at least 6 characters");
      return
    }
    // create a new user with email and password
    CreateUser(email,password)
      .then(result => {
         form.reset();
        setError('')
        const user = result.user;
        console.log(user);
        updateUser(result.user, name, photoUrl);

        toast(`Account successfully created`);
        Navigate('/')

       
      })
      .catch(err => { 
        setSuccess('')
        setError(err.message)
        toast(`${error}`);
        console.log(err);
      })
    
   
  }
    const updateUser = (cruent, Name, photoURL) => {
      
        updateProfile(cruent, {
        displayName: Name,
        photoURL: photoURL,
      });
    };
   
  return (
    <div className="hero min-h-screen bg-base-200 font-serif ">
      <div className="hero-content flex-col ">
        <div className="text-center">
          <h1 className="text-5xl font-bold font-serif mb-5">Register now!</h1>
        </div>
        <div className="card custom-cart flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 ">
          <form onSubmit={handleCreatuser} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                placeholder="Enter name here..."
                name="name"
                required
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="text"
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
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text">Photo URL</span>
              </label>
              <input
                type="text"
                placeholder="Photo URL"
                name="photoUrl"
                className="input input-bordered"
              />

              <label className="label">
                Already have an account?{" "}
                <span className="text-green-600">
                  <Link to={"/login"}>Log in</Link>
                </span>
              </label>
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
            <div className="form-control mt-6">
              <button className="btn btn-primary ">Register</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;