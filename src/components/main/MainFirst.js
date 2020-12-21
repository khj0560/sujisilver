import React from "react";
import styled from "styled-components";
import Link from "next/link";

const Main001Box = styled.div`
    background: url('/images/main/main_img.jpg');
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center center;
    display: flex;
    justify-content: center;
    flex-direction: column;
    width: 100%;
    height: 100%;
`
const MainTitleArea = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    width: 100%;
    height: 100%;
    line-height: 50px;
    text-align: center;
    color: ${props => props.theme.whiteColor};
    text-shadow: 0 0 0 #333, 0 5px 10px rgba(0,0,0,0.3);
    height: 35%;
    z-index: 30;
    & > h3 {
        font-family: 'TR';
    }

    & h1 {
        font-family: 'TB';
        font-size: ${props => props.theme.titleSize01};
        display: inline;
    }

    & > h3, > h1 {
        padding: 0 50px;
    }
`
const MainBtnArea = styled.div`
    display: flex;
    justify-content: center;
    width: 100%;
    width: 80%;
    max-width: 1800px;
    height: 50%;
    margin: 0 auto;
    & > div {
        margin: 0 10px;

        @media (max-width: 1300px) {
        width: 25%;
        }
    } 
    
    @media (max-width: 1200px) {
        width: 100%;
    }    
`
const ArrowBottom = styled.div`
    position: absolute;
    width: 100%;
    bottom: 50px;
    text-align: center;
    z-index: 100;

    & > a {
        display: inline-block;
        width: 65px;
        height: 65px;
        border-radius: 50%;
        border: 1px solid #fff;
        background: url('/images/main/arrow_bottom.png') no-repeat 50% 0;
        color: transparent;
    }    
    @media (max-width: 1024px) {
        display: none;
    }   
`
const MainBtn = styled.div`
    position: relative;
    width: 22%;
    border-radius: 10px;
    & div:first-child {
        position: absolute;
        width: 100%;
        top: 5%;
        left: 50%;
        transform: translate(-50%,0);
        text-align: center;
        z-index: 10;
        @media(max-width: 900px) {
            top: 2%
        }
    }

    & h3 {
        font-family: 'TB';
        font-size: ${props => props.theme.titleSize03};
        text-align: center;
        border-radius: 10px 10px 0 0;
        @media(max-width: 900px) {
            font-size: ${props => props.theme.titleSize04};
        }
    }

    & button {
        width: 100%;
        color: ${props => props.theme.whiteColor};
        background-color: ${props => props.theme.pointColor};
        padding: 20px 0;
        border-radius: 0 0 10px 10px;
        margin: 0;
    }

`
const BtnImg = styled.div`
    width: 100%;
    padding-top: 80%;
    position: relative;
    text-align: center;
    border-radius: 10px 10px 0 0;
    background: url(${(props) => props.image});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center center;
`
const BgColor = styled.div`
    position: absolute;
    background-color: rgba(0, 0, 0, 0.2);
    width: 100%;
    height: 100%;
`
const MainBtnComp = ({link,title,image}) => (
    <MainBtn>
        <Link href={link}>
            <a>
                <div>
                <h3>{title}</h3>
                </div>
                <BtnImg image={image}/>
                <button><h4>센터 소개 바로가기</h4></button>
            </a>
        </Link>
    </MainBtn>
)

const MainFirst = () => {

    return (                
        <Main001Box>
            <BgColor />
            <MainTitleArea>
                <h3>어르신에게 재활의 의지를, 가족은 삶의 여유를</h3>
                <h1>수지 실버 주야간보호센터 . 요양원</h1>
            </MainTitleArea>
            <MainBtnArea>
                <MainBtnComp 
                    title="주야간보호센터"
                    image="/images/main/main001_btn_01.png"
                    link="/daynightcare"
                />
                <MainBtnComp 
                    title="요양원"
                    image="/images/main/main001_btn_02.png"
                    link="/nursinghome"
                />
                <MainBtnComp 
                    title="방문요양"
                    image="/images/main/main001_btn_03.png"
                    link="/visitcare"
                />
            </MainBtnArea>   
            {/* <ArrowBottom><a href="#main-second"></a></ArrowBottom> */}
        </Main001Box>
    )
}

export default MainFirst;