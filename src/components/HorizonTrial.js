import React from "react"
import GameMachine from "./GameMachine"
import KeyDisplay from "./KeyDisplay"
import Lever from "./Lever"
import "../style.css"
class HorizonTrial extends(React.Component){
    // example prop; props={trial:x,gameLength:x,machineVars:[{mu:x,sd:x,keyBind:a,color:x},{mu:x,sd:x,keyBind:b,color:y}],force=[]}
    // Takes in a trial (int) which specifies the trial number, gameLength (int) which specifies the number of subtrials in a trial,
    // machineVars (array of objects with methods mu, sd, keyBind, and color)) which specifies the variables in each of the slot machines,
    // and force (array of arrays) which specifies the index of each slot machine that is being forced to play. If nothing is passed for a trial,
    // all are valid choices.
    // this is a child component of "HorizonGame"
    constructor(props){
        super(props)
        this.subtrial=-1
        this.key_map=get_keys(this.props.machineVars)
        this.column_map=convert_to_column_map(this.props.machineVars)
        this.key_press =this.key_press.bind(this)
        this.advance_subtrial=this.advance_subtrial.bind(this)
        this.process_choice=this.process_choice.bind(this)
        this.nextTrial=this.nextTrial.bind(this)
        this.time=Date.now()
        this.data={meta_data:this.props,trial_data:[]}
        this.state={}
        this.advance_subtrial()
        for (var i =0; i<this.props.machineVars.length; i++){
            this.state[String(i)]={valid:this.column_map[String(i)].valid,discovered:[],description:this.column_map[String(i).description]}
        }
        this.state["total_points"]=this.props.total_points
        this.state["round_points"]=0
        this.nextPress=true
        this.keyup = true
    }
    componentDidMount(){
        //adds the event listener for the key press tied to the machine
        document.addEventListener("keyup",()=>this.keyup=true)
        document.addEventListener("keydown",this.key_press)
        this.trial_start_time=Date.now()
    }
    componentWillUnmount(){
        // removes the event listener for the key press tied to the machine
        document.removeEventListener("keyup",()=>this.keyup=true)
        document.removeEventListener("keydown",this.key_press)
    }
    componentDidUpdate(){
        this.trial_start_time=Date.now()
    }
    async key_press(event){
        // this takes a keypress event, maps it to the corresponding machine number
        if (this.nextPress && this.keyup){
        const key_press_time = Date.now()
        if (this.subtrial<this.props.gameLength){
            if (String(event.key) in this.key_map){
                if (this.column_map[String(this.key_map[event.key])].valid){
                    this.process_choice(String(this.key_map[String(event.key)]),key_press_time)
                }
            }
        }
    }}
    process_choice(column,key_press_time){
        // process_choice takes in a column number and updates the state of the trial to the next.
        this.advance_subtrial()
        let new_state={}
        let new_value=null
        for (var i=0;i<this.props.machineVars.length;i++){
            if (String(i)===column){
                new_value=get_random(this.column_map,column)
                this.column_map[String(i)].discovered.push(new_value)
            }else{
                this.column_map[String(i)].discovered.push("xx")
            }
            new_state[String(i)]={valid:this.column_map[String(i)].valid,discovered:this.column_map[String(i)].discovered}   
        }
        new_state["last_choice"]=column
        if (this.subtrial>this.props.force.length){
            new_state["total_points"]=this.state["total_points"]+new_value
            new_state["round_points"]=this.state["round_points"]+new_value
        }
        this.data.trial_data.push({choice: column, value: new_value, reaction_time: key_press_time-this.trial_start_time})
        this.setState(new_state)
        if (this.subtrial>=this.props.gameLength){
            setTimeout(this.nextTrial,1000)
        }
        this.nextPress=false
        this.keyup=false
        setTimeout(()=>this.nextPress=true,200)
    }
    nextTrial(){
        // this passes the next trial information into the parent component
        this.props.nextTrial(this.data,this.state.round_points)
    }

