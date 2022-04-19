import React from "react"
import "../style.css"
class MobileDetector extends(React.Component){
    // This takes in a prop nextInstruction which calls a parent function to move to the next instruction.
    // This gives a button that allows the user to request to go fullscreen. It is a child component of "Horizon Game"
    constructor(props){
        super(props)
        this.isMobile=this.isMobile.bind(this)
        this.mobile = this.isMobile()
        this.orientation = this.orientation.bind(this)
        this.orientation()
    }
    componentDidMount(){
        this.detectListener = window.addEventListener("resize",this.orientation)
    }
    componentWillUnmount(){
        window.removeEventListener("resize",this.detectListener)
    }
    orientation(){
        if (window.innerWidth > window.innerHeight){
            var landscape= false
        }else{
            var landscape = true
        }
        if (landscape && this.mobile){
            this.props.setDevice(true)
        }
        if (!this.mobile){
            this.props.setDevice(false)
        }
    }
    isMobile() {
        if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
            return true
           }
        return /Macintosh/.test(navigator.userAgent) && 'ontouchend' in document
        }
    render(){
        if (this.mobile){
                return <div>
                    We have detected that you are on a mobile device. For the best viewing experience, please rotate your device to portait mode.
                </div>
        }
        else{
            return <div></div>
        }
}
}
export default MobileDetector