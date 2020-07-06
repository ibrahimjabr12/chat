import React from 'react'
import ReactDOM from 'react-dom'
class App extends React.Component {
    constructor(props){
        super(props)
        this.state={
          messges:[],
          input: ''
        }
    }
    handleKeyDown(e){
      if(e.keyCode == 13){
        this.AddM();
      }
    }
     handleChange(e) {
       this.setState({ input: e.target.value });
    }
   AddM() {
     let a = this.state.messges;
     a.push(<p>{this.state.input+' '+Date(Date.now()).toString()}</p>);
    this.setState({ messges: a });
    document.getElementById("inp").value ="";
    }
   
    render(){
        
        return(
        <>
       <div>{this.state.messges}</div>
          <div className="input-group mb-3">
  <input id="inp" type="text" className="form-control" placeholder="enter your messge" aria-label="enter your messge" aria-describedby="button-addon2" onChange={()=> this.handleChange(event) }onKeyDown={(e) => this.handleKeyDown(e)}/>
  <div className="input-group-append">
    <button className="btn btn-outline-secondary" type="button" id="button-addon2" onClick={()=>this.AddM()}>Button</button>
  </div>
</div>
         </>
         )
    }
}

ReactDOM.render(<App />, document.getElementById('product'))