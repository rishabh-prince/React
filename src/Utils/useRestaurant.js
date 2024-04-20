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
        console.log(jsondata?.data?.cards[2]?.card?.card?.info);
        setRestaurant(jsondata?.data?.cards[2]?.card?.card?.info);
    }
    return restaurant;
}

export default useRestaurant;