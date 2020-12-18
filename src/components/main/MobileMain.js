import React from "react";
import styled from "styled-components";
import MobileMainFirst from "./MobileMainFirst";
import MainSecond from "./MainSecond";
import MainThird from "./MainThird";
import MainFourth from "./Mainfourth";
import MainFifth from "./MainFifth";

const MainDiv = styled.div`
  padding-top: 113px;
`
const MobileDiv = styled.div`
  background-color: ${(props) => props.color ? props.theme.bgColor : props.theme.whiteColor};
  margin: 0 auto;
  height: 100% !important;
  padding-top: 50px !important;
  padding: 50px 20px;
  
  & > div{
    height: 100% !important;
  }
`
const MobileMain = () => {
  return(
    <>
    <MainDiv>
      <MobileMainFirst/>
      <MobileDiv>
        <MainSecond />
      </MobileDiv>
      <MobileDiv color="bg">
        <MainThird />
      </MobileDiv>
      <MobileDiv>
        <MainFourth />
      </MobileDiv>
      <MobileDiv color="bg">
        <MainFifth />
      </MobileDiv>      
    </MainDiv>
  </>
  )
}

export default MobileMain;