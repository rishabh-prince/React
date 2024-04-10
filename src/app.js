 import React from "react";
 import ReactDOM from "react-dom/client";
 import Header from "./components/heading"; //we can use NewHeader on place of Header && heading.js is also fine
 import Body from "./components/Body";
 import Footer from "./components/Footer";
 
 const AppLayout=()=>{
        return (
          <React.Fragment>
         <Header/>
         <Body/>
         <Footer/>
         </React.Fragment>
            
            ) ;
           };

    const root=ReactDOM.createRoot(document.querySelector("#container"));
    root.render(<AppLayout/>);