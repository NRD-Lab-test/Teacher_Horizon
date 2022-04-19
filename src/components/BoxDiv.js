import React from "react"
class BoxDiv extends(React.Component){
    // This loads the basic box used in the slot machines. Takes the prop backgroundColor.
    // It is a child component of "GameMachine"
    constructor(props){
        super(props)
    }
    render(){
        return <div style={{
            border: "solid black",
            borderWidth:".5vh",
            margin: ".5vh",
            backgroundColor:(this.props.backgroundColor ? this.props.backgroundColor: "white"),
            width: "5vh", 
            height:"5vh",
            alignItems:"center",justifyContent:"center",display:"flex",
            fontSize:"4.5vh",
            color:"black"}}>
        {this.props.heldValue}</div>
    }
}
export default BoxDiv