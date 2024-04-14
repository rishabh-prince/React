import {useState} from "react";
import logoImg from "../assets/img/Foodvilla.png";
import {Link} from "react-router-dom";

export const Title = ()=> (
    <a href="/">
    <img className="logo" src={logoImg} alt="food villa logo"></img>
    </a>
) ; //JSX CODE
const Header=()=>{
    const [isLoggedin,setIsLoggedin]=useState(false);
    return (<div className="header">
        <Title/>
        <div className="nav-items">
            <ul>
                <Link to="/"><li>Home</li></Link>
                {/* <li><Link to="/About">About</Link></li> Both are same  */}
               <Link to="/about"> <li>About</li> </Link>
               <Link to="/contact"><li>Contact</li></Link>
               <Link to=""><li>Cart</li></Link>
            </ul>
        </div>
       {isLoggedin?<button onClick={()=>{
        setIsLoggedin(false);
       }}>Log out</button>
       :<button onClick={()=>{
        setIsLoggedin(true);
       }}>Log in</button>}


    </div>);
};
export default Header;