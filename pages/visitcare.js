import React from "react";
import styled from "styled-components";
import Tab from "../src/components/Tab";
import ContentTitle from "../src/components/contents/ContentTitle";
import { TopTitle, Div, Space, TitleDiv, TableDiv, SmallP } from "../src/components/contents/ContentsShareSt";
import Slide from "../src/components/contents/Slide";

const Title = styled.div`${TopTitle}`
const TextArea = styled.div`${Space}`
const TextWrapper = styled.div`${Div}`
const NumberIcon = styled.div`${TitleDiv}`
const TableArea = styled.div`${TableDiv}`
const SmallWidthTable = styled(TableArea)`
    width: 60%;
    margin: 0 auto;
    @media(max-width: 768px) {
        width: 100%;
    }
`
const TD = styled.td`
    color: ${props => props.theme.pointColor};
`
const First = () => (
    <>
        <ContentTitle text="하루 중 일정 시간동안 어르신을 센터에서 보호하며, 어르신께서 센터에 계시는 동안 다양한 서비스를 받으실 수 있도록 안내드리고 있습니다."/>
        <TextArea>
            <TextWrapper flex={true} padding={true} textColor={true}>
                <NumberIcon pointColor={true}><h5>01</h5></NumberIcon>
                <h5>신체활동 지원 서비스</h5>
            </TextWrapper>    
            <TextWrapper width="700px">
                <p>재활운동보조, 목욕, 병원 동행, 식사도움, 산책, 운동 동행 등 신체활동 지원 서비스를 제공합니다.</p>
            </TextWrapper>     
            
        </TextArea>
        <TextArea>
            <TextWrapper flex={true} padding={true} textColor={true}>
                <NumberIcon pointColor={true}><h5>02</h5></NumberIcon>
                <h5>일상생활 지원 서비스</h5>
            </TextWrapper>    
            <TextWrapper width="700px">
                <p>식사준비, 취사도움, 청소 및 세탁 등 일상생활 지원 서비스를 제공합니다.</p>
            </TextWrapper> 
            
        </TextArea>     
        <TextArea>
            <TextWrapper flex={true} padding={true} textColor={true}>
                <NumberIcon pointColor={true}><h5>03</h5></NumberIcon>
                <h5>개인활동 지원 서비스</h5>
            </TextWrapper>    
            <TextWrapper width="700px">
                <p>외출시 동행, 장보기, 약 타오기 등 개인활동 지원 서비스를 제공합니다.</p>
            </TextWrapper> 
            
        </TextArea>
        <TextArea>
            <TextWrapper flex={true} padding={true} textColor={true}>
                <NumberIcon pointColor={true}><h5>04</h5></NumberIcon>
                <h5>정서 지원 서비스</h5>
            </TextWrapper>    
            <TextWrapper width="700px">
                <p>말벗, 격려 및 위로, 생활 상담 등 정서 지원 서비스를 제공합니다.</p>
            </TextWrapper> 
            
        </TextArea>
    </>
)
const Second =() => {
    return (
        <>
        <TextArea>
            <TextWrapper flex={true} padding={true}>
                <NumberIcon><h5>01</h5></NumberIcon>
                <h5>이용대상</h5>
            </TextWrapper>
            <TextWrapper>
                <p>
                1. 장기요양등급을 받은 인지지원등급 어르신
                </p>
            </TextWrapper>
            <TextWrapper textColor={true}>
                <p>
                    <br />
                    수지 실버 주야간보호센터에서는 노인장기요양등급 신청 과정을 도와드리고 있습니다.<br />
                    전화로 문의주시면 친절하게 안내해 드리겠습니다.
                </p>
            </TextWrapper>
        </TextArea>
        <TextArea>
            <TextWrapper flex={true} padding={true}>
                <NumberIcon><h5>02</h5></NumberIcon>
                <h5>입소절차 / 구비서류 / 준비물</h5>
            </TextWrapper>
            <TextWrapper>
                <p>
                    1. 장기요양인정서<br />
                    2. 표준장기요양이용계획서<br />
                </p>
            </TextWrapper>
        </TextArea>
        <TextArea>
            <TextWrapper flex={true} padding={true}>
                <NumberIcon><h5>03</h5></NumberIcon>
                <h5>비용안내</h5>
            </TextWrapper>
            <TextWrapper>
                <p>방문요양 월 한도액</p>
            </TextWrapper>
            <SmallWidthTable>
                <table>
                    <thead>
                        <tr>
                            <th>등급</th>
                            <th>월한도액</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th>1등급</th>
                            <td>1,498,300</td>
                        </tr>
                        <tr>
                            <th>2등급</th>
                            <td>1,331,800</td>
                        </tr>
                        <tr>
                            <th>3등급</th>
                            <td>1,276,300</td>
                        </tr>
                        <tr>
                            <th>4등급</th>
                            <td>1,173,200</td>
                        </tr>
                        <tr>
                            <th>5등급</th>
                            <td>1,007,200</td>
                        </tr>
                        <tr>
                            <th>인지지원등급</th>
                            <td>566,600</td>
                        </tr>
                    </tbody>
                </table>
            </SmallWidthTable>
            <TextWrapper>
                <p>방문요양 1회당 이용요금 및 본인부담금</p>
            </TextWrapper>
            <TableArea>
                <table>
                    <thead>
                        <tr>
                            <th colSpan="2">등급</th>
                            <th>급여액</th>
                            <th>본인부담액</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th rowSpan="3">30분</th>
                            <th>일반(15%)</th>
                            <td rowSpan="3">14,530</td>
                            <TD>2,180</TD>
                        </tr>
                        <tr>
                            <th>감경대상자(9%)</th>
                            <TD>1,308</TD>
                        </tr>
                        <tr>
                            <th>감경대상자(6%)</th>
                            <TD>872</TD>
                        </tr>
                        <tr>
                            <th rowSpan="3">60분</th>
                            <th>일반(15%)</th>
                            <td rowSpan="3">22,310</td>
                            <TD>3,347</TD>
                        </tr>
                        <tr>
                            <th>감경대상자(9%)</th>
                            <TD>2,008</TD>
                        </tr>
                        <tr>
                            <th>감경대상자(6%)</th>
                            <TD>1,339</TD>
                        </tr>
                        <tr>
                            <th rowSpan="3">90분</th>
                            <th>일반(15%)</th>
                            <td rowSpan="3">29,920</td>
                            <TD>4,488</TD>
                        </tr>
                        <tr>
                            <th>감경대상자(9%)</th>
                            <TD>2,693</TD>
                        </tr>
                        <tr>
                            <th>감경대상자(6%)</th>
                            <TD>1,795</TD>
                        </tr>
                        <tr>
                            <th rowSpan="3">120분</th>
                            <th>일반(15%)</th>
                            <td rowSpan="3">37,780</td>
                            <TD>5,667</TD>
                        </tr>
                        <tr>
                            <th>감경대상자(9%)</th>
                            <TD>3,400</TD>
                        </tr>
                        <tr>
                            <th>감경대상자(6%)</th>
                            <TD>2,267</TD>
                        </tr>
                        <tr>
                            <th rowSpan="3">150분</th>
                            <th>일반(15%)</th>
                            <td rowSpan="3">42,930</td>
                            <TD>6,440</TD>
                        </tr>
                        <tr>
                            <th>감경대상자(9%)</th>
                            <TD>3,864</TD>
                        </tr>
                        <tr>
                            <th>감경대상자(6%)</th>
                            <TD>2,576</TD>
                        </tr>
                        <tr>
                            <th rowSpan="3">180분</th>
                            <th>일반(15%)</th>
                            <td rowSpan="3">47,460</td>
                            <TD>7,119</TD>
                        </tr>
                        <tr>
                            <th>감경대상자(9%)</th>
                            <TD>4,271</TD>
                        </tr>
                        <tr>
                            <th>감경대상자(6%)</th>
                            <TD>2,848</TD>
                        </tr>
                        <tr>
                            <th rowSpan="3">210분</th>
                            <th>일반(15%)</th>
                            <td rowSpan="3">51,630</td>
                            <TD>7,745</TD>
                        </tr>
                        <tr>
                            <th>감경대상자(9%)</th>
                            <TD>4,647</TD>
                        </tr>
                        <tr>
                            <th>감경대상자(6%)</th>
                            <TD>3,098</TD>
                        </tr>
                        <tr>
                            <th rowSpan="3">240분</th>
                            <th>일반(15%)</th>
                            <td rowSpan="3">55,490</td>
                            <TD>8,324</TD>
                        </tr>
                        <tr>
                            <th>감경대상자(9%)</th>
                            <TD>4,994</TD>
                        </tr>
                        <tr>
                            <th>감경대상자(6%)</th>
                            <TD>3,329</TD>
                        </tr>
                    </tbody>
                </table>
            </TableArea>            
            <TextWrapper textColor={true}>
                <p>
                    다양한 요인으로 비용이 달라질 수 있습니다.<br />
                    정확한 비용은 센터로 문의주시면 친절하게 안내해 드리겠습니다.
                </p>
            </TextWrapper>
        </TextArea>
        </>
    )
}
const TabContents = () => {
    const content = [
        {
            tab: "서비스안내",
            content: <First />
        },
        {
            tab: "비용안내",
            content: <Second />
        }
    ];
    return(
        <Tab content={content}/>
    )
}

const VisitCare = () =>{
    return (
        <>
        <Title><h3>수지 실버 방문요양센터</h3></Title>
        <TabContents />
        </>
    )
}

export default VisitCare;