import {Restaurantcard} from "./Restaurantcard.js";
import {useState,useEffect} from "react";
import {Shimmer} from "./shimmerui.js";
import {Link} from "react-router-dom";
import { filterData } from "../Utils/helper.js";
import useOnline from "../Utils/useOnline.js";
import useGetrestaurant from "../Utils/useGetrestaurant.js";



const Message=()=>{
    return <h1>NO item matches to your filter</h1>
}
const Body=()=>{
    const [searchinput,setSearchinput]=useState("");
    
    // const [allrestaurants,setAllRestaurants]=useState([]);
    const [filteredrestaurants,setFilteredRestaurants]=useState([]);
    const allrestaurants=useGetrestaurant();
     useEffect(()=>{
      setFilteredRestaurants(allrestaurants);
     },[allrestaurants]);
  

    const isOnline=useOnline();
    if(!isOnline)
    { 
        return (<h1>Sorry , you are not connected to the internet !!!!</h1>);
     }
    
     if(!filteredrestaurants) return <Shimmer/>;
    
    return (
        <>
        <div className="search-container p-5 bg-pink-50 my-5 mx-2 ">
            <input type="text" className="focus:bg-green-200" placeholder="search" value={searchinput}
            onChange={(e)=>{
                setSearchinput(e.target.value);
            }}></input>
            <button className="p-2 m-2 bg-purple-900 hover:bg-red-400 text-white rounded-md"
            onClick={()=>{
               const data=filterData(searchinput.toLowerCase(),allrestaurants);
               setFilteredRestaurants(data);
            }}>search</button>
            
        </div>
        <div className="flex flex-wrap">  
          { 
          filteredrestaurants?.length===0?<Message/>:
          filteredrestaurants?.map((restaurant)=>{
               return <Link to={"/restaurant/"+restaurant.info?.id} key={restaurant.info?.id}>
                <Restaurantcard{...restaurant?.info} />
                </Link>
           })
          }                        
        </div>
        </>
    );
};

export default Body;
