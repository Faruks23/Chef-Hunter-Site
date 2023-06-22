import React, { useContext, useState } from 'react';
 import './UserDetails.css'
import { AuthContext } from '../../AuthProvider/AuthProvider';
import { HiX } from 'react-icons/hi';
import { updateProfile } from 'firebase/auth';

const UserDetails = () => {
  const { user,loder} = useContext(AuthContext)
  console.log(user);
  const [open, setOpen] = useState(false)
  const handleOpen = () => {
    console.log("open");
     setOpen(true)
  }
  const handleclose = () => {
    setOpen(false)


  }
    
  const handleform = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
  
    const photoURL = form.photoURL.value;
      updateUser(name, photoURL)
    if (form) {
      setOpen(false)
    }
   
  }
  const updateUser = (Name, photoURL) => {
    if (loder) {
      return <div>
         Hello bangaldes
       </div>
     }
     updateProfile(user, {
       displayName: Name,
       photoURL: photoURL,
       
     });
  };
   const [isLoading, setIsLoading] = useState(false);
  function refreshPage() {
     window.location.reload(false);
     
     setTimeout(() => {
      setIsLoading(true);
     }, 8000); 
  }

  return (
    <div class="profile-card">
      <div className="profile-details rounded-lg w-full md:w-[50%]">
        <img 
          className="w-32 h-32 mx-auto mb-3 mt-2 rounded-md"
          src={user && user?.photoURL}
          alt=""
        />
        <hr />
        <div className="details mt-2 px-4 leading-8  ">
          <h1>
            <span className="">Full Name</span>: {user?.displayName}
          </h1>
          <h1 className="mb-4">
            <span>Email</span>: {user?.email}
          </h1>
          <button onClick={handleOpen} className="btn w-full">
            Update Profile
          </button>
        </div>
      </div>

      {open && (
        <div className="modale">
          <div
            onClick={handleclose}
            className="flex justify-end cursor-pointer "
          >
            <HiX className="w-10 h-10  "></HiX>
          </div>
          <form onSubmit={handleform}>
            <label htmlFor=""> Photo Url:</label>
            <input
              className=""
              type="text"
              name="photoURL"
              placeholder="Update PhotoUrl"
              id=""
            />
            <label htmlFor=""> Nama: </label>
            <input
              className=""
              type="text"
              name="name"
              placeholder="Update Name"
              id=""
            />
           
            <button onClick={refreshPage} className="btn mt-4 w-[70%] mx-auto">{isLoading ? <p>Loading...</p> : <p>Update</p>}</button>
          </form>
        </div>
      )}
    </div>
  );
};

export default UserDetails;