import React from "react"
import BoxDiv from "./BoxDiv"
class GameMachine extends(React.Component){
    // GameMachine makes the body of the slot machine. It takes in the props of index (int) which is the current 
    // subtrial number, valid (boolian) which specifies if on this trial the machine can be selected, gameLength (int)
    // which is the length of the machine, machineColor (string) which is the color of the slot machine, delayNumberReveal which
    // specifies if there should be a delay in showing the most recent index, timeDelay which specifies the time delay if delayNumberReveal is true
    // and values (array) which is the display values in the boxes up until the current trial.
    // GameMachine is a child component of "Horizon Trial"
    constructor(props){
        super(props)
        this.delayedNumber=this.delayedNumber.bind(this)
        this.state={index:this.props.index-1}
        if (props.delayNumberReveal){
            this.delayedNumber(this.props.timeDelay)
        }
    }
    delayedNumber(timeDelay){
        // delays showing the number on the current index for a number of miliseconds specified by timeDelay
        setTimeout(()=>{this.setState({index:this.state.index+1})},timeDelay)
    }
    render(){
        // renders the game machine
        let current_index=this.state.index+1
        var gameBoxes=[]
        for(var i=0;i<this.props.gameLength;i++){
            let passedVars={}
            if (i<current_index){
                passedVars.heldValue=this.props.values[i]
            }
            if (i===current_index && this.props.valid){
                passedVars.backgroundColor="lawngreen"
            }
                gameBoxes.push(<BoxDiv key= {i} backgroundColor={passedVars.backgroundColor} heldValue={passedVars.heldValue}/>)
        }
        return(
        <div style={{border:`solid ${(this.props.machineColor)?this.props.machineColor:"black"} .8vh`}}>
            {gameBoxes}
        </div>)
    }
}
export default GameMachine