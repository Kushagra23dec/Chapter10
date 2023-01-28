import React from "react";
const Shimmer = () => {
    return (
        <div className=" flex flex-wrap justify-center grow">
            {Array(12).fill("").map((e, index) => (
                // <div key={index} className=" animate-pulse w-52 h-52 m-5 bg-gray-400">

            <div key={index} class="border border-grey-300 shadow rounded-md m-4 p-4 max-w-sm w-52 ">
                    <div class="animate-pulse flex flex-col space-x-2">
                        <div class=" self-center bg-slate-700 h-28 w-44"></div>
                        <div class="flex-1 space-y-6 py-1">
                            <div class="h-2 bg-slate-700 rounded"></div>
                            <div class="space-y-3">
                                <div class="grid grid-cols-3 gap-4">
                                    <div class="h-2 bg-slate-700 rounded col-span-2"></div>
                                    <div class="h-2 bg-slate-700 rounded col-span-1"></div>
                                </div>
                                <div class="h-2 bg-slate-700 rounded"></div>
                            </div>
                        </div>
                    </div>
                </div>



        // </div> 
        ) )
}
        </div >
    );
}

export default Shimmer;