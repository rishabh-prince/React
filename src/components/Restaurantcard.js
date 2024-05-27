import {IMG_CDN_URL} from "../constants.js";

export const Restaurantcard = (props)=>{
    const {name,cloudinaryImageId,cuisines,avgRating}=props.resdata;
    return (
        // dynamically giving value in square bracket try to stick with native tailwind classes
       <div className="w-[200px] p-2 m-4 shadow-lg bg-slate-600 text-white text-center min-h-96 shadow-zinc-300 hover:scale-110 transition duration-300">  
           <img src={IMG_CDN_URL+cloudinaryImageId}
               alt="image of restaurant"></img>
            <h2 className="font-bold text-xl">{name}</h2>
            <h3>{cuisines?.join(" , ")}</h3> 
           <h3>{avgRating} Stars</h3>
       
       </div>
    );
};
export const promotedrestaurant=(Restaurantcard)=>{
    return (props)=>{
        return (<>
        <h3 className="absolute bg-black text-white p-2 rounded-lg">Open</h3>
        <Restaurantcard  resdata={props?.resdata}/>
        </>
        )
    }
}