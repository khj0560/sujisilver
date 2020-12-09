import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import dynamic from "next/dynamic";
import ReactFullpage from "@fullpage/react-fullpage";
import Main001 from "../src/components/main/Main001";
import MobileMain001 from "../src/components/main/Main001Mobile";
import Main002 from "../src/components/main/Main002";
import Main003 from "../src/components/main/Main003";
import Main004 from "../src/components/main/Main004";
import Main005 from "../src/components/main/Main005";

// It delays importing vendor file until client side rendering.
const pluginWrapper = () => {
  require('fullpage.js/vendors/scrolloverflow');
};

const MainDiv = styled.div`
  padding-top: 113px;
`
const Div = styled.div`
  background-color: ${(props) => props.color ? props.theme.bgColor : props.theme.whiteColor};
  margin: 0 auto;
  padding: 0 30px;
  /* ${props => {
    if(props.test=="test") {
      return `padding-top: 20px`;
    }
  }} */
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

const FullPageMain = () => {
  const [firstHeight, setFirstHeight] = useState();
  const test = useRef();
  const [paddingValue, setPaddingValue] = useState();
  // useEffect(()=>{
  //     setPaddingValue(window.innerWidth < 1024 ? "113px" : "70px")
  // });
useEffect(()=>{
  if(test.current){
    console.log(test.current) // fpUtils.getWindowHeight)
    
    //test.current.paddingTop = "90px";
    setPaddingValue("90px")
    test.current.fullpageApi.rebuild;
  }
})
 
  return (
    <ReactFullpage
      ref={test}
      //fullpage options
      licenseKey = {process.env.NEXT_PUBLIC_FULLPAGE_KEY}
      pluginWrapper={pluginWrapper}
      scrollingSpeed = {1000} 
      scrollOverflow = {true}
      scrollOverflowOptions = {{scrollbars: false}}
      paddingTop = {paddingValue}
      touchSensitivity = "10"
      responsiveWidth = "768"
      scrollBar = {false}
      // afterRender = {(fullpageApi) => {
      //   fullpageApi.reBuild();
      // }}

      

      render={({ state, fullpageApi }) => {
        console.log(`fullpage render paddingValue ${paddingValue}`)

        //console.log(fullpageApi.getActiveSection());

        return (
          <ReactFullpage.Wrapper>
            <div className="section">
                <Main001/>
            </div>
            <Div className="section">
                <Main002 />
            </Div>
            <Div className="section" color="bg">
                <Main003 />
            </Div>
            <Div className="section">
                <Main004 />
            </Div>
            <Div className="section" color="bg">
                <Main005 />
            </Div>                        
          </ReactFullpage.Wrapper>
        );
      }}
    />
  )
}

export default function Home() {
  
  return (
    <FullPageMain/>
  )
}