    advance_subtrial(){
        // moves the subtrial up by one, adds trial data to the experiment, and determines which columns are valid choices for next time
        this.subtrial+=1
        if (this.subtrial<this.props.force.length){
            for (var i=0; i<this.props.machineVars.length; i++){
                if (this.props.force[this.subtrial].includes(i)){
                    this.column_map[String(i)].valid=true
                }
                else{
                    this.column_map[String(i)].valid=false
                }
            }
        }else{
            for (var j=0; j<this.props.machineVars.length; j++){
                this.column_map[String(j)].valid=true
            }
        }
    }
    render(){
        // renders the trial
        var items=[]
        var num = null
        var to_animate=false
        for (var i=0;i<this.props.machineVars.length;i++){
            num=this.state[String(i)].discovered.length
            if (String(i)===this.state["last_choice"]){
                to_animate=true
            }else{
                to_animate=false
            }
            if (i==0){
                items.push(
                    <div key={i} style={{left:`calc(50vw + ${30*i - 25}vh)`, position:"absolute", top:"10vh"}} className="column">
                        <h2 style={{position:"relative", left:"2vh",fontSize:"4vh"}}>
                            {this.column_map[String(i)].description}
                        </h2>
                    <button onClick={this.button1} style={{backgroundColor:"transparent",outline:"none",border:"none"}}>
                        <div className="row">
                            <Lever key={"Lever "+String(this.props.trial)+";"+String(this.subtrial)} animate={to_animate} backgroundColor={this.column_map[String(i)].machineColor}/>
                            <GameMachine key={"Game Machine "+String(this.props.trial)+";"+String(this.subtrial)} index={num} valid={this.state[String(i)].valid} values={this.state[String(i)].discovered} gameLength={this.props.gameLength} machineColor={this.column_map[String(i)].machineColor}/>
                        </div>
                    </button>
                </div>)
            }
            else{
                items.push(
                    <div key={i} style={{left:`calc(50vw + ${30*i - 25}vh)`, position:"absolute", top:"10vh"}} className="column">
                        <h2 style={{position:"relative", left:"2vh",fontSize:"4vh"}}>
                            {this.column_map[String(i)].description}
                        </h2>
                    <button onClick={this.button2} style={{backgroundColor:"transparent",outline:"none",border:"none"}}>
                        <div className="row">
                            <Lever key={"Lever "+String(this.props.trial)+";"+String(this.subtrial)} animate={to_animate} backgroundColor={this.column_map[String(i)].machineColor}/>
                            <GameMachine key={"Game Machine "+String(this.props.trial)+";"+String(this.subtrial)} index={num} valid={this.state[String(i)].valid} values={this.state[String(i)].discovered} gameLength={this.props.gameLength} machineColor={this.column_map[String(i)].machineColor}/>
                        </div>
                    </button>
                </div>)
            } 
        }
        return(<div>
                    <h1 style={{textAlign:"center",width:"100%"}}>
                        {this.props.trialDescription}</h1>
                    <div className="row">{items}
                    </div>
                </div>)
    }
}
function get_keys(arr){
    //takes in the machine array, finds the keyBinds, and maps it to the column id.
    let vars={}
    for (var i=0;i<arr.length;i++){
        vars[String(arr[i].keyBind)]=i
    }
    return vars
}
function convert_to_column_map(arr){
    //takes in the machine array, and maps it into a column format with all the necessary variables
    let column_map={}
    for (var i=0;i<arr.length;i++){
        column_map[String(i)]={mu:arr[i].mu, sd:arr[i].sd, valid: false, discovered:[], machineColor:arr[i].color, description:arr[i].description}
    }
    return column_map
}
function box_mueller() {
    // all credit to stack exhange
    var u = 0, v = 0;
    while(u === 0) u = Math.random(); 
    while(v === 0) v = Math.random();
    return Math.sqrt( -2.0 * Math.log( u ) ) * Math.cos( 2.0 * Math.PI * v );
}
function get_random(arr,i){
    // gets a random number from normal dist with mean and sd as specified in the machine
    // parameters.
    let normal_dist=box_mueller()*arr[i].sd+arr[i].mu
    normal_dist=Math.max(Math.floor(normal_dist),1)
    normal_dist=Math.min(normal_dist,99)
    return normal_dist
}
export default HorizonTrial