import React, { useState, useEffect } from "react";
import { withRouter } from 'next/router'
import styled, { ThemeProvider, css } from 'styled-components';
import GlobalStyles from "../src/styles/GlobalStyles";
import Theme from "../src/styles/Theme";
import Head from 'next/head'
import Header from "../src/components/header/Header";
import Footer from "../src/components/Footer";
import ErrorBoundary from "../src/components/ErrorBoundary";
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
    if(props.fullpageOff){
        return `${Box}`;
    }
  }}
 ` 

function MyApp({ Component, pageProps, router }) {
  const [width, setWidth] = useState(0);
  const [paddingValue, setPaddingValue] = useState();
  const [fullpageOff, setFullpageOff] = useState();
  useEffect(()=>{
    setWidth(window.innerWidth);
    if(router.pathname == "/") {
        setPaddingValue("none")
        //setFullpageOff(width < 768 ? true : false);
        setFullpageOff(false);
    }else {
      setPaddingValue(width < 1024 ? "113px" : "70px");
      setFullpageOff(true);
    }
  });   
  return (
    <>
    <ErrorBoundary>
      <Head>
        <title>수지실버노인복지센터</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
      </Head>
      <ThemeProvider theme={Theme}>
        <GlobalStyles />
        <Header/>
        <ContentDiv id="content" paddingVal={paddingValue}>
            <Wrapper fullpageOff={fullpageOff}>
              <Component {...pageProps}></Component>
            </Wrapper>  
        </ContentDiv>
        <Footer/>
      </ThemeProvider>
    </ErrorBoundary>
    </>
  )
}

export default withRouter(MyApp);
