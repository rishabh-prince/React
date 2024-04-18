import {Outlet} from "react-router-dom";
import React from "react";
import Profile from "./classProfile";

// const About=()=>{
//     return (<>
//     <h1>This is Namaste React Course</h1>
//     <Outlet/>
//     </> );
// };
class About extends React.Component{
   constructor(props){
    super(props);
    console.log("{Parent - ctor");
   }
   componentDidMount(){
    console.log("parent-componentDidMount");
  }
    render(){
        console.log("parent-render");
        return  (<>
             <h1>This is Namaste React Course</h1>
             <Profile name={"child"}/>
             
               </> );
    }
}
export default About;

/*
* Parent - ctor
* parent-render
* constructor First-Child
* renderFirst-Child
* constructor Second-Child
* renderSecond-Child
* componentDidMount First-Child
* componentDidMount Second-Child
* parent-componentdidmount
*/