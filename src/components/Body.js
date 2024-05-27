import {Restaurantcard,promotedrestaurant} from "./Restaurantcard.js";
import {useState,useEffect,useContext} from "react";
import {Shimmer} from "./shimmerui.js";
import {Link} from "react-router-dom";
import { filterData, Message} from "../Utils/helper.js";
import useOnline from "../Utils/useOnline.js";
import useGetrestaurant from "../Utils/useGetrestaurant.js";
import UserContext from "../Utils/Usercontext.js";

const Body=()=>{
    const [searchinput,setSearchinput]=useState("");
    
    const [filteredrestaurants,setFilteredRestaurants]=useState([]);
    const allrestaurants=useGetrestaurant();
    console.log(allrestaurants);
     useEffect(()=>{
      setFilteredRestaurants(allrestaurants);
     },[allrestaurants]);
     
     const {loggedInUser,setUserName}=useContext(UserContext);
    const IsOpen=promotedrestaurant(Restaurantcard);
    const isOnline=useOnline();
    if(!isOnline)
    { 
        return (<h1>Sorry , you are not connected to the internet !!!!</h1>);
     }
    
     if(!filteredrestaurants) return <Shimmer/>;
    
    return (
        <>
        <div className="search-container p-5 bg-slate-300 my-5 mx-2 flex justify-around">
            <div>
            <input type="text" className="focus:bg-green-200 w-80 h-10" placeholder=" search" value={searchinput}
            onChange={(e)=>{
                setSearchinput(e.target.value);
            }}></input>
            <button className="p-2 m-2 bg-purple-900 hover:bg-red-400 text-white rounded-md"
            onClick={()=>{
               const data=filterData(searchinput.toLowerCase(),allrestaurants);
               setFilteredRestaurants(data);
            }}>search</button>
            </div>
            <div className="p-2">
                <label className="bg-black text-white p-2 m-2 rounded-sm">User Name : </label>
                <input type="text" className="w-72 h-10 " placeholder=" Enter Username " value={loggedInUser}
                onChange={(e)=>{
                    setUserName(e.target.value);
                }}/>
            </div>
        </div>
        <div className="flex flex-wrap">  
          { 
          filteredrestaurants?.length===0?<Message/>:
          filteredrestaurants?.map((restaurant)=>{
               return <Link to={"/restaurant/"+restaurant.info?.id} key={restaurant.info?.id}>
                { restaurant?.info.isOpen?<IsOpen resdata={restaurant?.info}/>:
                <Restaurantcard reasdata={restaurant?.info} />}
                </Link>
           })
          }                        
        </div>
        </>
    );
};

export default Body;
