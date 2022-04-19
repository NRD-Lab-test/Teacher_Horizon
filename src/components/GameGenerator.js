function ObjectPermutations(loopObj){
    let builtObjList=[{}]
    for (var keyIndex=0; keyIndex<Object.keys(loopObj).length; keyIndex++){
        let newObjList=[]
        for (var i=0;i<builtObjList.length;i++){
            for (var j=0;j<loopObj[Object.keys(loopObj)[keyIndex]].length;j++){
                let tempObj=cloneObj(builtObjList[i])
                tempObj[Object.keys(loopObj)[keyIndex]]=loopObj[Object.keys(loopObj)[keyIndex]][j]
                newObjList.push(tempObj)
            }
        }
        builtObjList=newObjList
    }
    return builtObjList
}
function cloneObj(obj){
    return JSON.parse(JSON.stringify(obj))
}
function shuffleArray(array) {
    // all credit to stack overflow
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}
function randomForce(information="even"){
    let even_information=["main","main","other","other"]
    let weighted_positive_information=["main","main","main","other"]
    let weighted_negative_information=["main","other","other","other"]
    if (information==="even"){
        shuffleArray(even_information)
        return even_information
    }
    if (information==="weight_positive"){
        shuffleArray(even_information)
        return weighted_positive_information
    }
    if (information==="weight_negative"){
        shuffleArray(even_information)
        return weighted_negative_information
    }
}
function Make_Game_Params(){
    let force_types=["even","weight_negative","weight_positive"]
    let gameParams=ObjectPermutations({"mu":[40,60],"deltaMu":[-30, -20, -12, -8, -4, 4, 8, 12, 20, 30],"sd":[8],"mainBandit":[0,1],"gameLength":[5,10]})
    for (var i=0;i<gameParams.length;i++){
        gameParams[i]["forcedBandit"]=randomForce(force_types[Math.floor(Math.random()*3)])
    }
    return gameParams
}
function Convert_Game_Params_To_HorizonTrial(gameParams){
    let newTrialArray=[]
    for (var i=0;i<gameParams.length;i++){
        let gameData={machineVars:[], gameLength:null, force:[]}
        let banditZero={}
        let banditOne={}
        if(gameParams[i]["mainBandit"]===0){
            banditZero["mu"]=gameParams[i].mu
            banditOne["mu"]=gameParams[i].mu+gameParams[i].deltaMu
            gameData["force"]=gameParams[i].forcedBandit.map((force)=>{
                if(force=="main"){
                    return [0]
                }else{
                    return [1]
                }
            })
        }
        else{
            banditZero["mu"]=gameParams[i].mu+gameParams[i].deltaMu
            banditOne["mu"]=gameParams[i].mu
            gameData["force"]=gameParams[i].forcedBandit.map((force)=>{
                if(force=="main"){
                    return [1]
                }else{
                    return [0]
                }
            })
        }
        banditZero["sd"]=gameParams[i].sd
        banditOne["sd"]=gameParams[i].sd
        banditZero["keyBind"]="ArrowLeft"
        banditOne["keyBind"]="ArrowRight"
        banditZero["color"]="red"
        banditOne["color"]="blue"
        banditZero["description"]="Bandit 1"
        banditOne["description"]="Bandit 2"
        gameData["gameLength"]=gameParams[i].gameLength
        gameData["machineVars"].push(banditZero)
        gameData["machineVars"].push(banditOne)
        gameData["addedMetaData"]=gameParams[i]
        gameData["trialDescription"]=`Game ${i+1} of ${gameParams.length}`
        newTrialArray.push(gameData)
    }
    return newTrialArray
}
function Make_Bandits(){
    let gameArray=Convert_Game_Params_To_HorizonTrial(Make_Game_Params())
    shuffleArray(gameArray)
    let gameSize=gameArray.length
    for (var i=0;i<gameSize;i++){
        gameArray[i].trialDescription=`Game ${i+1} of ${gameSize}`
    }
    return gameArray

}
export default Make_Bandits