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
        <div className="search-container">
            <input type="text" className="search-input" placeholder="search for your favourite food" value={searchinput}
            onChange={(e)=>{
                setSearchinput(e.target.value);
            }}></input>
            <button className="search-button"
            onClick={()=>{
               const data=filterData(searchinput.toLowerCase(),allrestaurants);
               setFilteredRestaurants(data);
            }}>search</button>
            
        </div>
        <div className="restaurant-list">  
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
