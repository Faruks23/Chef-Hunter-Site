import React from 'react';
import { Link, useRouteError } from 'react-router-dom';

const ErrorPage = () => {

  const error = useRouteError();
  return (
    <div
      id="error-page "
      className="mx-auto w-full  h-[70vh]  flex flex-wrap justify-center items-center"
    >
      <div className="w-[50%] text-center">
        <img
          className="w-full"
          src="https://img.freepik.com/free-vector/oops-404-error-with-broken-robot-concept-illustration_114360-5529.jpg?w=2000"
          alt=""
        />
        <p className=" text-3xl font-serif text-red-500">
          Sorry, an unexpected error has occurred.
        </p>
        <p>
          <Link to={'/'}>
            {" "}
            <button className="btn">Go Back Hom Page</button>
          </Link>
        </p>
      </div>
    </div>
  );
};

export default ErrorPage;