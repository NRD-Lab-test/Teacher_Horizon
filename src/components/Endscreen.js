import React from "react"
class Endscreen extends(React.Component){
    //This gives the endscreen. It will also export the data here.
    // It takes in data (array of objects) with all the trial data in it, 
    //bonus (int) which is the total money earned, and money which is the total 
    //in game dollars accumulated. It is a child component of "Horizon Game"
    constructor(props){
        super(props)
        this.download = this.download.bind(this)
    }
    download(fileName, data){
        var element = document.createElement('a');
        element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(data));
        element.setAttribute('download', fileName);
      
        element.style.display = 'none';
        document.body.appendChild(element);
      
        element.click();
      
        document.body.removeChild(element);
    }
    componentDidMount(){
        if (this.props.archive){
            this.download("horizon_data.csv", this.props.data)
        }
    }
    render(){
        return (<h1 style={{border:"solid black 5px", marginLeft:"100px", marginRight:"100px", textAlign:"center"}}>The experiment is over! Thank you for taking part in this part of the experiment!</h1>
        )
    }
}
export default Endscreen