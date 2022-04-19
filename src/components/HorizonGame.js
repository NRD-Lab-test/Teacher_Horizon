import React from "react"
import HorizonTrial from "./HorizonTrial"
import MobileHorizonTrial from "./MobileHorizonTrial"
import MobileTotalPointCounter from "./MobileTotalPointCounter"
import InstructionTemplate from "./instructions/InstructionTemplate"
import Lever from "./Lever"
import GameMachine from "./GameMachine"
import FullScreenButton from "./FullScreenButton"
import Endscreen from "./Endscreen"
import Make_Bandits from "./GameGenerator"
import Initiate from "./Initiate"
import InstructionTrial from "./instructions/InstructionTrial"
import TotalPointCounter from "./TotalPointCounter"
import PointCounter from "./PointCounter"
import desktopInstructionGen from "./instructions/DesktopInstructions"
import mobileInstructionGen from "./instructions/MobileInstructions"
import MobileDetector from "./MobileDetector"
import "../style.css"
const givenTemplateKey = "College_Horizon"
class HorizonGame extends(React.Component){
    //this class loads the Horizon Game including the instructions. There are no props passed
    constructor(props){
        super(props)
        this.nextTrial=this.nextTrial.bind(this)
        this.nextInstruction=this.nextInstruction.bind(this)
        this.previousInstruction=this.previousInstruction.bind(this)
        this.getExiusObj=this.getExiusObj.bind(this)
        this.sendDataToExius=this.sendDataToExius.bind(this)
        this.nextInstructionTrial=this.nextInstructionTrial.bind(this)
        this.mobileInstructions=this.mobileInstructions.bind(this)
        this.setDevice = this.setDevice.bind(this)
        this.gameData=[]
        this.csvData="trial,game_length,bandit_force,sd,mu_0,mu_1,"
        for (var i=0;i<10;i++){
            this.csvData+=`subtrial_${i}_choice, subtrial_${i}_rt, subtrial_${i}_value,`
        }
        this.csvData=this.csvData.substring(0,this.csvData.length-1)
        this.csvData+="\n"
        this.totalPoints=0
        this.terminationPoints=4000
        this.state={currentTrial:79,instructionNumber:0,isFullScreen:false,instructionPoints:0,instructionSubtrial:0,mobileCheck:false,mobile:false,instructions:[]}
        this.writeKey=null
        this.id=null
        this.instructionVars=[
            {gameLength:10,machineVars:[{mu:20,sd:8,keyBind:"ArrowLeft",color:"red", description:"Bandit 1"},{mu:10,sd:8,keyBind:"ArrowRight",color:"blue",description:"Bandit 2"}],force:[[0],[1],[1],[1]],trialDescription:"Instruction Trial 1 of 4", addedMetaData:{gameLength:10,forcedBandit:[["main"],["other"],["other"],["other"]],mainBandit:"0",mu:20, sd:8,deltaMu:-10}},
            {gameLength:5,machineVars:[{mu:60,sd:8,keyBind:"ArrowLeft",color:"red", description:"Bandit 1"},{mu:40,sd:8,keyBind:"ArrowRight",color:"blue",description:"Bandit 2"}],force:[[0],[1],[1],[0]],trialDescription:"Instruction Trial 2 of 4",addedMetaData:{gameLength:5,forcedBandit:[["other"],["main"],["main"],["other"]],mainBandit:"1",mu:40, sd:8,deltaMu:20}},
            {gameLength:5,machineVars:[{mu:60,sd:8,keyBind:"ArrowLeft",color:"red", description:"Bandit 1"},{mu:45,sd:8,keyBind:"ArrowRight",color:"blue",description:"Bandit 2"}],force:[[1],[1],[0],[1]],trialDescription:"Instruction Trial 3 of 4",addedMetaData:{gameLength:5,forcedBandit:[["main"],["other"],["main"],["other"]],mainBandit:"0",mu:60, sd:8,deltaMu:-15}},
            {gameLength:10,machineVars:[{mu:70,sd:8,keyBind:"ArrowLeft",color:"red", description:"Bandit 1"},{mu:40,sd:8,keyBind:"ArrowRight",color:"blue",description:"Bandit 2"}],force:[[0],[1],[0],[1]],trialDescription:"Instruction Trial 4 of 4",addedMetaData:{gameLength:10,forcedBandit:[["other"],["main"],["other"],["main"]],mainBandit:"1",mu:40, sd:8,deltaMu:30}},
        ]
        let gameTrials=Make_Bandits()
        this.game=gameTrials
        /*
        {gameLength:8,machineVars:[{mu:3,sd:4,keyBind:"ArrowLeft",color:"red", description:"Bandit 1"},{mu:3,sd:4,keyBind:"ArrowRight",color:"blue",description:"Bandit 2"}],force:[[0],[1],[1],[1]],trialDescription:"Normal Horizon"},
        {gameLength:8,machineVars:[{mu:3,sd:4,keyBind:"ArrowLeft",color:"red", description:"Bandit 1"},{mu:3,sd:4,keyBind:"ArrowRight",color:"blue",description:"Bandit 2"}],force:[[1],[0],[0],[1]],trialDescription:"Normal Horizon"},
        {gameLength:8,machineVars:[{mu:3,sd:4,keyBind:"1",color:"red", description:"Teaching Option 1"},{mu:3,sd:4,keyBind:"2",color:"blue",description:"Teaching Option 2"},{mu:3,sd:4,keyBind:"3",color:"purple",description:"Teaching Option 3"},{mu:3,sd:4,keyBind:"4",color:"#E75480",description:"Teaching Option 4"}],force:[[0],[1]],trialDescription:"Teaching Stuff 1!"},
        {gameLength:4,machineVars:[{mu:3,sd:4,keyBind:"1",color:"red", description:"Teaching Option 1"},{mu:3,sd:4,keyBind:"2",color:"blue",description:"Teaching Option 2"},{mu:3,sd:4,keyBind:"3",color:"purple",description:"Teaching Option 3"}],force:[[1,2],[1]],trialDescription:"More Teaching Stuff!"},
        {gameLength:8,machineVars:[{mu:3,sd:4,keyBind:"1",color:"red", description:"Teaching Option 1"},{mu:3,sd:4,keyBind:"2",color:"blue",description:"Teaching Option 2"},{mu:3,sd:4,keyBind:"3",color:"purple",description:"Teaching Option 3"}],force:[[1,2],[1]],trialDescription:"More Teaching Stuff!"}
        */
    }
    nextInstructionTrial(data,round_points){
        console.log("Next Instruction Trial")
        let metaData=data.meta_data
        let trialParams=data.meta_data.addedMetaData
        //"trial,game_length,bandit_force,sd,mu_0,mu_1,"
        let usefulData={trial:metaData.trial,gameLength:metaData.gameLength, banditForce:metaData.force, sd:8, mu0:metaData.machineVars[0].mu, mu1:metaData.machineVars[1].mu}
        for (const trial of [...Array(data.trial_data.length).keys()]){
            usefulData[`subtrial_${trial}_choice`]=data.trial_data[trial].choice
            usefulData[`subtrial_${trial}_rt`]=data.trial_data[trial].reaction_time
            usefulData[`subtrial_${trial}_value`]=data.trial_data[trial].value
        }
        this.gameData.push(usefulData)
        this.csvData+=JSON_To_CSV(usefulData)
        this.sendDataToExius(this.csvData)
        let instructionPoints=Math.floor(round_points/(data.trial_data.length-4))
        this.setState({instructionNumber:this.state.instructionNumber+1,instructionPoints:this.state.instructionPoints+instructionPoints})
    }
    nextTrial(data,round_points){
        // This advances the game to the next trial. It gets fired from it's child component, HorizonTrial.
        let metaData=data.meta_data
        let usefulData={trial:metaData.trial,gameLength:metaData.gameLength, banditForce:metaData.force, sd:8, mu0:metaData.machineVars[0].mu, mu1:metaData.machineVars[1].mu}
        for (const trial of [...Array(data.trial_data.length).keys()]){
            usefulData[`subtrial_${trial}_choice`]=data.trial_data[trial].choice
            usefulData[`subtrial_${trial}_rt`]=data.trial_data[trial].reaction_time
            usefulData[`subtrial_${trial}_value`]=data.trial_data[trial].value
        }        
        this.gameData.push(usefulData)
        this.csvData+=JSON_To_CSV(usefulData)
        this.sendDataToExius(this.csvData)
        this.totalPoints+=Math.floor(round_points/(data.trial_data.length-4))
        console.log("next Trial")
        if (this.totalPoints > this.terminationPoints){
            this.setState({currentTrial:this.game.length})
        }
        else{
            this.setState({currentTrial:this.state.currentTrial+1})
        }
    }
    getExiusObj(exiusObj,id, archive){
        this.exius=exiusObj
        this.id=id
        this.archive = archive
    }

