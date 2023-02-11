import React from "react"
import axios from "axios"


export default class App extends React.Component {
  state={
    count:0
  }
  getApi = ()=>{
    axios.get(`https://rickandmortyapi.com/api/character/${this.state.count}`).then(response =>{
      let data = response.data
      this.setState({api: data.image})
      console.log(this.state.api)
    })
  }
  count = () =>{

    this.setState({count: this.state.count+1})
    console.log(this.state)
  }
  
    render(){
      return(
        <>
          <button onClick={()=>{
            this.getApi()
            this.count()
          }}>
            get
          </button>
          <img src={this.state.api} />
        
        </>
      )
    }
  }