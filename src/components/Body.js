import {Restaurantcard} from "./Restaurantcard.js";
import {useState,useEffect} from "react";
import {Shimmer} from "./shimmerui.js";
import {Link} from "react-router-dom";


function filterData(searchinput,restaurants){
 return restaurants.filter(
    (restaurant)=> restaurant?.info?.name?.toLowerCase()?.includes(searchinput)
 );
}
const Message=()=>{
    return <h1>NO item matches to your filter</h1>
}
const Body=()=>{
    const [searchinput,setSearchinput]=useState("");
    
    const [allrestaurants,setAllRestaurants]=useState([]);
    const [filteredrestaurants,setFilteredRestaurants]=useState([]);
 
    useEffect(()=>{
        getrestaurants();
    },[]);
    async function getrestaurants(){
        const data= await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.0759837&lng=72.8776559&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        const jsondata= await data.json();
        console.log(jsondata);
        setAllRestaurants(jsondata?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setFilteredRestaurants(jsondata?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);   
    }
  
    if(allrestaurants?.length===0) return <Shimmer/>;
    
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
