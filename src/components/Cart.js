import React from "react";
import Empty_cart from "../assets/empty_cart.svg";

const Cart = ()=>{
    return(
        <div className="grow flex justify-center items-center">
            <img className="w-1/4" src={Empty_cart} alt="Empty Cart" />
            <h1 className="text-2xl">Cart Is Empty</h1>
        </div>
    )
}

export default Cart;