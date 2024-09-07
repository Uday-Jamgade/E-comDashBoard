import { useState ,useEffect } from "react"
import { useNavigate } from "react-router-dom";


const Login=()=>{
    const [email,setEmail]=useState();
    const [password,setPassword]=useState();

    const navigate =useNavigate();

    const handelogin =async ()=> {
        let result =await fetch('http://localhost:5000/login',{
            method:'post',
            body:JSON.stringify({email,password}),
            headers:{
                'Content-Type' : 'application/json'
            }

        });

        result=await result.json();
        if(result.auth){
            localStorage.setItem("user",JSON.stringify(result.user));
            localStorage.setItem("user",JSON.stringify(result.auth));
            navigate('/')
        }else{
            alert("please enter connect details ")
        }
    }

    useEffect(()=>{
        const auth=localStorage.getItem('user');
        if(auth){
            navigate('/')
        }
     },[])

    return(
        <div className="login">

            <h1>Login</h1>

            <input type="text"   placeholder="Enter Email"  value={email}   onChange={(e)=>{setEmail(e.target.value)}}/>  
            <input type="password" placeholder="Enter Passward" value={password}   onChange={(e)=>{setPassword(e.target.value)}}/>

            <button  onClick={handelogin} className="appButton" type="button">Login</button>
        </div>
    )
}

export default Login;
