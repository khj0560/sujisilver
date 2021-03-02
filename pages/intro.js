import React, {useState} from "react";
import styled from 'styled-components';
import Image from 'next/image';
import Link from "next/link";
import { TitleDiv } from "../src/components/contents/ContentsShareSt";
import Slide from "../src/components/contents/Slide";

const NumberIcon = styled.div`${TitleDiv}`
const TextWrapper = styled.div`
    width: ${props => props.width ? props.width : "100%" };
    text-align: center;
    padding : ${props => props.padding ? "15px 0 15px 0" : "0"};
    color : ${props => props.textColor ? props.theme.pointColor : props.theme.darkGrayColor};
    display: flex;
    justify-content: flex-start;
    & > div:first-child {
        margin: 0 10px 0 0;
    }
    & > h4 {
        text-align: left;
    }
`
const Article = styled.article`
    max-width: 1024px;
    margin: 0 auto;
`
const WelcomeSection = styled.section`
    width: 100%;
    margin: 50px 0;
    display: flex;
    justify-content: center;
    & > div:first-child {
        width: 100%;
        margin-right: 15px;
        position: relative;
        display: flex;
        justify-content: flex-end;
    }
    & > div:last-child {
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        & > h3 {
            margin-bottom: 15px;
        }
    }
    @media (max-width: 768px) {
        flex-direction: column;
        justify-content: center;
        & > div:first-child {
            width: 100%;
            margin-right: 15px;
            position: relative;
            display: flex;
            justify-content: center;
        }
        & > div:last-child {
            margin-top: 30px;
            width: 100%;
            text-align: center;
            display: flex;
            flex-direction: column;
            justify-content: center;
            & > h3 {
                margin-bottom: 15px;
            }
        }
    }
`
const TextBox = styled.div`
    max-width: ${props => props.width ? props.width : '100%'};
    text-align: ${props => props.textAlign ? props.textAlign : 'center'};
    padding-bottom: 15px;
    margin: 0 auto;
`
const BlockSection = styled.section`
    display: block;
    margin: 100px 0;
`
const FlexBox = styled.div`
    display: flex;
    justify-content: center;
    min-height: 350px;
    margin: 50px 0;
    & > div:first-child {
        width: 100%;
        position: relative;
        margin-right: 30px;
        min-height: 350px;
    }
    & > div:last-child {
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
    }
    @media (max-width: 768px) {
        flex-direction: column;

    }
`
const Naver = styled.div`
    margin: 30px auto;
    padding: 10px 0;
    background-color: #00c63a;
    color: #fff;
    text-align: center;
    width: 80%;
    cursor: pointer;
`

