import React, { useContext } from "react"
import { Context } from "../../Services/Context/context"
const NextButton = ()=>{
    
   const context = useContext(Context)
   return <button onClick={()=> context.counter()}>Next</button>
}
export default NextButton;