import React from "react"
class MobileInstructionTemplate extends(React.Component){
    // This gives a template for instructions. It takes in the props: divs (which is an array of divs)
    // previousInstruction, nextInstruction which point to functions in the parent component to move
    // to the next and previous instructions, in addition previousInstructionKey and nextInstructionKey which
    // specify the next and previous key. This is a child component for "Horizon Game"
    constructor(props){
        super(props)
        this.nextInstruction=this.nextInstruction.bind(this)
        this.previousInstruction = this.previousInstruction.bind(this)
    }
    nextInstruction(){
        // this fires the parent function to move to the next instruction
        this.props.nextInstruction()
    }
    previousInstruction(){
        // this fires the parent function to move to the previous instruction
        this.props.previousInstruction((this.props.previousJump)?this.props.previousJump:1)
    }
    render(){
        var keys=[]
        // this renders the instruction set with all the divs passed and the previous and next trials.
        if (this.props.previousInstruction != null){
            keys.push(<button style = {{width:"75px", height:"100%",left:"0px",position:"absolute",top:"0px"}} onClick={this.previousInstruction}><div style={{textAlign:"center",width:"50px",height:"50px",borderRadius:"50%",border:"solid black 2px"}}>
            <h1 style={{top:"-7.5px",position:"relative",color:"black"}}>{"<"}</h1>
            </div></button>)
        }
        if (this.props.nextInstruction != null){
            keys.push(<button style = {{width:"75px", height:"100%",left:"calc(100vw - 75px)",position:"absolute",top:"0px",borderRadius:"0%"}} onClick={this.nextInstruction}>
                <div style={{textAlign:"center",width:"50px",height:"50px",borderRadius:"50%",border:"solid black 2px"}}>
                    <h1 style={{top:"-7.5px",position:"relative",color:"black"}}>{">"}</h1>
                    </div></button>)
        }
        return (
            <div>
                <div style= {{position:"absolute",textAlign:"center",width:"100%"}}>
                    {this.props.divs}
                </div>
                {keys}
            </div>
        )
    }}
export default MobileInstructionTemplate