import React from "react";
export default function FunctionProps(props) {
   return(
    <div>
        <h1> Function call like a props Component</h1>
        <button onClick={props.data}>click me</button>
    </div>
   ) 
   
}