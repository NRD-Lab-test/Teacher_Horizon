import React from "react"
import "../style.css"
class Lever extends(React.Component){
    // this makes a lever that pulls like a slot machine. It takes props 
    // backgroundColor (string), delayAnimation (boolian) which delays the 
    // animation by a set time, animate which sets the lever to pull or not, 
    // timeDelay which sets the time delay for the lever pull.
    // Lever is a child component of "HorizonTrial"
    constructor(props){
        super(props)
        this.delayAnimation=this.delayAnimation.bind(this)
        if (props.delayAnimation){
            this.delayAnimation(this.props.timeDelay)
        }
        this.state={animate:this.props.animate}
    }
    componentDidMount(){
        this._mounted = true
    }
    componentWillUnmount(){
        this._mounted = false
    }
    delayAnimation(timeDelay){
        // this sets the animation to trigger with some time delay
        setTimeout(()=>{
            this.setState({animate:true})
        }, timeDelay)
    }
    render(){
        // this renders the lever.
        return <div>
                    <div className="lever_ball" style={{width:"4vh", height:"4vh", left:"-1.6vh",borderRadius:"50%", backgroundColor:this.props.backgroundColor, animation:(this.state.animate ? "ball_clink":""), animationDuration:(this.state.animate ? ".5s":"")}}>
                    </div>
                    <div className="lever_arm" style={{width:".8vh",height:"10vh",top:"26%", backgroundColor:this.props.backgroundColor, animation:(this.state.animate ? "arm_clink": ""), animationDuration:(this.state.animate ? ".5s":"")}}>
                    </div >
                    <div style={{position: "relative", width:"5vh", height:".8vh", backgroundColor:this.props.backgroundColor, top: "25%",left:"0px"}}>
                    </div>
                </div>
    }
}

export default Lever