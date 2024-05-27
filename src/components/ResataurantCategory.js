import Itemlist from "./Itemlists";
import {useState} from "react";

const Restaurantcategory=({data,showItems,setIndex})=>{
  
    const handleClick=()=>{
        setIndex(); 
    }
    return<div>
         <div className="w-7/12 bg-gray-50 shadow-lg p-4 mx-auto my-4">
        <div className="flex justify-between cursor-pointer" onClick={handleClick}>
            <span className="font-bold text-lg">{data?.title}({data?.itemCards?.length})</span>
            <span>⬇</span>
        </div>
            {showItems && <Itemlist Items={data.itemCards}/>}
        </div>
    </div>
}
export default Restaurantcategory;