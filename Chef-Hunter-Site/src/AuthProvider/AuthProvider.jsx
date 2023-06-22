import React, { createContext, useEffect, useState } from 'react';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut, GoogleAuthProvider, signInWithPopup, GithubAuthProvider, updateProfile, sendPasswordResetEmail } from "firebase/auth";
import app from '../../firebase.config';

export const
  AuthContext = createContext()
const AuthProvider = ({ children }) => {
  const auth = getAuth(app);
  const provider = new GoogleAuthProvider();
  const githubProvider = new GithubAuthProvider();
const [user,setUser]=useState(null)
const [loder,setLoder]=useState(true)

    // create new user with email and password
  const CreateUser = (email, password) => { 
       setLoder(true)
      return createUserWithEmailAndPassword(auth, email, password);
  }
  // Login user with email and password
  const LoginUser = (email, password) => { 
    setLoder(true)
    return signInWithEmailAndPassword(auth, email, password);
  }

  // log out user
  const LogoutUser = () => { 
    setLoder(true)
    return signOut(auth);
  }
  // log in with google account
  const LoginWithGoogleAccount = () => {
    setLoder(true)
    return signInWithPopup(auth, provider);
  }
  // log in with github account
  const LoginWithGithubAccount = () => { 
    setLoder(true)
    return signInWithPopup(auth, githubProvider);
  }

  // get logged user form firebase
  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (user) => { 
      setUser(user)
      console.log("auth",user);
      setLoder(false);
    })
     return () => {
       unSubscribe();
     };
  }, [])

// seend password reset email notification
  const handleResetPassword = (email) => {
    return sendPasswordResetEmail(auth,email)
  } 
 
  const AuthUser = {
    user,
    CreateUser,
    LoginUser,
    LogoutUser,
    LoginWithGoogleAccount,
    LoginWithGithubAccount,
    loder,
    handleResetPassword,
  };
  return (
    <div>
      <AuthContext.Provider value={AuthUser}>
        {children}
      </AuthContext.Provider>
    </div>
  );
};

export default AuthProvider;