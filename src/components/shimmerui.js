export const Shimmer=()=>{
  return (
    <div className="flex flex-wrap">
      {Array(10).fill("").map((e,index)=>
      <div key={index} className="w-64 min-h-80 p-2 mx-4 my-2 bg-slate-300"></div>)}
    </div>
  )
}