const Intro = () =>{
    const centerImages = [
        "/images/slide/intro/intro01.jpg",
        "/images/slide/intro/intro02.jpg",
        "/images/slide/intro/intro03.jpg",
        "/images/slide/intro/intro04.jpg",
        "/images/slide/intro/intro05.jpg",
        "/images/slide/intro/intro06.jpg",
        "/images/slide/intro/intro07.jpg",
        "/images/slide/intro/intro08.jpg",
    ]
    return(
        <Article>
            <WelcomeSection>
                <div>
                    <Image
                        src="/images/intro/intro.png"
                        alt="intro" 
                        width={400}           
                        height={400}           
                    />
                </div>
                <div>
                    <h3>환영합니다</h3>
                    <p>
                        어르신들께서 행복한 공간을 만들기 위해<br/>
                        노력하는 사람들이 모였습니다.<br/>
                        오늘 이 소중한 하루를 함께하고 싶습니다.<br/><br/>
                        소중한 당신을 위한 쾌적한 공간<br/>
                        수지실버주야간보호센터로 여러분을 초대합니다.
                    </p>
                </div>
            </WelcomeSection>
            <BlockSection>
                <TextBox width="720px">
                    <h3>어르신들의 안락한 생활을 위한 깔끔하고 쾌적한 공간</h3>
                </TextBox>    
                <TextBox width="720px">
                    <p>
                    어르신들께서 생활하시는 공간입니다. 채광이 좋아 센터 분위기가 밝고 어르신들께서 안전하게 생활하실 수 있도록
                    다양한 안전시설이 갖춰져 있습니다.
                    </p>
                </TextBox>    
                <Slide images={centerImages} swiperId="introPageSlide"/>

            </BlockSection>
            <BlockSection>
                <TextBox width="420px">
                    <h3>진심을 담으면 서비스가 다릅니다<br/> 수지 실버의 어르신 케어 시스템</h3>
                </TextBox>    
                <FlexBox>
                    <div>
                        <Image
                            src="/images/intro/care01.jpg"
                            alt="care" 
                            layout="fill"                
                            objectFit="cover"
                        />
                    </div>
                    <div>
                        <TextWrapper flex={true} padding={true} >
                            <NumberIcon><h4>01</h4></NumberIcon>
                            <h4>다양한 인지 강화 프로그램과 색다른 이벤트</h4>
                        </TextWrapper>   
                        <p>
                        매일 하루에 세번 다양한 프로그램이 진행됩니다. 미술 /민요(음악)/인지체조/웃음치료/건강체조 등 
                        다양한 인지활동 전문 외부강사님이 센터에 방문하여 어르신들의 인지 기능 활성화를 위한 여러가지 프로그램을 진행합니다
                        </p>
                        <Link href="https://blog.naver.com/PostList.nhn?blogId=ss-nh&categoryNo=14&from=postList&parentCategoryNo=14">
                            <Naver>
                                <p>더 많은 활동 사진을 보고 싶으신가요?</p>
                                <h3>네이버 블로그 바로가기</h3>
                            </Naver>
                        </Link>
                    </div>
                </FlexBox>
                <FlexBox>
                    <div>
                        <Image
                            src="/images/intro/care02.jpg"
                            alt="care" 
                            layout="fill"                
                            objectFit="cover"
                        />
                    </div>
                    <div>
                        <TextWrapper flex={true} padding={true} >
                            <NumberIcon><h4>02</h4></NumberIcon>
                            <h4>어르신을 위한 안전한 재활운동 시설 워킹플러스</h4>
                        </TextWrapper>    
                        <p>
                        워킹플러스는 천장에 레일을 설치하여, 보행훈련을 자유롭게 할 수 있는 재활시스템입니다.
                        저희 센터에서는 뇌졸중이나 파킨슨병, 척수손상 등 신경계질환 후 재활운동이 필요한 어르신들께서 낙상의 두려움 없이 재활에 참여할 수 있도록 
                        16m 길이의 워킹플러스 재활 기구를 보유하고 있습니다.
                        </p>
                        
                    </div>
                </FlexBox>
                <FlexBox>
                    <div>
                        <Image
                            src="/images/intro/care03.jpg"
                            alt="care" 
                            layout="fill"                
                            objectFit="cover"
                        />
                    </div>
                    <div>
                        <TextWrapper flex={true} padding={true} >
                            <NumberIcon><h4>03</h4></NumberIcon>
                            <h4>코로나와 감염병 예방을 위한 일일방역</h4>
                        </TextWrapper>    
                        <p>
                            코로나와 감염병 예방을 위해 매일 센터 내부 방역을 시행하고 있습니다. 또한 어르신들께서 늘 마스크를 착용하고 생활하실 수 있도록 수시로 안내드리며 식사시간이나 간식시간 전 손 소독을 철저히 진행합니다.
                        </p>
                        
                    </div>
                </FlexBox>
                <FlexBox>
                    <div>
                        <Image
                            src="/images/intro/care04.jpg"
                            alt="care" 
                            layout="fill"                
                            objectFit="cover"
                        />
                    </div>
                    <div>
                        <TextWrapper flex={true} padding={true} >
                            <NumberIcon><h4>04</h4></NumberIcon>
                            <h4>매일 건강 체크</h4>
                        </TextWrapper>    
                        <p>
                        어르신들의 건강 상태는 매일 꼼꼼히 체크되어야 합니다. 센터에서는 혈압, 체온, 식사량 등의 건강 상태를 매일 체크하고 관리합니다. 
                        </p>
                        
                    </div>
                </FlexBox>
            </BlockSection>
        </Article>
    )
}

export default Intro;