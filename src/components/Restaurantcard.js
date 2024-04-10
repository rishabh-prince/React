import {IMG_CDN_URL} from "../constants.js";

export const Restaurantcard = ({name,cloudinaryImageId,cuisines,avgRating})=>{
    
    return (
       <div className="card">
           <img src={IMG_CDN_URL+cloudinaryImageId}
               alt="image of restaurant"></img>
            <h2>{name}</h2>
            <h3>{cuisines?.join(" , ")}</h3> 
           <h3>{avgRating} Stars</h3>
       
       </div>
    );
};