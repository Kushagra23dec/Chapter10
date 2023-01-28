import React from "react";
const Shimmer = ()=>{
    return(
        <div className="flex flex-wrap justify-center">
        {Array(10).fill("").map((e,index)=>(
            <div key={index} className="w-52 h-52 m-5 bg-gray-400">

        </div> ) )}
        </div>
    );
}

export default Shimmer;