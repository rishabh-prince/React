import {useState,useContext} from "react";
import logoImg from "../assets/img/Foodvilla.png";
import {Link} from "react-router-dom";
import useOnline from "../Utils/useOnline.js";
import UserContext from "../Utils/Usercontext.js";

export const Title = ()=> (
    <a href="/">
    <img className="h-28 pl-2" src={logoImg} alt="food villa logo"></img>
    </a>
) ; //JSX CODE
const Header=()=>{
    const [isLoggedin,setIsLoggedin]=useState(false);
    const isOnline=useOnline();

    const {loggedInUser}=useContext(UserContext);
    return (
    <div className="flex justify-between bg-pink-50 shadow-lg m-2">
        <Title/>
        <div className="flex">
        <h1 className="py-10">{isOnline? "✅Online" : "❌Offline" }</h1>
            <ul className="flex py-10 px-2">
                <Link to="/"><li className="px-2">Home</li></Link>
                <Link to="/Instamart"><li className="px-2">Instamart</li></Link>
                {/* <li><Link to="/About">About</Link></li> Both are same  */}
               <Link to="/about"> <li className="px-2">About</li> </Link>
               <Link to="/contact"><li className="px-2">Contact</li></Link>
               <Link to="/Cart"><li className="px-2">Cart</li></Link>
            </ul>
            <div className="py-10 px-2">
       {isLoggedin?<button  onClick={()=>{
        setIsLoggedin(false);
       }}>Log out</button>
       :<button onClick={()=>{
        setIsLoggedin(true);
       }}>Log in</button>}
       </div>
       <div className="px-2 py-10">{loggedInUser}</div>
        </div>
       
       


    </div>);
};
export default Header;