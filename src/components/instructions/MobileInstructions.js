import React from "react"
import MobileInstructionTemplate from "./MobileInstructionTemplate"
import MobileInstructionTrial from "./MobileInstructionTrial"
import PullingLever from "./PullingLever"
import GameMachine from "../GameMachine"
import Lever from "../Lever"
import TotalPointCounter from "../MobileTotalPointCounter"
function mobileInstructionGen(nextInstruction,previousInstruction,terminationPoints){
    return (
        [
             <MobileInstructionTemplate key={1} divs={
                 [<h1 key={"Header 1"} style={{left:"75px",textAlign:"center",position:"absolute",top:"20vh", fontSize:"min(15vh,15vw)",width:"calc(100% - 150px)"}}>Gambling Task</h1>,
                <h1 key={"Support 1"} style={{left:"75px",textAlign:"center",position:"absolute",top:"80vh", fontSize:"min(5vh,5vw)",width:"calc(100% - 150px)"}}>Press the right side of your screen to start the experiment</h1>]
                } nextInstruction={nextInstruction}/>,
            <MobileInstructionTemplate key={2} divs={[<h1 key={"Header 21"} style={{position:"relative",top:"20vh", textAlign:"center"}}>Welcome!</h1>,
                <h1 key={"Header 22"} style={{position:"relative",top:"35vh",textAlign:"center",margin:"100px"}}>Thank you for volunteering for this experiment</h1>]} nextInstructionKey="Space" previousInstructionKey="b" nextInstruction={nextInstruction} previousInstruction={previousInstruction}/>,
            <MobileInstructionTemplate key={3} divs={[
                <h1 key={"Header 4"} style={{position:"relative",top:"2vh",textAlign:"center", margin:"100px", fontSize:"3vh"}}>{"In this experiment - the gambling task - we would like you to choose between two one-armed bandits (i.e. slot machines) of the sort you might find in a casino."}</h1>]} nextInstructionKey="Space" previousInstructionKey="b" nextInstruction={nextInstruction} previousInstruction={previousInstruction}/>,
            <MobileInstructionTemplate key={4} divs={[
                <h1 key={"Header 5"} style={{position:"relative",top:"2vh", textAlign:"center", marginLeft:"200px", marginRight:"200px", height:"100px",fontSize:"3vh"}}>{"The one-armed bandits will be represented like this:"}</h1>,
                <div className="row" style={{justifyContent:"space-evenly",alignItems:"center"}}>
                    <div className="column">
                        <div className="row" style={{position:"absolute", top:"40vh",left:"calc(50vw - 23vh)"}}>
                            <Lever key={51} animate={false} backgroundColor={"red"}/>
                            <GameMachine key={5} index={0} valid={false} values={[]} gameLength={5} machineColor={"red"}/>
                        </div>
                    </div>
                    <div className="column">
                        <div className="row" style={{position:"absolute", top:"40vh",left:"calc(50vw + 5vh)"}}>
                            <Lever key={52} animate={false} backgroundColor={"blue"}/>
                            <GameMachine key={6} index={0} valid={false} values={[]} gameLength={5} machineColor={"blue"}/>
                        </div>
                    </div>
                </div>]} nextInstructionKey="Space" nextInstruction={nextInstruction} previousInstructionKey="b" previousInstruction={previousInstruction}/>,
            <MobileInstructionTemplate key={5} divs={[
                <h1 key={"Header 6"} style={{position:"relative",top:"2vh", textAlign:"center", marginLeft:"100px", marginRight:"100px",height:"100px",fontSize:"3vh"}}>{"Everytime you choose to play a particular bandit, it will be pulled like this..."}</h1>,
                <div className="row" style={{justifyContent:"space-evenly",alignItems:"center"}}>
                    <div className="column">
                        <div className="row" style={{position:"absolute", top:"40vh",left:"calc(50vw - 23vh)"}}>
                            <Lever key={51} animate={false} backgroundColor={"red"}/>
                            <GameMachine key={52} index={0} valid={false} values={[]} gameLength={5} machineColor={"red"} />
                        </div>
                    </div>
                    <div className="column">
                        <div className="row" style={{position:"absolute", top:"40vh",left:"calc(50vw + 5vh)"}}>
                            <PullingLever/>
                            <GameMachine key={"machine"} index={0} valid={false} values={[]} gameLength={5} machineColor={"blue"}/>
                        </div>
                    </div>
                </div>]} nextInstructionKey="Space" nextInstruction={nextInstruction} previousInstructionKey="b" previousInstruction={previousInstruction}/>,
                <MobileInstructionTemplate key={6} divs={[
                    <h1 key={"Header 7"} style={{position:"relative",top:"2vh", textAlign:"center",marginLeft:"100px", marginRight:"100px", height:"100px",fontSize:"3vh"}}>{"... and the payoff will be shown like this. For example, in this case the left bandit has been played and is paying out 77 points"}</h1>,
                    <div className="row" style={{justifyContent:"space-evenly",alignItems:"center"}}>
                    <div className="column">
                            <div className="row" style={{position:"absolute", top:"40vh",left:"calc(50vw - 23vh)"}}>
                                <Lever key={61} animate={false} backgroundColor={"red"} delayAnimation={true} timeDelay={1000}/>
                                <GameMachine key={62} index={0} valid={false} values={[77]} gameLength={5} machineColor={"red"} delayNumberReveal={true} timeDelay={1000}/>
                            </div>
                        </div>
                        <div className="column">
                            <div className="row" style={{position:"absolute", top:"40vh",left:"calc(50vw + 5vh)"}}>
                                <Lever key={63} animate={false} backgroundColor={"blue"} />
                                <GameMachine key={64} index={0} valid={false} values={[]} gameLength={5} machineColor={"blue"} />
                            </div>
                        </div>
                    </div>]} nextInstructionKey="Space" nextInstruction={nextInstruction} previousInstructionKey="b" previousInstruction={previousInstruction}/>,
                <MobileInstructionTemplate key={7} divs={[
                    <h1  key={"Header 8"} style={{position:"relative",top:"2vh", textAlign:"center", marginLeft:"100px", marginRight:"100px", height:"100px",fontSize:"3vh"}}>{"Your goal is to maximize the points you get throughout the task. Try your best to get as many points as you can!"}</h1>,
                    <div className="row" style={{justifyContent:"space-evenly",alignItems:"center"}}>
                        <div className="column">
                            <div className="row" style={{position:"absolute", top:"40vh",left:"calc(50vw - 23vh)"}}>
                                <Lever key={71} animate={false} backgroundColor={"red"}/>
                                <GameMachine key={72} index={1} valid={false} values={[77]} gameLength={5} machineColor={"red"}/>
                            </div>
                        </div>
                        <div className="column">
                            <div className="row" style={{position:"absolute", top:"40vh",left:"calc(50vw + 5vh)"}}>
                                <Lever key={73} animate={false} backgroundColor={"blue"} />
                                <GameMachine key={74} index={0} valid={false} values={[]} gameLength={5} machineColor={"blue"} />
                            </div>
                        </div>
                    </div>]} nextInstructionKey="Space" nextInstruction={nextInstruction} previousInstructionKey="b" previousInstruction={previousInstruction}/>,
               <MobileInstructionTemplate key={8} divs={[
                <h1 key={"Header 9"} style={{position:"relative",top:"2vh", textAlign:"center", marginLeft:"100px", marginRight:"100px", height:"100px",fontSize:"3vh"}}>{"During one game, each bandit tends to pay out about the same amount of reward on average, but there is variability in the reward on any given play"}</h1>,
                <div className="row" style={{justifyContent:"space-evenly",alignItems:"center"}}>
                    <div className="column">
                        <div className="row" style={{position:"absolute", top:"40vh",left:"calc(50vw - 23vh)"}}>
                            <Lever key={81} animate={false} backgroundColor={"red"}/>
                            <GameMachine key={82} index={0} valid={false} values={[]} gameLength={5} machineColor={"red"}/>
                        </div>
                    </div>
                    <div className="column">
                        <div className="row" style={{position:"absolute", top:"40vh",left:"calc(50vw + 5vh)"}}>
                            <Lever key={83} animate={false} backgroundColor={"blue"} />
                            <GameMachine key={84} index={0} valid={false} values={[]} gameLength={5} machineColor={"blue"} />
                        </div>
                    </div>
                </div>]} nextInstructionKey="Space" nextInstruction={nextInstruction} previousInstructionKey="b" previousInstruction={previousInstruction}/>,
               <MobileInstructionTemplate key={9} divs={[
                <h1 key={"Header 10"} style={{position:"relative",top:"2vh", textAlign:"center", marginLeft:"100px", marginRight:"100px", height:"100px",fontSize:"3vh"}}>{"For example, the average reward for the bandit on the right might be 50 points, but on the first play we might see a reward of 52 points because of the variability..."}</h1>,
                <div className="row" style={{justifyContent:"space-evenly",alignItems:"center"}}>
                    <div className="column">
                        <div className="row" style={{position:"absolute", top:"40vh",left:"calc(50vw - 23vh)"}}>
                            <Lever key={91} animate={false} backgroundColor={"red"}/>
                            <GameMachine key={92} index={0} valid={false} values={[]} gameLength={5} machineColor={"red"}/>
                        </div>
                    </div>
                    <div className="column">
                        <div className="row" style={{position:"absolute", top:"40vh",left:"calc(50vw + 5vh)"}}>
                            <Lever key={93} animate={false} backgroundColor={"blue"} delayAnimation={true} timeDelay={500}/>
                            <GameMachine key={94} index={0} valid={false} values={[52]} gameLength={5} machineColor={"blue"} delayNumberReveal={true} timeDelay={500}/>
                        </div>
                    </div>
                </div>]} nextInstructionKey="Space" nextInstruction={nextInstruction} previousInstructionKey="b" previousInstruction={previousInstruction}/>,
              <MobileInstructionTemplate key={10} divs={[
                <h1 key={"Header 11"} style={{position:"relative",top:"2vh", textAlign:"center", marginLeft:"100px", marginRight:"100px", height:"100px",fontSize:"3vh"}}>{"...on the second play we might get 56 points"}</h1>,
                <div className="row" style={{justifyContent:"space-evenly",alignItems:"center"}}>
                    <div className="column">
                        <div className="row" style={{position:"absolute", top:"40vh",left:"calc(50vw - 23vh)"}}>
                            <Lever key={101} animate={false} backgroundColor={"red"}/>
                            <GameMachine key={102} index={0} valid={false} values={[]} gameLength={5} machineColor={"red"}/>
                        </div>
                    </div>
                    <div className="column">
                        <div className="row" style={{position:"absolute", top:"40vh",left:"calc(50vw + 5vh)"}}>
                            <Lever key={103} animate={false} backgroundColor={"blue"} delayAnimation={true} timeDelay={500}/>
                            <GameMachine key={104} index={1} valid={false} values={[50,56]} gameLength={5} machineColor={"blue"} delayNumberReveal={true} timeDelay={500}/>
                        </div>
                    </div>
                </div>]} nextInstructionKey="Space" nextInstruction={nextInstruction} previousInstructionKey="b" previousInstruction={previousInstruction}/>,
             <MobileInstructionTemplate key={110} divs={[
                <h1 key={"Header 12"} style={{position:"relative",top:"2vh", textAlign:"center", marginLeft:"100px", marginRight:"100px", height:"100px",fontSize:"3vh"}}>{"...if we play a third time on the right, we might get 45 points..."}</h1>,
                <div className="row" style={{justifyContent:"space-evenly",alignItems:"center"}}>
                    <div className="column">
                        <div className="row" style={{position:"absolute", top:"40vh",left:"calc(50vw - 23vh)"}}>
                            <Lever key={111} animate={false} backgroundColor={"red"}/>
                            <GameMachine key={112} index={0} valid={false} values={[]} gameLength={5} machineColor={"red"}/>
                        </div>
                    </div>
                    <div className="column">
                        <div className="row" style={{position:"absolute", top:"40vh",left:"calc(50vw + 5vh)"}}>
                            <Lever key={113} animate={false} backgroundColor={"blue"} delayAnimation={true} timeDelay={500}/>
                            <GameMachine key={114} index={2} valid={false} values={[50,56,45]} gameLength={5} machineColor={"blue"} delayNumberReveal={true} timeDelay={500}/>
                        </div>
                    </div>
                </div>]} nextInstructionKey="Space" nextInstruction={nextInstruction} previousInstructionKey="b" previousInstruction={previousInstruction}/>,
             <MobileInstructionTemplate key={120} divs={[
                <h1 key={"Header 13"} style={{position:"relative",top:"2vh", textAlign:"center", marginLeft:"100px", marginRight:"100px", height:"100px",fontSize:"3vh"}}>{"...and so on such that if we were able to play the slot machine on the right 5 times in a row we might see these rewards"}</h1>,
                <div className="row" style={{justifyContent:"space-evenly",alignItems:"center"}}>
                    <div className="column">
                        <div className="row" style={{position:"absolute", top:"40vh",left:"calc(50vw - 23vh)"}}>
                            <Lever key={121} animate={false} backgroundColor={"red"}/>
                            <GameMachine key={122} index={0} valid={false} values={[]} gameLength={5} machineColor={"red"}/>
                        </div>
                    </div>
                    <div className="column">
                        <div className="row" style={{position:"absolute", top:"40vh",left:"calc(50vw + 5vh)"}}>
                            <Lever key={123} animate={false} backgroundColor={"blue"}/>
                            <GameMachine key={124} index={6} valid={false} values={[50,56,45,39,51,50]} gameLength={5} machineColor={"blue"}/>
                        </div>
                    </div>
                </div>]} nextInstructionKey="Space" nextInstruction={nextInstruction} previousInstructionKey="b" previousInstruction={previousInstruction}/>,
            <MobileInstructionTemplate key={13} divs={[
                <h1 key={"Header 14"} style={{position:"relative",top:"2vh",textAlign:"center", marginLeft:"100px", marginRight:"100px", height:"100px",fontSize:"3vh"}}>{"On any trial you can only choose to play one of the two bandits and the number of trials in each game is determined by the height of the bandits."}</h1>]} nextInstructionKey="Space" previousInstructionKey="b" nextInstruction={nextInstruction} previousInstruction={previousInstruction}/>,
            <MobileInstructionTemplate key={120} divs={[
                <h1 key={"Header 15"} style={{position:"relative",top:"2vh", textAlign:"center", marginLeft:"100px", marginRight:"100px", height:"100px",fontSize:"3vh"}}>{"For example, when the bandits are 10 boxes high, there are 10 trials in that game..."}</h1>,
                <div className="row" style={{justifyContent:"space-evenly", alignItems:"center"}}>
                    <div className="column">
                        <div className="row" style={{position:"absolute", top:"25vh",left:"calc(50vw - 23vh)"}}>
                            <Lever key={121} animate={false} backgroundColor={"red"}/>
                            <GameMachine key={122} index={0} valid={false} values={[]} gameLength={10} machineColor={"red"}/>
                        </div>
                    </div>
                    <div className="column">
                        <div className="row" style={{position:"absolute", top:"25vh",left:"calc(50vw + 5vh)"}}>
                            <Lever key={123} animate={false} backgroundColor={"blue"}/>
                            <GameMachine key={124} index={0} valid={false} values={[]} gameLength={10} machineColor={"blue"}/>
                        </div>
                    </div>
                </div>]} nextInstructionKey="Space" nextInstruction={nextInstruction} previousInstructionKey="b" previousInstruction={previousInstruction}/>,
           <MobileInstructionTemplate key={130} divs={[
            <h1 key={"Header 16"} style={{position:"relative",top:"2vh", textAlign:"center", marginLeft:"100px", marginRight:"100px",height:"100px",fontSize:"3vh"}}>{"...when the bandits are 5 boxes high, there are only 5 trials in the game."}</h1>,
            <div className="row" style={{justifyContent:"space-evenly", alignItems:"center"}}>
                <div className="column">
                    <div className="row" style={{position:"absolute", top:"40vh",left:"calc(50vw - 23vh)"}}>
                        <Lever key={131} animate={false} backgroundColor={"red"}/>
                        <GameMachine key={132} index={0} valid={false} values={[]} gameLength={5} machineColor={"red"}/>
                    </div>
                </div>
                <div className="column">
                    <div className="row" style={{position:"absolute", top:"40vh",left:"calc(50vw + 5vh)"}}>
                        <Lever key={133} animate={false} backgroundColor={"blue"}/>
                        <GameMachine key={134} index={0} valid={false} values={[]} gameLength={5} machineColor={"blue"}/>
                    </div>
                </div>
            </div>]} nextInstructionKey="Space" nextInstruction={nextInstruction} previousInstructionKey="b" previousInstruction={previousInstruction}/>,
           <MobileInstructionTemplate key={140} divs={[
                <h1 key={"Header 17"} style={{position:"relative",top:"2vh", textAlign:"center", marginLeft:"100px", marginRight:"100px",height:"100px",fontSize:"3vh"}}>{"The first four trials in each game are instructed trials. These instructed trials will be indicated by a green square inside the box we want you to open"}</h1>,
                <div className="row" style={{justifyContent:"space-evenly", alignItems:"center"}}>
                    <div className="column">
                        <div className="row" style={{position:"absolute", top:"40vh",left:"calc(50vw - 23vh)"}}>
                            <Lever key={141} animate={false} backgroundColor={"red"}/>
                            <GameMachine key={142} index={0} valid={true} values={[]} gameLength={5} machineColor={"red"}/>
                     </div>
                 </div>
                 <div className="column">
                    <div className="row" style={{position:"absolute", top:"40vh",left:"calc(50vw + 5vh)"}}>
                        <Lever key={143} animate={false} backgroundColor={"blue"}/>
                        <GameMachine key={144} index={0} valid={false} values={[]} gameLength={5} machineColor={"blue"}/>
                    </div>
                </div>
            </div>]} nextInstructionKey="Space" nextInstruction={nextInstruction} previousInstructionKey="b" previousInstruction={previousInstruction}/>,
            <MobileInstructionTemplate key={13} divs={[
                <h1 key={"Header 18"} style={{position:"relative",top:"2vh",textAlign:"center", marginLeft:"100px", marginRight:"100px", height:"100px",fontSize:"3vh"}}>{"You must press the corresponding bandit to choose it. Then you will move on to see the reward and advance to the next trial"}</h1>]} nextInstructionKey="Space" previousInstructionKey="b" nextInstruction={nextInstruction} previousInstruction={previousInstruction}/>,
            <MobileInstructionTemplate key={150} divs={[
                <h1 key={"Header 19"} style={{position:"relative",top:"2vh", textAlign:"center", marginLeft:"100px", marginRight:"100px", height:"100px",fontSize:"3vh"}}>{"For example, if you are instructed to choose the left bandit on the first trial, you will see this below. You must use the press the left bandit to choose this option."}</h1>,
                <div className="row" style={{justifyContent:"space-evenly", alignItems:"center"}}>
                    <div className="column">
                        <div className="row" style={{position:"absolute", top:"40vh",left:"calc(50vw - 23vh)"}}>
                            <Lever key={151} animate={false} backgroundColor={"red"}/>
                            <GameMachine key={152} index={0} valid={true} values={[]} gameLength={5} machineColor={"red"}/>
                     </div>
                 </div>
                 <div className="column">
                    <div className="row" style={{position:"absolute", top:"40vh",left:"calc(50vw + 5vh)"}}>
                        <Lever key={153} animate={false} backgroundColor={"blue"}/>
                        <GameMachine key={154} index={0} valid={false} values={[]} gameLength={5} machineColor={"blue"}/>
                    </div>
                </div>
            </div>]} nextInstructionKey="Space" nextInstruction={nextInstruction} previousInstructionKey="b" previousInstruction={previousInstruction}/>,
        <MobileInstructionTemplate key={160} divs={[
            <h1 key={"Header 20"} style={{position:"relative",top:"2vh", textAlign:"center", marginLeft:"100px", marginRight:"100px", height:"100px",fontSize:"3vh"}}>{"If you are instructed to choose the right bandit on the second trial, you will see this:"}</h1>,
            <div className="row" style={{justifyContent:"space-evenly", alignItems:"center"}}>
                <div className="column">
                    <div className="row" style={{position:"absolute", top:"40vh",left:"calc(50vw - 23vh)"}}>
                        <Lever key={161} animate={false} backgroundColor={"red"}/>
                        <GameMachine key={162} index={1} valid={false} values={[77]} gameLength={5} machineColor={"red"}/>
                </div>
            </div>
            <div className="column">
                <div className="row" style={{position:"absolute", top:"40vh",left:"calc(50vw + 5vh)"}}>
                    <Lever key={163} animate={false} backgroundColor={"blue"}/>
                    <GameMachine key={164} index={1} valid={true} values={["xx"]} gameLength={5} machineColor={"blue"}/>
                </div>
            </div>
        </div>]} nextInstructionKey="Space" nextInstruction={nextInstruction} previousInstructionKey="b" previousInstruction={previousInstruction}/>,
        <MobileInstructionTemplate key={170} divs={[
            <h1 key={"Header 21"} style={{position:"relative",top:"2vh", textAlign:"center", marginLeft:"100px", marginRight:"100px", height:"100px",fontSize:"3vh"}}>{"Note that you do not earn any points for the four instructed trials, but you do learn something about how rewarding each bandit is"}</h1>,
            <div className="row" style={{justifyContent:"space-evenly", alignItems:"center"}}>
                <div className="column">
                    <div className="row" style={{position:"absolute", top:"40vh",left:"calc(50vw - 23vh)"}}>
                        <Lever key={171} animate={false} backgroundColor={"red"}/>
                        <GameMachine key={172} index={4} valid={true} values={[77,"xx",65,67]} gameLength={5} machineColor={"red"}/>
                </div>
            </div>
            <div className="column">
                <div className="row" style={{position:"absolute", top:"40vh",left:"calc(50vw + 5vh)"}}>
                    <Lever key={173} animate={false} backgroundColor={"blue"}/>
                    <GameMachine key={174} index={4} valid={true} values={["xx",52,"xx","xx"]} gameLength={5} machineColor={"blue"}/>
                </div>
            </div>
        </div>]} nextInstructionKey="Space" nextInstruction={nextInstruction} previousInstructionKey="b" previousInstruction={previousInstruction}/>,
        <MobileInstructionTemplate key={180} divs={[
            <h1 key={"Header 22"} style={{position:"relative",top:"2vh", textAlign:"center", marginLeft:"100px", marginRight:"100px", height:"100px",fontSize:"3vh"}}>{"Once the instructed trials are complete, you will make free choices between the two bandits for the rest of the game (in this case 1 trial).\n The free choices are indicated by two green squares inside the bandits you are choosing between."}</h1>,
            <div className="row" style={{justifyContent:"space-evenly", alignItems:"center"}}>
                <div className="column">
                    <div className="row" style={{position:"absolute", top:"40vh",left:"calc(50vw - 23vh)"}}>
                        <Lever key={181} animate={false} backgroundColor={"red"}/>
                        <GameMachine key={182} index={4} valid={true} values={[77,"xx",65,67]} gameLength={5} machineColor={"red"}/>
                </div>
            </div>
            <div className="column">
                <div className="row" style={{position:"absolute", top:"40vh",left:"calc(50vw + 5vh)"}}>
                    <Lever key={183} animate={false} backgroundColor={"blue"}/>
                    <GameMachine key={184} index={4} valid={true} values={["xx",52,"xx","xx"]} gameLength={5} machineColor={"blue"}/>
                </div>
            </div>
        </div>]} nextInstructionKey="Space" nextInstruction={nextInstruction} previousInstructionKey="b" previousInstruction={previousInstruction}/>,
        <MobileInstructionTemplate key={190} divs={[
            <h1 key={"Header 23"} style={{position:"relative",top:"2vh", textAlign:"center", marginLeft:"100px", marginRight:"100px", height:"100px",fontSize:"3vh"}}>{"Your goal on the task's free choice trials is to earn the most points you can. The more you choose the bandit with the higher average reward, the more money you will earn in the task."}</h1>,
            <div className="row" style={{justifyContent:"space-evenly", alignItems:"center"}}>
                <div className="column">
                    <div className="row" style={{position:"absolute", top:"40vh",left:"calc(50vw - 23vh)"}}>
                        <Lever key={191} animate={false} backgroundColor={"red"}/>
                        <GameMachine key={192} index={4} valid={true} values={[77,"xx",65,67]} gameLength={5} machineColor={"red"}/>
                </div>
            </div>
            <div className="column">
                <div className="row" style={{position:"absolute", top:"40vh",left:"calc(50vw + 5vh)"}}>
                    <Lever key={193} animate={false} backgroundColor={"blue"}/>
                    <GameMachine key={194} index={4} valid={true} values={["xx",52,"xx","xx"]} gameLength={5} machineColor={"blue"}/>
                </div>
            </div>
        </div>,
        ]} nextInstructionKey="Space" nextInstruction={nextInstruction} previousInstructionKey="b" previousInstruction={previousInstruction}/>,
        <MobileInstructionTemplate key={20} divs={[
            <h1 key={"Header 21"} style={{position:"relative",top:"2vh",textAlign:"center", marginLeft:"100px", marginRight:"100px", height:"100px",fontSize:"3vh"}}>{"Let's try a few practice rounds to check your understanding so far."}</h1>]} nextInstructionKey="Space" previousInstructionKey="b" nextInstruction={nextInstruction} previousInstruction={previousInstruction}/>,
        <MobileInstructionTrial key={"Practice trial 1"} trial={0} {...{gameLength:10,machineVars:[{mu:60,sd:8,keyBind:"ArrowLeft",color:"red", description:"Bandit 1"},{mu:20,sd:8,keyBind:"ArrowRight",color:"blue",description:"Bandit 2"}],force:[[0],[1],[1],[1]],trialDescription:"Example Trial 1"}} total_points={0} nextInstruction={nextInstruction}/>,
        <MobileInstructionTemplate key={21} divs={[
            <h1 key={"Header 21"} style={{position:"relative",top:"2vh",textAlign:"center", marginLeft:"100px", marginRight:"100px", height:"100px",fontSize:"3vh"}}>{"In this practice trial, you should have found that the left, red bandit gave out the higher reward on average. Lets try another example."}</h1>]} nextInstructionKey="Space" previousInstructionKey="b" nextInstruction={nextInstruction} previousInstruction={previousInstruction} previousJump={2}/>,
        <MobileInstructionTrial key={"Practice trial 2"} trial={0} {...{gameLength:10,machineVars:[{mu:30,sd:8,keyBind:"ArrowLeft",color:"red", description:"Bandit 1"},{mu:90,sd:8,keyBind:"ArrowRight",color:"blue",description:"Bandit 2"}],force:[[1],[0],[1],[0]],trialDescription:"Example Trial 2"}} total_points={0} nextInstruction={nextInstruction}/>,
        <MobileInstructionTemplate key={22} divs={[
            <h1 key={"Header 21"} style={{position:"relative",top:"2vh",textAlign:"center", marginLeft:"100px", marginRight:"100px", height:"100px",fontSize:"3vh"}}>{"In this practice trial, you should have found that the right, blue bandit gave out the higher reward on average."}</h1>]} nextInstructionKey="Space" previousInstructionKey="b" nextInstruction={nextInstruction} previousInstruction={previousInstruction} previousJump={2}/>,
             <MobileInstructionTemplate key={230} divs={[
                <h1 key={"Header 23"} style={{position:"relative",top:"2vh", textAlign:"center", marginLeft:"100px", marginRight:"100px", height:"100px",fontSize:"3vh"}}>{"The points you earn in a single game is equal to the average of all the points you earn through your choices within that game, not including the instructed choices. For example if you played the bandits 5 times and were shown the following points, you would earn a total of 59 points for that game."}</h1>,
                <div className="row" style={{justifyContent:"space-evenly",alignItems:"center"}}>
                    <div className="column">
                        <div className="row" style={{position:"absolute", top:"45vh",left:"calc(50vw - 23vh)"}}>
                            <Lever key={23} animate={false} backgroundColor={"red"}/>
                            <GameMachine key={232} index={6} valid={false} values={["xx",43,31,"xx","xx"]} gameLength={5} machineColor={"red"}/>
                        </div>
                    </div>
                    <div className="column">
                        <div className="row" style={{position:"absolute", top:"45vh",left:"calc(50vw + 5vh)"}}>
                            <Lever key={233} animate={false} backgroundColor={"blue"}/>
                            <GameMachine key={234} index={6} valid={false} values={[50,"xx","xx",48,59]} gameLength={5} machineColor={"blue"}/>
                        </div>
                    </div>
                </div>]} nextInstructionKey="Space" nextInstruction={nextInstruction} previousInstructionKey="b" previousInstruction={previousInstruction}/>,
        <MobileInstructionTemplate key={30} divs={[
            <h1 key={"Header 22"} style={{position:"relative",top:"2vh",textAlign:"center", marginLeft:"100px", marginRight:"100px", height:"100px",fontSize:"3vh"}}>{"It is important to note that you DO NOT need to to wait for the arm pull animation to finish before making your next decision."}</h1>]} nextInstructionKey="Space" previousInstructionKey="b" nextInstruction={nextInstruction} previousInstruction={previousInstruction}/>,
        <MobileInstructionTemplate key={24} divs={[
            <h1 key={"Header 21"} style={{position:"relative",top:"2vh",textAlign:"center", marginLeft:"100px", marginRight:"100px", height:"100px",fontSize:"3vh"}}>{"The total points earned across the entire game will be shown in a display box in the right side of your screen, for example if you had a total of 200 points you would see a box that looks like this:"}</h1>,<h1 style={{justifyContent:"center",textAlign:"center",position:"relative",width:"100%",display:"flex", top:"200px"}}><TotalPointCounter points="200" totalPoints={terminationPoints} width="300px" height="75px" borderColor="black" description="Total Money Earned"/></h1>]} nextInstructionKey="Space" previousInstructionKey="b" nextInstruction={nextInstruction} previousInstruction={previousInstruction}/>,
        <MobileInstructionTemplate key={25} divs={[
            <h1 key={"Header 22"} style={{position:"relative",top:"2vh",textAlign:"center", marginLeft:"100px", marginRight:"100px", height:"100px",fontSize:"3vh"}}>{"Let's try a couple of practice trials of the complete game:"}</h1>]} nextInstructionKey="Space" previousInstructionKey="b" nextInstruction={nextInstruction} previousInstruction={previousInstruction}/>,
        <div key={1}>placeholder for instruction trial</div>,
        <div key ={2}>placeholder for instruction trial</div>,
        <div key ={3}>placeholder for instruction trial</div>,
        <div key ={4}>placeholder for instruction trial</div>,
        <MobileInstructionTemplate key={29} divs={[
            <h1 key={"Header 21"} style={{position:"relative",top:"2vh",textAlign:"center", marginLeft:"100px", marginRight:"100px", height:"100px",fontSize:"3vh"}}>{"The game will go until you have done 80 trials or you have reached 4000$. Since you earn higher points by choosing the more profitable bandit on each trial, if you perform well you will be able to finish faster!"}</h1>]} nextInstructionKey="Space" previousInstructionKey="b" nextInstruction={nextInstruction} previousInstruction={previousInstruction} previousJump={5}/>,
        <MobileInstructionTemplate key={30} divs={[
            <h1 key={"Header 22"} style={{position:"relative",top:"2vh",textAlign:"center", marginLeft:"100px", marginRight:"100px", height:"100px",fontSize:"3vh"}}>{"Good luck! To begin the task, press the right arrow. If you wish to review any of the instructions, press the left arrow."}</h1>]} nextInstructionKey="Space" previousInstructionKey="b" nextInstruction={nextInstruction} previousInstruction={previousInstruction}/>,
        ]
    )
}
export default mobileInstructionGen