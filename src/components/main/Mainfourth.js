import React from 'react';
import styled from 'styled-components';
import Title from "../Title";
import Text from "../Text";
import Button from "./Button";
import Icon from "../Icon";

const Main004Title = styled(Title)`
    & div {
        @media(max-width: 900px) {
            width: 480px;
        }

        @media(max-width: 600px) {
            width: 100%;
        }
    }
`
const Wrapper = styled.div`
    display: block;
    margin: 0 auto;
    width: 100%;    
    max-width: 1024px;
    display: flex;
    justify-content: center;
    @media(max-width: 768px) {
        width: 100%;
        flex-direction: column;
    }
`
const MobileWrapper = styled.div`
    width:50%;
    display: flex;
    justify-content: center;
    @media(max-width: 768px) {
        width: 80%;
        margin: 0 auto;
    }
    @media(max-width: 480px) {
        width: 100%;
    }
`
const Item = styled.div`
    width: 45%;
    height: 300px;
    margin: 0px auto;
    @media(max-width: 768px) {
        width: 45%;
        height: 350px;
    }
`
const Main004Icon = styled(Icon)`
    width: 150px;
    height: 150px;
    margin: 0 auto;

    /* @media(max-width: 900px) {
        width: 170px;
        height: 170px;
        
    } */
`
const Main004Text = styled(Text)`
    margin-top: 10px;
    text-align: center;
    & h5 {
        color: ${props => props.theme.pointColor};
    }
`

const MainFourth = () => {
    return(
        <>
            <Main004Title 
                title1={{title: "일상 생활 도움은 "}}
                title2={{title: "수지 실버 방문요양센터", color: "red"}}
                subTitle={["노인성 질환으로 거동이나 일상생활 도움이 필요하신 어르신", "장기요양등급 1등급 ~ 5등급을 받은 어르신"]}
            />
            <div className="item_area flex_column_wrapper">
                <Wrapper>
                    <MobileWrapper>
                        <Item>
                            <Main004Icon image="/images/main/main004_icon_01.png"/>
                            <Main004Text
                                title="신체활동 지원 서비스"
                                text={["재활운동보조, 목욕, 병원 동행, 식사도움, 산책, 운동 동행"]}
                            />
                        </Item>
                        <Item>
                            <Main004Icon image="/images/main/main004_icon_02.png"/>
                            <Main004Text
                                title="일상생활 지원 서비스"
                                text={["식사준비, 취사도움, 청소 및 세탁 등"]}
                            />
                        </Item>
                    </MobileWrapper>
                    <MobileWrapper>
                    <Item>
                        <Main004Icon image="/images/main/main004_icon_03.png"/>
                        <Main004Text
                            title="개인활동 지원 서비스"
                            text={["외출시 동행, 장보기, 약 타오기"]}
                        />
                    
                    </Item>
                    <Item>
                        <Main004Icon image="/images/main/main004_icon_04.png"/>
                        <Main004Text
                            title="정신 지원 서비스"
                            text={["말벗, 격려 및 위로, 생활 상담"]}
                        />
                    </Item>
                    </MobileWrapper>
                </Wrapper>
            </div>
            <Button to="/counsel" text="방문요양 상담 문의" />
        </>  
    )
}

export default MainFourth;