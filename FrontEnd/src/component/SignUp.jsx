import React, { useState,useEffect } from "react";
import { useNavigate } from "react-router-dom";

const SignUp=()=>{

    const [Name,setName]=useState();
    const [Email,setEmail]=useState();
    const [Password, setPassword]= useState();
    const Navigate=useNavigate();

    useEffect(()=>{
        const auth=localStorage.getItem('user');
        if(auth){
            Navigate('/')
        }
     },[])


    const collectData= async ()=>{
        console.warn(Name,Email,Password);
        let result = await fetch('http://localhost:5000/register',{
            method:'post',
            body:JSON.stringify({Name,Email,Password}),
            headers:{
                'Content-Type':'application/json'
            },
        });
        result=await result.json()
        localStorage.setItem("user",JSON.stringify(result));
        // localStorage.setItem("token",JSON.stringify(result.auth));
        if(result){
            Navigate('/')
        }
        
    } 


    return(  
        <div className=" sign-up">
            <h3>
                Register
            </h3>

            <input  type="text" placeholder="Enter Name" value={Name}  onChange={(e)=>{setName(e.target.value)}}/>
            <input type="text"  placeholder="Enter Email"  value={Email}   onChange={(e)=>{setEmail(e.target.value)}}/>  
            <input type="password" placeholder="Enter Passward" value={Password}   onChange={(e)=>{setPassword(e.target.value)}}/>

            <button  onClick={collectData}> Sign Up</button>
        </div>
    );
}

export default SignUp;  