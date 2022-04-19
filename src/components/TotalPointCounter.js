import React from "react"
class TotalPointCounter extends(React.Component){
    // this renders the total point counter in the trial. It takes the props 
    // borderColor, width, and height which specify the counter box dimensions. In addition
    // it takes in points (which is the point number to display), description which gives the words
    // to display, and totalPoints
    // it is a child component of "HorizonTrial"
    constructor(props){
        super(props)
    }
    render(){
        return (<div style={{ position:"absolute",width:"38vh",height:"8vh",border:`solid ${this.props.borderColor} .5vh`,fontSize:"3.5vh",textAlign:"center",top:"2vh",left:"calc(50vw + 30vh)"}}>
                    {this.props.description+":"}
                    <div style={{display:"flex", flex:"row", justifyContent:"center"}}>
                        <div style={{color:"black"}}>
                            {this.props.points+"$"}
                        </div>
                        <div>/</div>
                        <div>
                            {this.props.totalPoints+"$"}
                        </div>
                    </div>
                </div>)
    }
}
export default TotalPointCounter