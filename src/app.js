 import React from "react";
 import ReactDOM from "react-dom/client";
 import Header from "./components/heading"; //we can use NewHeader on place of Header && heading.js is also fine
 import Body from "./components/Body";
 import Footer from "./components/Footer";
 import About from "./components/About";
 import Error from "./components/Error";
 import Contact from "./components/Contact";
 import RestaurantMenu from "./components/RestaurantMenu";


 import {createBrowserRouter , RouterProvider , Outlet } from "react-router-dom";
 
 
 const AppLayout=()=>{
        return (
          <React.Fragment>
         <Header/>
         <Outlet/>
         <Footer/>
         </React.Fragment>
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
                            element:<About/>,
                     },
                     {
                            path:"/contact",
                            element:<Contact/>,
                     },
                     {
                            path:"/restaurant/:resid",
                            element:<RestaurantMenu/>,
                     },
              ],
       },
    
      ])
    const root=ReactDOM.createRoot(document.querySelector("#container"));
    root.render(<RouterProvider router={approuter}/>);