import React from "react"
class PointCounter extends(React.Component){
    // this class is the simple counter button that appears in the horizon task.
    // It is a child component of "HorizonTrial"
    constructor(props){
        super(props)
    }
    render(){
        //renders the point counter
        return (<div style={{width:this.props.width,height:this.props.height,border:`solid ${this.props.borderColor} 2px`}}>
                    {this.props.description+":"}
                    <div style={{color:"green"}}>
                        {this.props.points+"$"}
                    </div>
                 </div>)
    }
}
export default PointCounter