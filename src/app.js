 import React,{lazy,Suspense,useState,useEffect} from "react";
 import ReactDOM from "react-dom/client";
 import Header from "./components/heading"; //we can use NewHeader on place of Header && heading.js is also fine
 import Body from "./components/Body";
//  import About from "./components/About";
 import Error from "./components/Error";
 import Contact from "./components/Contact";
 import Profile from "./components/Profile";
 import Profileclass from "./components/classProfile";
 import RestaurantMenu from "./components/RestaurantMenu";
 import Cart from "./components/Cart";
 import {Shimmer} from "./components/shimmerui";
 import {createBrowserRouter , RouterProvider , Outlet } from "react-router-dom";
 import UserContext from "./Utils/Usercontext";

const Instamart=lazy(()=>import("./components/Instamart"));
const About=lazy(()=>import("./components/About"));
 const AppLayout=()=>{
       const [userName,setUserName]=useState(null);
       useEffect(()=>{
              const data={
                     name:"Rishabh Singh",
              }
              setUserName(data.name);
       },[]);
        return (
          <UserContext.Provider value={{loggedInUser:userName,setUserName}}>
         <Header/>
         <Outlet/>
         
         </UserContext.Provider>
        ) ;
      };

      const approuter=createBrowserRouter([
       {
              path:"/",
              element:<AppLayout/>,
              errorElement:<Error/>,
              // {All chilren will go to outlet according to router}
              children:[  
                     {
                            path:"/",
                            element:<Body/>,
                     },
                     {
                            path:"/about",

                            element:(<Suspense fallback={<h1>Loading ...</h1>}>
                                   <About/>
                                   </Suspense>),
                            children:[
                                   {
                                          path:"profile",
                                          element:<Profile name={"Prince singh"} age={20}/>,
                                   },
                                   {
                                          path:"classprofile",
                                          element:<Profileclass name={"Rishabh Singh"} age={20}/>,
                                   },
                            ],
                     },
                     {
                            path:"/contact",
                            element:<Contact/>,
                     },
                     // Dynamic rendering id
                     {  
                            path:"/restaurant/:resid",
                            element:<RestaurantMenu/>,
                     },
                     {
                            path:"/instamart",
                            element:(<Suspense fallback={<Shimmer/>}>
                                   <Instamart/>
                                   </Suspense>),
                     },
                     {
                         path:"/Cart",
                         element:<Cart/>
                     },
              ],
       },
    
      ])
    const root=ReactDOM.createRoot(document.querySelector("#container"));
    root.render(<RouterProvider router={approuter}/>);