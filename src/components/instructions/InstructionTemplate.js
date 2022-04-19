import React from "react"
class InstructionTemplate extends(React.Component){
    // This gives a template for instructions. It takes in the props: divs (which is an array of divs)
    // previousInstruction, nextInstruction which point to functions in the parent component to move
    // to the next and previous instructions, in addition previousInstructionKey and nextInstructionKey which
    // specify the next and previous key. This is a child component for "Horizon Game"
    constructor(props){
        super(props)
        this.nextInstruction=this.nextInstruction.bind(this)
        this.key_press=this.key_press.bind(this)
    }
    componentDidMount(){
        //this adds the key event listener to move between instructions
        if (!this.props.mobile){
            document.addEventListener("keydown",this.key_press)
        }
    }
    componentWillUnmount(){
        //this adds the key event listener to move between instructions
        if (!this.props.mobile){
            document.removeEventListener("keydown",this.key_press)
        }
    }
    key_press(event){
        console.log(event.key)
        // this takes a keypress event and moves to the next or previous trial respectively
        if (this.props.nextInstructionKey==="Space"){
            var instructionKey = " "
        }
        else{
           var instructionKey = this.props.nextInstructionKey
        }
        if (event.key===instructionKey){
            this.nextInstruction()
        }
        if(event.key===this.props.previousInstructionKey){
            this.previousInstruction()
        }
    }
    nextInstruction(){
        // this fires the parent function to move to the next instruction
        this.props.nextInstruction()
    }
    previousInstruction(){
        // this fires the parent function to move to the previous instruction
        console.log(this.props.previousJump)
        this.props.previousInstruction((this.props.previousJump)?this.props.previousJump:1)
    }
    render(){
        // this renders the instruction set with all the divs passed and the previous and next trials.
        var divs=[]
        var keys=[]
        for (var i=0;i<this.props.divs.length;i++){
            divs.push(this.props.divs[i])
        }
        if (this.props.mobile){
            if (this.props.previousInstructionKey != null){
                keys.push(<button style = {{width:"50px", height:"100%",left:"0px",position:"absolute",top:"0px"}}>{"<"}</button>)
            }
            if (this.props.nextInstructionKey != null){
                keys.push(<button style = {{width:"50px", height:"100%",left:"calc(100% - 50px)",position:"absolute",top:"0px"}}>{">"}</button>)
            }
            return (
                <div>
                    <div style= {{position:"absolute",textAlign:"center",width:"100%"}}>
                        {divs}
                    </div>
                    {keys}
                </div>
            )
        }
        else{
            if (this.props.previousInstructionKey){
                keys.push(<div key={"previous "+String(i)} style={{ width:"30vh", height:"5vh", border:"solid black .8vh", textAlign:"center", fontSize:"3vh", margin:"1vh"}}>{`Press ${this.props.previousInstructionKey} to go back`}</div>
                )
            }
            if (this.props.nextInstructionKey){
                keys.push(<div key={"next "+String(i)} style={{ width:"30vh", height:"5vh", border:"solid black .8vh", textAlign:"center", fontSize:"3vh", margin:"1vh"}}>{`Press ${this.props.nextInstructionKey} to continue`}</div>
                )
            }
        }
        return (
        <div>
            {divs}
        <div style={{display:"flex",flex:"row", position:"fixed", justifyContent:"space-evenly", bottom:"5%", width:"100%",left:"0vh",top:"90vh"}}>
            {keys}
        </div>
        </div>)
    }}
export default InstructionTemplate