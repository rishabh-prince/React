import {useState} from "react";

export const Title = ()=> (
    <a href="/">
    <img className="logo" src="https://yt3.ggpht.com/ytc/AKedOLSpK3T_2RxkMYb-pk9oENQB0NvYpeOdXRgQe8i5=s800-c-k-c0x00ffffff-no-rj" alt="food villa logo"></img>
    </a>
) ; //JSX CODE
const Header=()=>{
    const [isLoggedin,setIsLoggedin]=useState(false);
    return (<div className="header">
        <Title/>
        <div className="nav-items">
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Contact Us</li>
                <li>Cart</li>
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