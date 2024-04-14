import {useParams} from "react-router-dom";
import {useEffect,useState} from "react";
import { Shimmer } from "./shimmerui";
import { IMG_CDN_URL } from "../constants";
const RestaurantMenu=()=>{
    const params=useParams();
    const {resid}=params;
  
 
    const [restaurant,setRestaurant]=useState(null);
    useEffect(()=>{
        getRestaurant();
    },[])
    async function getRestaurant(){
        const data= await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=19.0759837&lng=72.8776559&catalog_qa=undefined&isMenuUx4=true&submitAction=ENTER&restaurantId="+resid);
        const jsondata= await data.json();
        console.log(jsondata?.data?.cards[2]?.card?.card?.info);
        setRestaurant(jsondata?.data?.cards[2]?.card?.card?.info);

    }
    if(!restaurant) return <Shimmer/>;
    return (
        <div className="restuarant">
            <h1>Restaurant id: {resid}</h1>
            <h2>{restaurant.name}</h2>
            <img src={IMG_CDN_URL+restaurant.cloudinaryImageId}/>
            <h3>{restaurant.areaName}</h3>
            <h2>{restaurant.city}</h2>
            
        </div>
    )
}
export default RestaurantMenu;