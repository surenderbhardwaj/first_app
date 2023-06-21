import React, { useState} from "react";

function Validation(){
    const[user,setUser] = useState("");
    const[password,setPassword] = useState("");
    const [ userErr,setUsererr] = useState(false);
    const [ passhendler, setPasshendler]= useState(false);
    function userLogin(e){

    }
    function userLogin(e){

        e.preventDefault();
        if(user.length<3 || password.length<3)
        {
            alert("user and password is not valid");
        }
        else
        {
            alert("all is good");
        }
        

    }
    function userHendler(e){
        const item = e.target.value;
        if(item.length<3)
        { 
            setUsererr(true)
        }
        else
        {
           setUsererr(false)
        }
       
        setUser(item)
    }
    function passHendler(e){
        const item = e.target.value;
        if(item.length <3)
        {
            setPasshendler(true);
        }
        else{
            setPasshendler(false);
        }
        setPassword(item)        
    }
    return(
        <div style={{textAlign:"center"}}>
            <form onSubmit={userLogin}>
                <input type ="text"  placeholder="Enter a name" onChange={userHendler} />{userErr? <span>user invalid</span>:null}<br/> <br/>
                <input type = "password" placeholder="Enter a password" onChange={passHendler} /> {passhendler? <span>user password not valid</span>:null}<br/> <br/>
                <button >Login</button>
            </form>
        </div>
    )
}
export default Validation;