import React, {useState} from "react";
import { Link } from "react-router-dom";
import  logo from  "../assets/FoodHeavenlogo.png"; 

const Nav = () =>{
    const  [login,setLogin] = useState(false);
    return(
        <div className="flex justify-between bg-pink-200 shadow">
            <Link  to="/"><img className="w-52 my-1" src={logo} alt="logo"/></Link>
            <ul className="flex my-4">
                <li><Link className="mx-5" to="/about">About-Us</Link></li>
                <li><Link className="mx-5" to="/contact">Contact-Us</Link></li>
                <li> <Link className="mx-5" to="/cart">Cart</Link>   </li>
                <li> <button className="mx-5" onClick={e=>(login===false?setLogin(true):setLogin(false))} >{login===false?"Login":"Logout"}</button></li>
            </ul>
        </div>
    );
}

export default Nav;