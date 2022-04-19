import React from "react"
import Lever from "../Lever"
class PullingLever extends(React.Component){
    constructor(props){
        super(props)
        this.state = {timer:0}
        this.timerUpdate = this.timerUpdate.bind(this)
        this.timer = 0
        this.timerUpdate()
    }
    timerUpdate(){
        this.timer+=1
        if (this.timer<20){
            setTimeout(this.timerUpdate,2000)
            this.setState({timer:this.state.timer+1})
        }
    }
    render(){
        return <Lever key={"lever"+String(this.state.timer)} animate={false} backgroundColor={"blue"} delayAnimation={true} timeDelay={1000}/>
    }
}
export default PullingLever