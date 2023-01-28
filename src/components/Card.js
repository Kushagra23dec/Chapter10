import React from "react";
import {IMG_CDN_URL} from "../contants.js";
const Card = ({ name,
                cuisines,
                cloudinaryImageId,
                totalRatingsString}) =>{
    //  console.log(restaurant.name);
    return(
        <div className="w-52 m-2 border border-black p-1 hover:shadow-lg cursor-pointer">
        
        <img src={IMG_CDN_URL+cloudinaryImageId}  />
        <h2 className="font-bold">{name}</h2>
        <h3>cuisines{cuisines.join(", ")}</h3>
        <h4>Ratings = {totalRatingsString}</h4>
         

        </div>
    );
}

export default Card;