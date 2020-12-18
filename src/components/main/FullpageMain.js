import React from "react";
import styled from "styled-components";
import ReactFullpage from "@fullpage/react-fullpage";
import MainFirst from "./MainFirst";
import MainSecond from "./MainSecond";
import MainThird from "./MainThird";
import Mainfourth from "./Mainfourth";
import MainFifth from "./MainFifth";
import Footer from "../Footer";

// It delays importing vendor file until client side rendering.
const pluginWrapper = () => {
    require('fullpage.js/vendors/scrolloverflow');
};
const Div = styled.div`
  background-color: ${(props) => props.color ? props.theme.bgColor : props.theme.whiteColor};
  margin: 0 auto;

` 
const FullPageMain = () => {
    const fullkey = process.env.NEXT_PUBLIC_FULLPAGE_KEY
    return (
    <ReactFullpage
        //fullpage options
        licenseKey = {fullkey}
        pluginWrapper={pluginWrapper}
        scrollingSpeed = {1000} 
        scrollOverflow = {false}
        scrollOverflowOptions = {{scrollbars: false}}
        //paddingTop = {paddingTop}
        touchSensitivity = "10"
        responsiveWidth = "1024"
        scrollBar = {false}
        afterRender = {(fullpageApi) => {
            const paddingTop = Number(fullpageApi.item.clientWidth) > 1024 ? "70px" : "113px"
            const height = Number(fullpageApi.item.clientHeight) - 70;
            fullpageApi.item.parentNode.querySelectorAll('.fp-section').forEach(function(section, index, array){
            if(index != (array.length - 1)){
                section.style.paddingTop = paddingTop;
                section.style.height = `${height}px`;
                section.firstChild.style.height = `${height}px`;
            }
            })
        }}
        render={({ state, fullpageApi }) => {
            return (
                <ReactFullpage.Wrapper>
                    <div className="section">
                        <MainFirst/>
                    </div>
                    <Div className="section">
                        <MainSecond />
                    </Div>
                    <Div className="section" color="bg">
                        <MainThird />
                    </Div>
                    <Div className="section">
                        <Mainfourth />
                    </Div>
                    <Div className="section" color="bg">
                        <MainFifth />
                    </Div>   
                    <Div className="section fp-auto-height" id="main-footer">
                    <Footer/>
                    </Div>                     
                </ReactFullpage.Wrapper>
            );
        }}
    />
)}  
export default FullPageMain;