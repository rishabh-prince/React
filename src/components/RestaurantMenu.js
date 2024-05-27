import {useParams} from "react-router-dom";
import { Shimmer } from "./shimmerui";
import { IMG_CDN_URL } from "../constants";
import useRestaurant from "../Utils/useRestaurant";
import Restaurantcategory from "./ResataurantCategory";
import {useState} from "react";

const RestaurantMenu=()=>{
    
    const params=useParams();
    const {resid}=params;
  
    const [showIndex,setShowIndex]=useState(null);
 
    const restaurant=useRestaurant(resid);
    if(restaurant.length===0) return <Shimmer/>;
    const {cloudinaryImageId,name,sla,labels}=restaurant[0];
    const {maxDeliveryTime,minDeliveryTime}=sla;
    
    const categories=restaurant[1]?.filter((c)=>{
        return c.card?.card?.["@type"]==="type.googleapis.com/swiggy.presentation.food.v2.ItemCategory";
    })

    return (
        <div>
            <h1 className="text-center mt-10 text-2xl font-extrabold">Name : {name}</h1>
            <h1 className="text-center my-5 text-xl font-bold">Restaurant id: {resid}</h1>
            <div className="flex justify-center gap-x-3">
            <img className="w-80 h-52 rounded-lg" src={IMG_CDN_URL+cloudinaryImageId} alt="restaurant image"/>
            <div className="w-80">
                <h1 className="font-semibold">{labels["1"].title}:{labels[1].message}</h1>
                <h3>Expected delivery time : {minDeliveryTime} min to {maxDeliveryTime} min</h3>
            </div>
            </div>
            <div className="text-center">
           { categories?.map((category,index)=>{
            return <Restaurantcategory data={category?.card?.card}
             key={category?.card?.card?.title}
             showItems={index===showIndex?true:false}
             setIndex={()=>setShowIndex(index)}
             />
           })}
           </div>
        </div>
    )
}
export default RestaurantMenu;