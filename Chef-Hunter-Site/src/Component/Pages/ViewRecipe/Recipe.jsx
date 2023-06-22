import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import './Recipe.css'
 import { ToastContainer, toast } from "react-toastify";
 import "react-toastify/dist/ReactToastify.css";

const Recipe = () => {
  const Recipe = useLoaderData()
  console.log(Recipe);
  const { chefName, chefPhoto, experience, likes, numRecipes, bio, recipes } =
    Recipe;
   const [clicked, setClicked] = useState(false);
  const handlefavorite = () => { 
    toast("Thanks for For Choosing!");
      setClicked(true);
  } 
  return (
    <div className="chef-container w-[95%] mx-auto">
      <div className="chef-info md:flex justify-between items-center px-7 mt-5 gap-5">
        <ToastContainer></ToastContainer>
        <img src={chefPhoto} alt="Gordon Ramsay" />
        <div className="">
          <h3 className="text-3xl">{chefName}</h3>
          <p>Bio:{bio}</p>
          <p>Experience:{experience}</p>
          <p>Number of Recipes: {numRecipes}</p>
          <p>Likes: {likes}</p>
        </div>
      </div>
      <table>
        <thead>
          <tr>
            <th>Recipe Name</th>
            <th>Ingredients</th>
            <th>Cooking Method</th>
            <th>Rating</th>
            <th>Favorite</th>
          </tr>
        </thead>
        <tbody>
          {recipes.map((info) => (
            <tr>
              <td className=''>{info.recipeName}</td>
              <td className="flex gap-3 items-center flex-wrap">
                {info.ingredients?.map((ingred) => (
                  <>
                    <span>{ingred}</span>
                  </>
                ))}
              </td>
              <td>{info.cookingMethod}</td>
              <td>{info.rating}</td>
              <td>
                <button onClick={handlefavorite} disabled={clicked}   className='btn'>Favorite</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Recipe;

