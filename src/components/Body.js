import React, { useEffect, useState } from "react";
import Card from "./Card"; 
import {restaurantList} from "../contants.js";
import Shimmer from "./Shimmer.js";

 
    function filterData(searchtxt,restaurants) {

        if (searchtxt === "")  return  restaurants   
 
    const filterData =  restaurants.filter((restaurant)=>
                        {return restaurant?.data?.name?.toLowerCase()?.includes(searchtxt.toLowerCase());
    })

             
     return filterData;
  
        
    }
 
    
    const Body = ()=>{
        const [allRestaurants,setAllRestaurants] = useState([]);
        const [filteredRestaurants,setFilteredRestaurants] = useState([]);
        const [searchtxt,setSearchtxt]  = useState("");

        useEffect(()=>{
            getRestaurants();
        },[]);
        
        async function getRestaurants(){
            const response = await fetch('https://www.swiggy.com/dapi/restaurants/list/v5?lat=29.9456906&lng=78.16424780000001&page_type=DESKTOP_WEB_LISTING');

            const data = await response.json();
          

            setAllRestaurants(data?.data?.cards[2]?.data?.data?.cards);
            setFilteredRestaurants(data?.data?.cards[2]?.data?.data?.cards);
        }

        return( allRestaurants.length === 0) ?  <Shimmer />
        : (
        <div className="body-container">

            <div className="bg-red-500 p-4 flex justify-center gap-2 shado">

            <input className="p-1 rounded-md focus:bg-red-200" type="text" placeholder="Search" value={searchtxt} onChange={e=>{ setSearchtxt(e.target.value)}}  />

            <button className="bg-white rounded-md px-2 text-lg hover:bg-red-200" onClick={()=>{ 
                const data = filterData(searchtxt,allRestaurants)
            
                setFilteredRestaurants(data)
                 }}>Search</button>

            </div>

            <div className="flex flex-wrap border-black ml-5 mt-4">

            {filteredRestaurants.map((restaurant)=>{
                return(
                    <Card key={restaurant.data.id} {...restaurant.data} />
                );
            })}

           
             
            </div>
        </div>
    );
}

export default Body;