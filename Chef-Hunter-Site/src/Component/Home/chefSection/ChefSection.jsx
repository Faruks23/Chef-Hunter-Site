import React, { useEffect, useState } from "react";
import "./ChefSection.css";
import { Link, useNavigation } from "react-router-dom";
import {  CirclesWithBar } from  'react-loader-spinner'
import LazyLoad from "react-lazy-load";
const ChefSection = () => {
  const [chefdata, setChefData] = useState([]);
  const [dataLoding,setDataloging]=useState(true);
  const [visible, setViseble] = useState(4);
  const handlLoudmore = () => {
    setViseble(chefdata.length);
  };



  useEffect(() => {
    fetch(
      "https://b7a10-chef-recipe-hunter-server-side-faruks23-faruks23.vercel.app/chefdeta"
    )
      .then((res) => res.json())
      .then((data) => setChefData(data));
       setDataloging(false);
  }, []);
  console.log(chefdata);
  return (
    <>
      {dataLoding && (
      
        <div className="w-[100px] mx-auto">
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
        </div>
      )}
      <div className="chef-section grid md:grid-cols-2 md:w-[90%] mx-5 md:mx-auto gap-10 mt-6">
        {chefdata.slice(0, visible).map((data) => (
          <>
            <LazyLoad height={300} key={data.id}>
              <div className="card card-side shadow-xl  md:w-[100%] h-full overflow-hidden py-2  font-serif">
                <figure>
                  <img
                    className="h-full w-[200px] py-0"
                    src={data.chefPhoto}
                    alt="Movie"
                  />
                </figure>

                <div key={data.id} className="card-body">
                  <h2 className="card-title"> Name: {data.chefName}</h2>
                  <ul>
                    <li>Experience: {data.experience}</li>
                    <li>Like: {data.likes}</li>
                    <li>Numer Of Recipes: {data.numRecipes}</li>
                  </ul>
                  <div className="card-actions justify-end"></div>
                </div>

                <div className="card-hover  shadow-xl  h-full text-white">
                  <div className=" flex justify-end items-center">
                    <button className="btn btn-primary mt-[20%] mr-3">
                      <Link to={`/recipe/${data.id}`}>View Recipes</Link>
                    </button>
                  </div>
                </div>
              </div>
            </LazyLoad>
          </>
        ))}
      </div>
      <div className="flex justify-center  items-center mt-6 pb-5">
        <button onClick={handlLoudmore} className="btn btn-primary ">
          Loud more
        </button>
      </div>
    </>
  );
};

export default ChefSection;
