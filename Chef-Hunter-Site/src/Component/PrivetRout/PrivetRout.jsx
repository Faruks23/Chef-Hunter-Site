import React, { useContext } from 'react';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';

import { CirclesWithBar } from "react-loader-spinner";
const PrivetRout = ({ children }) => {
  const { user, loder } = useContext(AuthContext);
  const location = useLocation()
  if (loder) {
    return (
      <CirclesWithBar
        height="100"
        width="100"
        color="#4fa94d"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
        outerCircleColor=""
        innerCircleColor=""
        barColor=""
        ariaLabel="circles-with-bar-loading"
      />
    );
  }
  if (user) {
    return children;
  }
  return (
    <Navigate state={{from:location}} replace to={'/login'}></Navigate>
  );
};

export default PrivetRout;