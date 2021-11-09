import React, { useState } from 'react'

export default function Login() {
    var logged=false;

    const [username,setUn] =useState("")
    const [password,setPw] =useState("")

    return (
        <div>
            <p>Login</p>
            <input type="text" placeholder="Username" onChange={(e)=>{ setUn(e.target.value)}} />
            <input type="text" placeholder="Password" onChange={(e)=>{ setPw(e.target.value)}} />
            {/* <input type="text" placeholder="Password"onChange={updateP}/> */}
          <button onClick={()=>{
if(username=='abc' && password==123)
{
    alert("Login success");
var logged =true;
// set(logong:true)
}
else{alert("Wrong credentials")}
          }} >Login</button>
            
        </div>
    )
}
