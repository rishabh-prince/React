import React from "react";
import UserContext from "../Utils/Usercontext";

class Profile extends React.Component{
  constructor(props){
    super(props);
    this.state={
      userInfo:{
       name:"",
       location:"",
       avatar_url:""
      },
    };
    console.log("constructor "+this.props.name);
  }
  
  async componentDidMount(){
    const data=await fetch("https://api.github.com/users/rishabh-prince");
    const jsondata=await data.json();
    // console.log(jsondata);
    this.setState({
     userInfo:jsondata,
    });
    // console.log("child componentdidmount");
   }
   componentDidUpdate(){
    console.log("child componentDidUpdate");
   }
   // it will unmount form DOM when we will move from this page other page and then this function will be called
   // All the cleaning of compnentDidupdate takes place in it.
   componentWillUnmount(){
    // console.log("child componentWillUnmount");
   }
  render(){
    // console.log("render" + this.props.name);
    const {name,location,avatar_url}=this.state.userInfo;
    return <div className="flex justify-between m-5">
      <div>
    <h2 className="font-medium my-2">Profile</h2>
    
    <UserContext.Consumer>{({loggedInUser})=><h2>Name :{loggedInUser}</h2>}</UserContext.Consumer>
    <h2>Location : {location}</h2>
    </div>
    <img className="rounded-full w-52 h-52" src={avatar_url}/>
    </div>
  }
}
export default Profile;