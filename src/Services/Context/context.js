import React, { useState, createContext } from "react"
export const Context = createContext()
const ContextProvider = ({children})=>{
    const [state,setState] = useState()
    const [count, setCount] = useState(1)
    const counter = ()=>{
        setCount(prevCount => prevCount + 1)
        console.log(count)
    }
    return(
        <Context.Provider value={{state, setState, count, counter}}>
            {children}
        </Context.Provider>
    )
}
export default ContextProvider;