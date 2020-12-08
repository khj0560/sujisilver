import React, { useState } from "react";
import styled, { css } from "styled-components";
import { Link } from "react-router-dom";
import {withRouter} from "react-router-dom";

export const Btn = css`
  position: fixed;
  top: 0;
  left: 0;
  padding: 27px;
  z-index: 20;
  cursor: pointer;
  background: none;
  & > div {
    position: relative;
    display: block;
    width: 22px;
    height: 4px;
    margin: 3px auto;
    background-color: ${props => props.theme.subPointColor};
    border-radius: 10px;
  }
  & > div::nth-of-type(1) {
    margin-top: 0px;
  }
  & > div::nth-of-type(3) {
    margin-bottom: 0px;
  }  
`
export const Slider = css`
    position: relative;
    transition: transform .2s ease; 
`
const Wrapper = styled.div`
  background-color: ${props => props.theme.subPointColor};
  position: fixed;
  padding-top: 30px;
  top: 0; bottom: 0; left: 0;
  width: 80%;
  z-index: -1;
  & li {
    color: #fff;
  }
`
const Closer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  padding: 27px;
    position: relative;
    display: block;
    width: 22px;
    height: 4px;
    background-color: ${props => props.theme.whiteColor};
    border-radius: 10px;
    cursor: pointer;
    & > div::nth-of-type(1) {
        -webkit-transform: rotate(45deg);
        -moz-transform: rotate(45deg);
        -o-transform: rotate(45deg);
        transform: rotate(45deg);
        background-color:black;
    }
    & > div::nth-of-type(2) {
        -webkit-transform: rotate(0deg);
        -moz-transform: rotate(0deg);
        -o-transform: rotate(0deg);
        transform: rotate(0deg);
    }  
`
const Menu = () => (
    <Wrapper>
        <Closer>
            <div></div>
            <div></div>
        </Closer>
        <div>
            <ul>
                <li>센터소개</li>
                <li>주야간보호 안내</li>
                <li>요양원 안내</li>
                <li>방문요양 안내</li>
                <li>상담신청</li>
            </ul>
        </div>    
    </Wrapper>
)

export default Menu;