    desktopInstructions(){
        let instr = desktopInstructionGen(this.nextInstruction,this.previousInstruction,this.terminationPoints)
        let newInstr = [
                <Initiate key={-1} getExiusObj={this.getExiusObj} nextInstruction={this.nextInstruction}/>,
                <FullScreenButton key={0} docVar={document.documentElement} nextInstruction={this.nextInstruction}/>,
                ...instr
        ]
        return newInstr   
    }
    mobileInstructions(){
        let instr = mobileInstructionGen(this.nextInstruction,this.previousInstruction,this.terminationPoints)
        let newInstr = [
                <Initiate key={-2} getExiusObj={this.getExiusObj} nextInstruction={this.nextInstruction}/>,
                <FullScreenButton key={0} docVar={document.documentElement} nextInstruction={this.nextInstruction}/>,
                ...instr
        ]
        return newInstr   
    }
    async sendDataToExius(CSVData){
        try{
            console.log(CSVData)
            let dateStart=Date.now()
            await this.exius.writeFile("horizon",`Subject_${this.id}.json`,CSVData)
            let dateEnd=Date.now()
            console.log(dateStart-dateEnd)
        }
        catch(e){
            console.log(e)
            console.log("data send fail")
        }
    }
    nextInstruction(instructionJump=1){
        // This moves the instruction set to the next in the sequence
        this.setState({instructionNumber:this.state.instructionNumber+instructionJump})
    }
    previousInstruction(instructionJump=1){
        // This moves the instruction set to the previous in the sequence
        this.setState({instructionNumber:this.state.instructionNumber-instructionJump})
    }
    setDevice(mobile){
        if (mobile){
            this.setState({mobile:mobile,mobileCheck:true,instructions:this.mobileInstructions()})
        }else{
            this.setState({mobile:mobile,mobileCheck:true,instructions:this.desktopInstructions()})
        }
    }
    render(){
        //render renders the current game screen.
        if (!this.state.mobileCheck){
            return <MobileDetector setDevice = {this.setDevice}/>
        }
       if (this.state.instructionNumber<this.state.instructions.length){
           let instructionBegin=33
           if (instructionBegin<=this.state.instructionNumber && this.state.instructionNumber<=instructionBegin+3){
               if (!this.state.mobile){
                    return(
                        <div>
                            <h1 style={{position: "absolute"}} >
                                <TotalPointCounter points={this.state.instructionPoints} borderColor="black" description="Total Money Earned" totalPoints={this.terminationPoints}/>
                        </h1>
                        <HorizonTrial key={`instructionTrial ${this.state.instructionNumber-instructionBegin}`} 
                            trial={`instruction ${this.state.instructionNumber -instructionBegin}`} {...this.instructionVars[this.state.instructionNumber -instructionBegin]}
                            total_points={this.state.instructionPoints} 
                            nextTrial={this.nextInstructionTrial}
                            terminationPoints={this.terminationPoints}/>
                        </div>
                    )
               }
                else{
                    return(
                        <div>
                            <h1 style={{position: "absolute"}}>
                                <MobileTotalPointCounter points={this.state.instructionPoints} borderColor="black" description="Total Money Earned" totalPoints={this.terminationPoints}/>
                            </h1>
                            <MobileHorizonTrial key={`instructionTrial ${this.state.instructionNumber-instructionBegin}`} 
                                trial={`instruction ${this.state.instructionNumber -instructionBegin}`} {...this.instructionVars[this.state.instructionNumber -instructionBegin]}
                                total_points={this.state.instructionPoints} 
                                nextTrial={this.nextInstructionTrial}
                                terminationPoints={this.terminationPoints}/>
                        </div>
                    )
               }
           }
           else{
            return this.state.instructions[this.state.instructionNumber]
           }
        }
        else if (this.state.currentTrial<this.game.length){
            if (!this.state.mobile){
                return (
                    <div>
                        <h1 style={{position: "absolute"}}>
                                <TotalPointCounter points={this.totalPoints} width="300px" height="75px" borderColor="black" description="Total Money Earned" totalPoints={this.terminationPoints}/>
                        </h1>
                        <HorizonTrial key={"Trial "+String(this.state.currentTrial)} 
                            trial={this.state.currentTrial} {...this.game[this.state.currentTrial]} 
                            total_points={this.totalPoints} 
                            nextTrial={this.nextTrial} 
                            terminationPoints={this.terminationPoints}/>
                    </div>
                )
            }
            else{
                return (
                    <div>
                        <h1 style={{position: "absolute"}}>
                                <MobileTotalPointCounter points={this.totalPoints} borderColor="black" description="Total Money Earned" totalPoints={this.terminationPoints}/>
                        </h1>
                        <MobileHorizonTrial key={"Trial "+String(this.state.currentTrial)} 
                            trial={this.state.currentTrial} {...this.game[this.state.currentTrial]} 
                            total_points={this.totalPoints} 
                            nextTrial={this.nextTrial} 
                            terminationPoints={this.terminationPoints}/>
                    </div>
                )
            }
          }
        else {
            return <Endscreen money={this.totalPoints} data={this.csvData} archive={this.archive}/>
        }
        }
}         
function JSON_To_CSV(usefulData){
    let usefulDataClone=JSON.parse(JSON.stringify(usefulData))
    let trialData=usefulDataClone
    let trialString=""
    let fullString=""
    console.log(trialData)
    for (const trial of Object.values(trialData)){
        trialString +=`"${trial}",`
    }
    if (trialData.length==21){
        trialString+=",,,,,,,,,,,,,,,"
    }
    let finalTrialString=trialString.substring(0,trialString.length-1)+"\n"
    return finalTrialString

}
function Stringify_Single_Quotes(data){
    let JSON_single="{"
    for (const [key,value] of Object.entries(data)){
        JSON_single+=`${key}:${value},`
    }
    let JSON_Stringed=JSON_single.substring(0,JSON_single.length-1)
    JSON_Stringed+="}"
    return JSON_Stringed
}

export default HorizonGame