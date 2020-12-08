import React from 'react';
import styled from 'styled-components';
import Link from "next/link";

const MainBox = styled.div`
    background-color: ${props => props.theme.whiteColor};
`
const MainImg = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    color: #fff;
    height: 40vh;
    background-image: url(${props => props.image});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center center;
    text-shadow: 0 0 0 #333, 0 5px 20px rgba(0,0,0,0.3);

    & h2{
        font-family: 'TB'
    }
`
const BtnArea = styled.div`
    position: relative;
    overflow: hidden;
    width: 100%;
    padding: 20px 0 50px 0;
    transition-duration:.1s;
    text-align: center;
` 
const BtnList = styled.ul`
    overflow-y:hidden;
    overflow-x:auto;
    position:relative;
    width:100%;
    padding: 20px;
    text-align:center;
    vertical-align:top;
    white-space:nowrap;
    -webkit-overflow-scrolling:touch;

    &::-webkit-scrollbar {
        display:none;
    }
    &::-o-scrollbar {
        display:none;
    }
    &::-ms-scrollbar {
        display:none;
    }
`
const BtnItems = styled.li`
    display:inline-block;
    position:relative;
    min-width:58px;
    margin:0 8px;
    transition-duration:.3s;
    border-radius: 10px;
    background-image: url(${props => props.image});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center center;
    box-shadow: 0 0 0 #333, 0 5px 20px rgba(0,0,0,0.2);
    width: 200px;
    height: 200px;

    &:first-child {
        margin: 0 8px 0 0;
    }
    &:last-child {
        margin: 0 0 0 8px;
    }

    & h5 {
        padding-top: 10px;
        font-family: 'TB';
    }
`

const Main001Mobile = () => (
    <MainBox>
        <MainImg image="/images/main/main_img.jpg">
            <div>
                <h5>어르신에게 재활의 의지를</h5>
                <h5>가족은 삶의 여유를</h5>
                <h2>수지 실버 주야간보호센터</h2>
                <h2>수지 실버 요양원</h2>
            </div>
        </MainImg>
        <BtnArea>
            <h5>주요서비스 안내</h5>
            <BtnList>
                <Link href="/daynightcare"><a><BtnItems image="/images/main/main001_btn_01.png"><h5>주야간보호센터</h5></BtnItems></a></Link>
                <Link href="/nursinghome"><a><BtnItems image="/images/main/main001_btn_02.png"><h5>요양원</h5></BtnItems></a></Link>
                <Link href="/visitcare"><a><BtnItems image="/images/main/main001_btn_03.png"><h5>방문요양센터</h5></BtnItems></a></Link>
            </BtnList>
        </BtnArea>
    </MainBox>
)

export default Main001Mobile;