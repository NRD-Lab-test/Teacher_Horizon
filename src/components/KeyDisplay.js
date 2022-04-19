import React from "react"
class KeyDisplay extends(React.Component){
    // this displays a keyboard key value inside of a box. It is a child component of 'HorizonTrial'
    // The props passed are borderColor (string) and machineKey (string) which is a keyboard key.
    constructor(props){
        super(props)
    }
    render(){
        return (
            <div style={{position:"absolute",top:"calc(90vh + -100px)",width:"175px"}}>
                <div style={{position: "absolute", left:"30px",margin:"5px",padding:"5px", border:`solid ${this.props.borderColor} 2px`}}> Key: {this.props.machineKey}</div>
            </div>
        )
}}
export default KeyDisplay