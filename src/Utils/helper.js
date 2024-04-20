export function filterData(searchinput,restaurants){
    return restaurants.filter(
       (restaurant)=> restaurant?.info?.name?.toLowerCase()?.includes(searchinput)
    );
   }