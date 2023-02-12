import React,{useContext} from "react";
import * as S from "./style";
import { Context } from "../../Services/Context/context";
import NextButton from "../NextButton";
export default function CharProfileComponent(){
    const context = useContext(Context)
    return(
        <S.ProfileContainer>
            <S.ProfilePic src={context.state} alt="" />
            <NextButton />
        </S.ProfileContainer>
    )
}