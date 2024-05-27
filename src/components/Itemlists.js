import {IMG_CDN_URL} from "../constants";
const Itemlist=({Items})=>{

  return (
    <div>
       {Items.map((c)=>{
        return (
        <div key={c?.card?.info?.id} className="p-2 m-2 border-b-2 text-left flex justify-between">
        <div className="w-8/12">
        <div className="py-2">
              <span>{c?.card?.info?.name}</span>
              <span> - ₹ {c?.card?.info.price ? c?.card?.info.price/100 : c?.card?.info.defaultprice/100}</span>
            </div>
            <div className="text-xs">{c?.card?.info?.description}</div>
            </div>
            <div  className="w-3/12 h-40 m-2">
            <div className="absolute">
            <button className="p-1 bg-slate-400 rounded-lg shadow-lg">ADD</button>
            </div>
            <img className="w-11/12 h-36 mr-2" src= {IMG_CDN_URL+c?.card?.info?.imageId} alt="image"/>
            </div>
        </div>)
       })}
    </div>
  )
}
export default Itemlist;