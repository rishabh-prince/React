import {useParams} from "react-router-dom";
import { Shimmer } from "./shimmerui";
import { IMG_CDN_URL } from "../constants";
import useRestaurant from "../Utils/useRestaurant";
const RestaurantMenu=()=>{
    const params=useParams();
    const {resid}=params;
  
 
    const restaurant=useRestaurant(resid);
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