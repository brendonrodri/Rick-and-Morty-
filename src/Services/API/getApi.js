import React, { useContext, useEffect} from "react";
import axios from "axios";
import { Context } from "../Context/context";
const ApiComponent = () =>{
    const context = useContext(Context)
    const getApi = ()=>{
        axios.get(`https://rickandmortyapi.com/api/character/1`).then((response)=>{
            context.setState(response.data.image)
        })
    }
    useEffect(()=>{
        getApi()
    })
}
export default ApiComponent