export function filterData(searchinput,restaurants){
    return restaurants.filter(
       (restaurant)=> restaurant?.info?.name?.toLowerCase()?.includes(searchinput)
    );
   }
 export const Message=()=>{
      return <h1>NO item matches to your filter</h1>
  }