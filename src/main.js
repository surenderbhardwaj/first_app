import React from "react";
import { CommanContext } from "./commanContext";
class Main extends React.Component{
    render(){
        return(
            <CommanContext.Consumer>
                {
                    ({color})=>(
                        <h2 style={{background:color}}>hello surender we are chasing this point</h2>
                    )
                }
            </CommanContext.Consumer>
        )
    }
}
export default Main;