 import React from "react";
 import ReactDOM from "react-dom/client";
 import Header from "./components/heading"; //we can use NewHeader on place of Header && heading.js is also fine
 import Body from "./components/Body";
 import Footer from "./components/Footer";
 import About from "./components/About";
 import Error from "./components/Error";
 import Contact from "./components/Contact";
 import Profile from "./components/Profile";
 import Profileclass from "./components/classProfile";
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
              ],
       },
    
      ])
    const root=ReactDOM.createRoot(document.querySelector("#container"));
    root.render(<RouterProvider router={approuter}/>);