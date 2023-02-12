/* import React from "react"
import axios from "axios"
export default class App extends React.Component {
  state={
    count:1
  }
  getApi = ()=>{
    axios.get(`https://rickandmortyapi.com/api/character/${this.state.count}`).then(response =>{
      let data = response.data
      this.setState({image: data.image, nome: data.name})
      console.log(this.state.api)
    })
  }
  componentDidMount(){
   this.getApi()
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
          <img src={this.state.image} />
          <h1>{this.state.nome}</h1>
        
        </>
      )
    }
  } */

import React, { useContext } from "react";
import ApiComponent from "./Services/API/getApi";
import ContextProvider, { Context } from "./Services/Context/context";
export default function App (){
  return(
    <ContextProvider>
      <ApiComponent />
      <Img />
    </ContextProvider>
  )
}

const Img = ()=>{
  const context = useContext(Context)
  return <img src={context.state} />
}