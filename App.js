import React from "react";
import ReactDOM from "react-dom/client";

const Logo=()=><img id="logo" src="https://logos-world.net/wp-content/uploads/2020/11/Flipkart-Logo.png"/>
const InputBox=()=> <input type="text" id="input"/>;
const Button=()=><button id="butt">Search</button>;
const User=()=><img id="user" src="https://static.vecteezy.com/system/resources/previews/022/587/873/non_2x/online-education-student-user-3d-illustration-kit-free-png.png"/>
const Header=()=>{
    return (
       <div id="header">
         <Logo/>
       <InputBox/>
        <Button/>
        <User/>
       </div>
    )
}


ReactDOM.createRoot(document.getElementById("bdy")).render(
    <Header/>
)