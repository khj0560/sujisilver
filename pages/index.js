import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
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
  return (
    <ReactFullpage
      //fullpage options
      licenseKey = {process.env.NEXT_PUBLIC_FULLPAGE_KEY}
      pluginWrapper={pluginWrapper}
      scrollingSpeed = {1000} 
      scrollOverflow = {true}
      scrollOverflowOptions = {{scrollbars: false}}
      //paddingTop = {paddingTop}
      touchSensitivity = "10"
      responsiveWidth = "768"
      scrollBar = {false}
      afterRender = {(fullpageApi) => {
        const paddingTop = Number(fullpageApi.item.clientWidth) > 1024 ? "70px" : "113px"
        const height = Number(fullpageApi.item.clientHeight) - 70;
        fullpageApi.item.parentNode.querySelectorAll('.fp-section').forEach(function(section){
          section.style.paddingTop = paddingTop;
          section.style.height = `${height}px`;
          section.firstChild.style.height = `${height}px`;
        })
      }}

      render={({ state, fullpageApi }) => {
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
    <FullPageMain />
  )
}
