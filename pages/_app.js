import React, { useState } from "react";
import { withRouter } from 'next/router'
import styled, { ThemeProvider, css } from 'styled-components';
import GlobalStyles from "../src/styles/GlobalStyles";
import Theme from "../src/styles/Theme";
import Head from 'next/head'
import Header from "../src/components/header/Header";
import "../src/styles/style.css";

const Box = css`
  width: 1240px;
  margin: 0 auto;
  background-color: ${props => props.theme.whiteColor};

  @media (max-width: 1440px) {
    width: 1024px;
    padding: 0 30px;
  }
  @media (max-width: 1024px) {
    width: 100%;
    padding: 0 20px;
  }
`
const ContentDiv = styled.div`
    ${props => {
        if(props.paddingVal) {
          if(props.paddingVal == "none") {
            return ``
          }else {
            return `padding-top: ${props.paddingVal}`
          }
        }
    }};
`
const Wrapper = styled.div`
  ${props => {
    if(!props.fullpageOn){
        return `${Box}`;
    }
  }}
 ` 

function MyApp({ Component, pageProps, router }) {
  const [width, setWidth] = React.useState(0);
  const [paddingValue, setPaddingValue] = React.useState();
  const [fullpageOn, setFullpageOn] = React.useState(false);
  React.useEffect(()=>{
      setWidth(window.innerWidth);
      if(router.pathname == "/") {
          setPaddingValue("none")
          setFullpageOn(width < 768 ? false : true)
      }else {
        setPaddingValue(width < 1024 ? "113px" : "70px");
      }
  });   
  return (
    <>
      <Head>
        <title>수지실버노인복지센터</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ThemeProvider theme={Theme}>
        <GlobalStyles />
        <Header/>
        <ContentDiv id="content" paddingVal={paddingValue} fullpageOn={fullpageOn}>
            <Wrapper fullpageOn={fullpageOn}>
              <Component {...pageProps}></Component>
            </Wrapper>  
        </ContentDiv>
      </ThemeProvider>
    </>
  )
}

export default withRouter(MyApp);
