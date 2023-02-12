import React from "react";
import CharProfileComponent from "./Components/CharProfile";
import HeaderComponent from "./Components/Header";
import ApiComponent from "./Services/API/getApi";
import ContextProvider from "./Services/Context/context";
import { GlobalStyle } from "./Services/GlobalStyle/style";
export default function App (){
  return(
    <ContextProvider>
      <GlobalStyle />
      <ApiComponent />
      <HeaderComponent />
      <CharProfileComponent />
    </ContextProvider>
  )
}