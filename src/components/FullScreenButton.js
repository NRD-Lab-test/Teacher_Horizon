import React from "react"
import "../style.css"
class FullScreenButton extends(React.Component){
    // This takes in a prop nextInstruction which calls a parent function to move to the next instruction.
    // This gives a button that allows the user to request to go fullscreen. It is a child component of "Horizon Game"
    constructor(props){
        super(props)
        this.requestFullScreen=this.requestFullScreen.bind(this)
    }
    requestFullScreen() {
    var element=this.props.docVar
    var requestMethod = element.requestFullScreen || element.webkitRequestFullScreen || element.mozRequestFullScreen || element.msRequestFullScreen;
    if (requestMethod) {
    requestMethod.call(element)
    }
    this.props.nextInstruction()
    }
    render(){
            return <div>
                    <h1 style={{border:"solid black 5px", marginLeft:"100px", marginRight:"100px", textAlign:"center"}}>This experiment is best viewed in full screen, click the button below to go fullscreen and enter the experiment!</h1>
                    <div style={{display:"flex", justifyContent:"center"}}>
                        <button className="fullscreenbutton"style={{top:"150px"}} onClick={this.requestFullScreen}>Go Fullscreen</button>
                    </div>
                    </div>
    }
}
export default FullScreenButton