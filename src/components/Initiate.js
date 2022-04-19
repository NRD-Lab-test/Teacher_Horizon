import React from "react"
import "../style.css"
import {ExiusServer} from "exius/exiusServerNoComp.mjs"
import config from "./Config"
const URL = config.server

async function preflightExius(url, keyValue, fileInfo){
    try{
        let exius = await ExiusServer.init(url, keyValue)
        await exius.writeFile(fileInfo.endpoint, fileInfo.fname, fileInfo.data)
        return exius
    }catch(e){
        throw e
    }
}
class Initiate extends(React.Component){
    // This takes in a prop nextInstruction which calls a parent function to move to the next instruction as well as
    // getWriteKey which passes the writeKey to the main HorizonGame.
    constructor(props){
        super(props)
        this.keyValue=""
        this.state={preflightError:false,preflightInitiated:false,preflightMessage:""}
        this.submitPreflight=this.submitPreflight.bind(this)
        this.getQuery=this.getQuery.bind(this)
    }
    componentDidMount(){
        let query = this.getQuery()
        console.log(query)
        this.id = query.id
        this.keyValue = query.key
        this.archive = query.archive
        this.submitPreflight()
    }
    async submitPreflight(){
        try{
            this.setState({preflightInitiated:true})
            if (this.archive){
                this.props.getExiusObj({KeyValue:"0", writeFile:()=>{}}, 0, true)
                this.props.nextInstruction()
            }else{
                if (this.id == undefined || this.keyValue == undefined){
                    throw Error("must have a valid id and keyvalue")
                }
                let exius = await preflightExius(URL,this.keyValue, {endpoint:"horizon",fname:`Subject_${this.id}.csv`,data:""})
                this.props.getExiusObj(exius,this.id, false)
                this.props.nextInstruction()
            }
           
        }
        catch(e){
            console.log(e)
            this.setState({preflightError:true, preflightMessage:e.message})
        }
    }
    getQuery(){
        return Object.fromEntries([...new URLSearchParams(window.location.search)])
    }
    render(){
        return <div>ERROR:{this.state.preflightMessage}</div>
    }

}
export default Initiate