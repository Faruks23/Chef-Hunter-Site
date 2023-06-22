import React, { useContext, useState } from 'react';
import './Header.css'
import { NavLink } from 'react-router-dom';
import { FaUserCircle, FaBars} from "react-icons/fa";
import { AuthContext } from '../../AuthProvider/AuthProvider';
import { HiX } from "react-icons/hi";

const Header = () => {
  const { user, LogoutUser } = useContext(AuthContext);
  const [showName, setShowName] = useState(false);
  const[open,setOpen] = useState(false);

    const handleHover = () => {
      setShowName(true);
    };

    const handleLeave = () => {
      setShowName(false);
    };
  const handleLogout = () => { 
    console.log('clikke');
    LogoutUser()
  }
  return (
    <div className=" bg w-full">
      <nav className="flex justify-between mx-10 items-center">
        <h1 className="title  shake-vertical">Food Hunter</h1>
        <ul
          className={`flex ${
            open ? "top-[54px]" : "-top-[500px]"
          } gap-8 tracking-in-expand nav-link md:flex items-center font-serif`}
        >
          <NavLink to={"/"}>
            <li>Home</li>
          </NavLink>
          <NavLink to={"/blog"}>
            <li>Blog</li>
          </NavLink>
          <NavLink to={"/signup"}>
            <li>Sign Up</li>
          </NavLink>
          {user ? (
            <>
              <NavLink to={'/user'}>
                <li
                  onMouseOver={handleHover}
                  onMouseLeave={handleLeave}
                  className=" flex items-center"
                >
                  {user ? (
                    <span className="user-profile bg-gray-400 rounded-full w-10 h-10">
                      <img
                        className="w-10 h-10 rounded-full"
                        src={
                          user ? (
                            user.photoURL
                          ) : (
                            <FaUserCircle className="w-10 h-10"></FaUserCircle>
                          )
                        }
                        alt=""
                      />
                    </span>
                  ) : (
                    <FaUserCircle className="w-10 h-10"></FaUserCircle>
                  )}
                </li>
                <span className="user-img">
                  {showName && <p className='text-white'>{user?.displayName} </p>}
                </span>
              </NavLink>
              <button onClick={handleLogout} className="btn-logout">
                LogOut
              </button>
            </>
          ) : (
            <NavLink to={"/login"}>
              <li>Login</li>
            </NavLink>
          )}
        </ul>
        <div onClick={() => setOpen(!open)} className="manubar">
          {!open ? (
            <FaBars className="w-6 h-6"></FaBars>
          ) : (
            <HiX className="w-6 h-6"></HiX>
          )}
        </div>
      </nav>
    </div>
  );
};

export default Header;