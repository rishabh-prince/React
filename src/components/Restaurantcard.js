import {IMG_CDN_URL} from "../constants.js";

export const Restaurantcard = ({name,cloudinaryImageId,cuisines,avgRating})=>{
    
    return (
        // dynamically giving value in square bracket try to stick with native tailwind classes
       <div className="w-[200px] p-2 m-2 shadow-lg bg-li min-h-96 shadow-zinc-300">  
           <img src={IMG_CDN_URL+cloudinaryImageId}
               alt="image of restaurant"></img>
            <h2 className="font-bold text-xl">{name}</h2>
            <h3>{cuisines?.join(" , ")}</h3> 
           <h3>{avgRating} Stars</h3>
       
       </div>
    );
};