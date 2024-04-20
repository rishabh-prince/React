import {useState,useEffect} from "react";

const useGetrestaurant= ()=>{
    const [allrestaurants,setAllrestaurants]=useState(null);
    
    useEffect(()=>{
        getrestaurants();
    },[]);
    async function getrestaurants(){
        const data= await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.0759837&lng=72.8776559&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        const jsondata= await data.json();
        console.log(jsondata);
        setAllrestaurants(jsondata?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);    
    }
    
    return allrestaurants;
}
export default useGetrestaurant;