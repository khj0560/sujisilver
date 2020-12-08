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
    width: 600px;
    @media(max-width: 660px) {
        width: 200px;
    }

    &::after{
        content:'';display:block;clear:both;
    }
`
const Item = styled.div`
    width: 300px;
    height: 300px;
    margin: 30px auto;
    float: left;
    @media(max-width: 660px) {
        width: 200px;
        height: 100%;
        
    }
`
const Main004Icon = styled(Icon)`
    margin: 0 auto;

    @media(max-width: 900px) {
        width: 170px;
        height: 170px;
        
    }
`
const Main004Text = styled(Text)`
    margin-top: 10px;
    text-align: center;
    & h5 {
        color: ${props => props.theme.pointColor};
    }
`

const Main004 = () => {
    return(
        <>
            <Main004Title 
                title1={{title: "일상 생활 도움은 "}}
                title2={{title: "수지 실버 방문요양센터", color: "red"}}
                subTitle={["노인성 질환으로 거동이나 일상생활 도움이 필요하신 어르신", "장기요양등급 1등급 ~ 5등급을 받은 어르신"]}
            />
            <div className="item_area flex_column_wrapper">
                <Wrapper>
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
                </Wrapper>
            </div>
            <Button to="/counsel" text="방문요양 상담 문의" />
        </>  
    )
}

export default Main004;