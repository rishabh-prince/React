import { useEffect ,useState } from "react";
import { FETCH_MENU_URL } from "../constants";
const useRestaurant=(resid)=>{
    const [restaurant,setRestaurant]=useState([]);
    useEffect(()=>{
        getRestaurantMenu();
    },[])
    async function getRestaurantMenu(){
        const data= await fetch(FETCH_MENU_URL+resid);
        const jsondata= await data.json();
        // console.log(jsondata);
        // console.log(jsondata?.data?.cards[3]?.groupedCard?.cardGroupMap?.REGULAR?.cards);
        const idx=jsondata?.data?.cards.length-1;
        setRestaurant([jsondata?.data?.cards[2]?.card?.card?.info,jsondata?.data?.cards[idx]?.groupedCard?.cardGroupMap?.REGULAR?.cards]);
    }
    return restaurant;
}

export default useRestaurant;