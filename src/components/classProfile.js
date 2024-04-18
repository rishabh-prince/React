import React from "react";

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
    
   
    const data=await fetch("https://api.github.com/users/akshaymarch7");
    const jsondata=await data.json();
    console.log(jsondata);
    this.setState({
     userInfo:jsondata,
    });
    console.log("child componentdidmount");
   }
   componentDidUpdate(){
    console.log("child componentDidUpdate");
   }
   // it will unmount form DOM when we will move from this page other page and then this function will be called
   // All the cleaning of compnentDidupdate takes place in it.
   componentWillUnmount(){
    console.log("child componentWillUnmount");
   }
  render(){
    const {count}=this.state;
    console.log("render" + this.props.name);
    const {name,location,avatar_url}=this.state.userInfo;
    return <>
    <h2>Profile</h2>
    <img src={avatar_url}/>
    <h2>Name :{name}</h2>
    <h2>Location : {location}</h2>
    <h3>{count}</h3>
    <button onClick={
      ()=>{
        this.setState({
          count:1,
        },)
      }
    }>Click me</button>
    </>
  }
}
export default Profile;