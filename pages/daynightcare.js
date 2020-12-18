import React from "react";
import styled from "styled-components";
import Tab from "../src/components/Tab";
import ContentTitle from "../src/components/contents/ContentTitle";
import Schedule from "../src/components/contents/Schedule";
import { TopTitle, Div, Space, TitleDiv, TableDiv, SmallP } from "../src/components/contents/ContentsShareSt";
import Slide from "../src/components/contents/Slide";

const Title = styled.div`${TopTitle}`
const TextArea = styled.div`${Space}`
const TextWrapper = styled.div`${Div}`
const NumberIcon = styled.div`${TitleDiv}`
const SmallText = styled.p`${SmallP}`
const TableArea = styled.div`${TableDiv}`
const TD = styled.td`color: ${props => props.theme.pointColor};`
// ====================== style end ======================= //

const First = () => {
    const firstImages = [
        "/images/slide/dayNight/dayNight_01_01.JPG",
        "/images/slide/dayNight/dayNight_01_02.JPG",
        "/images/slide/dayNight/dayNight_01_03.JPG",
        "/images/slide/dayNight/dayNight_01_04.JPG",
        "/images/slide/dayNight/dayNight_01_05.JPG",
        "/images/slide/dayNight/dayNight_01_06.JPG",
        "/images/slide/dayNight/dayNight_01_07.JPG",
        "/images/slide/dayNight/dayNight_01_08.JPG"
    ];
    const secondImages = [
        "/images/slide/dayNight/dayNight_02_01.JPG",
        "/images/slide/dayNight/dayNight_02_02.JPG",
        "/images/slide/dayNight/dayNight_02_03.JPG",
        "/images/slide/dayNight/dayNight_02_04.JPG",
        "/images/slide/dayNight/dayNight_02_05.JPG",
        "/images/slide/dayNight/dayNight_02_06.JPG",
        "/images/slide/dayNight/dayNight_02_07.JPG",
        "/images/slide/dayNight/dayNight_02_08.JPG"
    ];
    const thirdImages = [
        "../images/slide/dayNight/dayNight_03_01.JPG",
        "../images/slide/dayNight/dayNight_03_02.JPG",
        "../images/slide/dayNight/dayNight_03_03.JPG",
        "../images/slide/dayNight/dayNight_03_04.JPG",
        "../images/slide/dayNight/dayNight_03_05.JPG",
        "../images/slide/dayNight/dayNight_03_06.JPG",
        "../images/slide/dayNight/dayNight_03_07.JPG"
    ];
    const forthImages = [
        "../images/slide/dayNight/dayNight_03_01.JPG",
        "../images/slide/dayNight/dayNight_03_02.JPG",
        "../images/slide/dayNight/dayNight_03_03.JPG",
        "../images/slide/dayNight/dayNight_03_04.JPG",
        "../images/slide/dayNight/dayNight_03_05.JPG",
        "../images/slide/dayNight/dayNight_03_06.JPG",
        "../images/slide/dayNight/dayNight_03_07.JPG"        
    ];
    return (
        <>
            <ContentTitle text="하루 중 일정 시간동안 어르신을 센터에서 보호하며, 어르신께서 센터에 계시는 동안 다양한 서비스를 받으실 수 있도록 안내드리고 있습니다."/>
            <TextArea>
                <TextWrapper flex={true} padding={true} textColor={true}>
                    <NumberIcon pointColor={true}><h5>01</h5></NumberIcon>
                    <h5>다양한 인지 강화 프로그램</h5>
                </TextWrapper>    
                <TextWrapper width="700px">
                    <p>하루에 세 번 다양한 프로그램이 운영되고 있습니다. 오전 체조 프로그램으로 건강을 유지하고, 오후에는 인지 / 체험 활동 위주의 프로그램으로 어르신들의 인지 기능 강화에 힘쓰고 있습니다.</p>
                </TextWrapper>     
                <Slide images={firstImages}/>
            </TextArea>
            <TextArea>
                <TextWrapper flex={true} padding={true} textColor={true}>
                    <NumberIcon pointColor={true}><h5>02</h5></NumberIcon>
                    <h5>활기차고 즐거운 일상 이벤트</h5>
                </TextWrapper>    
                <TextWrapper width="700px">
                    <p>어르신 생신잔치, 명절 체험 프로그램, 매달 시행되는 시장놀이 등 일상 내 다양한 이벤트로 일상을 더욱 즐겁게 보내실 수 있도록 매달 다양한 이벤트를 준비하고 있습니다.</p>
                </TextWrapper> 
                <Slide images={secondImages} />
            </TextArea>     
            <TextArea>
                <TextWrapper flex={true} padding={true} textColor={true}>
                    <NumberIcon pointColor={true}><h5>03</h5></NumberIcon>
                    <h5>물리치료 및 재활 도움 서비스</h5>
                </TextWrapper>    
                <TextWrapper width="700px">
                    <p>공기압 마사지기, 전신 마사지기, 족욕기, 반신욕기, 워커 등 물리치료 기기와 재활 기구를 갖춘 물리치료실을 보유하고 있습니다.</p>
                </TextWrapper> 
                <Slide images={thirdImages} />
            </TextArea>
            <TextArea>
                <TextWrapper flex={true} padding={true} textColor={true}>
                    <NumberIcon pointColor={true}><h5>04</h5></NumberIcon>
                    <h5>매일 건강 체크 및 일상 방역</h5>
                </TextWrapper>    
                <TextWrapper width="700px">
                    <p>센터 내 간호 선생님이 근무하여 매일 어르신들의 상태 체크를 진행합니다. 또한 각종 감염병 예방을 위한 일상 방역을 시행하고 있습니다.</p>
                </TextWrapper> 
                {/* <Slide />  */}
            </TextArea>
        </>
    )
}
const Second = () => {
    const times =["8:30 am","9:00 am","9:30 am","10:00 am","10:30 am","11:00 am","11:30 am","12:00 pm","12:30 pm","1:00 pm","1:30 pm","2:00 pm","2:30 pm","3:00 pm","3:30 pm","4:00 pm","4:30 pm","5:00 pm","5:30 pm","6:00 pm","6:30 pm"]
    const height = {
        time: "3600px",
        schedule: "3300px"
    }
    const contents =[
        {
            grid:"2",
            color: "tempBlue",
            time:"오전 8:30 ~ 오전 9:30",
            title:"송영서비스 및 전달사항 인계",
            type:"어르신을 센터에 안전하게 모시고 오는 시간입니다."
            + " 센터에 도착하면 요양보호사 선생님들께서 어르신을 맞이하고,"
            + " 보호자 분들의 전달사항을 확인합니다."
        },
        {
            grid:"1",
            color: "subPointColor",
            time:"오전 9:30 ~ 오전 10:00",
            title:"건강 체크 시간",
            type:"매일 오전 혈압 측정과 체온 측정이 진행됩니다."
        },
        {
            grid:"1",
            color: "subPointColor",
            time:"오전 10:00 ~ 오전 10:30",
            title:"오전 간식 시간",
            type:"오전 프로그램 활동 전 간식이 제공됩니다."
        },
        {
            grid:"2",
            color: "tempGreen",
            time:"오전 10:30 ~ 오전 11:30",
            title:"오전 프로그램 / 물리치료",
            type:"오전 프로그램 시간입니다. 하루를 상쾌하게 시작하실 수 있도록 체조 프로그램 위주로 진행되며, 프로그램 참여 대신 물리치료를 요청하신 어르신들은 물리 치료실로 안내합니다."
        },
        {
            grid:"2",
            color: "subPointColor",
            time:"오전 11:30 ~ 오후 12:30",
            title:"점심식사",
            type:"점심식사 시간입니다. 식사 후 투약 관리와 양치 지도가 진행됩니다."
        },
        {
            grid:"2",
            color: "subPointColor",
            time:"오후 12:30 ~ 오후 1:30",
            title:"오침 및 휴식",
            type:"식사 후 휴게 시간입니다. 낮잠, 휴식, TV시청 등 자유롭게 활동하실 수 있습니다."
        },
        {
            grid:"2",
            color: "tempGreen",
            time:"오후 1:30 ~ 오후 2:30",
            title:"오후 프로그램 I / 물리치료",
            type:"오후 프로그램 시간입니다. 인지 기능 강화.유지를 위한 인지활동 프로그램 위주로 진행되며, 프로그램 참여 대신 물리치료를 요청하신 어르신들은 물리치료실로 안내합니다."
        },
        {
            grid:"1",
            color: "subPointColor",
            time:"오후 2:30 ~ 오후 3:00",
            title:"오후 간식 시간",
            type:"오후 두번째 프로그램 활동 전 간식이 제공됩니다."
        },
        {
            grid:"3",
            color: "tempGreen",
            time:"오후 3:00 ~ 오후 4:30",
            title:"오후 프로그램 II / 물리치료",
            type:"두번째 오후 프로그램 시간입니다. 미술, 생활체육, 요리 등 체험 프로그램 위주로 진행되며, 프로그램 참여 대신 물리치료를 요청하신 어르신들은 물리치료실로 안내합니다."
        },
        {
            grid:"2",
            color: "subPointColor",
            time:"오후 4:30 ~ 오후 5:30",
            title:"저녁식사",
            type:"저녁식사 시간입니다. 식사 후 투약 관리와 양치 지도가 진행됩니다."
        },
        {
            grid:"2",
            color: "tempBlue",
            time:"오후 5:30 ~ 오후 6:30",
            title:"하원지도 및 송영서비스",
            type:"어르신을 안전하게 댁으로 모실 수 있도록 하원지도 및 송영서비스가 진행됩니다."
        }
    ]
    return (
        <>
        <ContentTitle text="수지 실버 주야간보호센터 어르신들의 하루 일과입니다"/>
        <Schedule 
            times={times}
            contents={contents}
            height={height}
        />
        </>
    )
}
const Third =() => {
    return (
        <>
        <TextArea>
            <TextWrapper flex={true} padding={true}>
                <NumberIcon><h5>01</h5></NumberIcon>
                <h5>이용대상</h5>
            </TextWrapper>
            <TextWrapper>
                <p>
                    1. 장기요양등급을 받은 인지지원등급 어르신<br />
                    2. 60세 이상 심신허약 및 뇌졸중, 경증치매 어르신으로 낮 동안 보호가 필요한 어르신
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
                <h5>입소절차 / 구비서류</h5>
            </TextWrapper>
            <TextWrapper>
                <p>
                    1. 장기요양인정서<br />
                    2. 표준장기요양이용계획서<br />
                    3. 건강진단서<br />
                    4. 국민기초생활보장법 수급자 증명서<br />
                    5. 복지용구 이용시 복지용구 급여확인서<br />
                </p>
            </TextWrapper>
        </TextArea>    
        <TextArea>
            <TextWrapper flex={true} padding={true}>
                <NumberIcon><h5>03</h5></NumberIcon>
                <h5>비용안내</h5>
            </TextWrapper>
            <TextWrapper>
                <p>주야간보호센터 시간별 급여비용</p>
                <SmallText>건강보험공단 2020년 1월 기준</SmallText>
            </TextWrapper>
            <TableArea>
                <table>
                    <thead>
                        <tr>
                            <td colSpan="2">구분</td>
                            <th>1등급</th>
                            <th>2등급</th>
                            <th>3등급</th>
                            <th>4등급</th>
                            <th>5등급</th>
                            <th>인지 등급</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th colSpan="2">3시간 ~ 6시간</th>
                            <td>35,030</td>
                            <td>32,430</td>
                            <td>29,940</td>
                            <td>28,570</td>
                            <td>27,210</td>
                            <td>27,210</td>
                        </tr>
                        <tr>
                            <th colSpan="2">6시간 ~ 8시간</th>
                            <td>46,960</td>
                            <td>43,500</td>
                            <td>40,150</td>
                            <td>38,790</td>
                            <td>37,410</td>
                            <td>37,410</td>
                        </tr>
                        <tr>
                            <th colSpan="2">8시간 ~ 10시간</th>
                            <td>58,410</td>
                            <td>54,110</td>
                            <td>49,960</td>
                            <td>48,590</td>
                            <td>47,210</td>
                            <td>47,210</td>
                        </tr>
                        <tr>
                            <th colSpan="2">10시간 ~ 12시간</th>
                            <td>64,350</td>
                            <td>59,610</td>
                            <td>55,070</td>
                            <td>53,680</td>
                            <td>52,320</td>
                            <td>47,210</td>
                        </tr>
                        <tr>
                            <th colSpan="2">12시간 이상</th>
                            <td>69,000</td>
                            <td>63,930</td>
                            <td>59,050</td>
                            <td>57,690</td>
                            <td>56,310</td>
                            <td>47,210</td>
                        </tr>
                    </tbody>    
                </table>
            </TableArea>
            <TextWrapper>
                <p>수지실버주야간보호센터 이용금액</p>
                <SmallText>월요일 ~ 금요일 일 8시간 기준</SmallText>
            </TextWrapper>
            <TableArea>
                <table>
                    <thead>
                        <tr>
                            <th colSpan="2">등급</th>
                            <th>1일 기준 본인부담금</th>
                            <th>20일 기준 본인부담금</th>
                            <th>비급여</th>
                            <th>이용금액</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th rowSpan="3">1등급</th>
                            <th>일반(15%)</th>
                            <td>8,762</td>
                            <td>175,240</td>
                            <td>160,000</td>
                            <TD>335,240</TD>
                        </tr>
                        <tr>
                            <th>감경대상자(9%)</th>
                            <td>5,257</td>
                            <td>105,138</td>
                            <td>160,000</td>
                            <TD>265,138</TD>
                        </tr>
                        <tr>
                            <th>감경대상자(6%)</th>
                            <td>3,505</td>
                            <td>70,092</td>
                            <td>160,000</td>
                            <TD>230,092</TD>
                        </tr>
                        <tr>
                            <th rowSpan="3">2등급</th>
                            <th>일반(15%)</th>
                            <td>8,117</td>
                            <td>162,340</td>
                            <td>160,000</td>
                            <TD>322,340</TD>
                        </tr>
                        <tr>
                            <th>감경대상자(9%)</th>
                            <td>4,870</td>
                            <td>97,398</td>
                            <td>160,000</td>
                            <TD>257,398</TD>
                        </tr>
                        <tr>
                            <th>감경대상자(6%)</th>
                            <td>3,247</td>
                            <td>64,932</td>
                            <td>160,000</td>
                            <TD>224,932</TD>
                        </tr>
                        <tr>
                            <th rowSpan="3">3등급</th>
                            <th>일반(15%)</th>
                            <td>7,299</td>
                            <td>145,980</td>
                            <td>160,000</td>
                            <TD>305,980</TD>
                        </tr>
                        <tr>
                            <th>감경대상자(9%)</th>
                            <td>4,496</td>
                            <td>89,928</td>
                            <td>160,000</td>
                            <TD>249,928</TD>
                        </tr>
                        <tr>
                            <th>감경대상자(6%)</th>
                            <td>2,998</td>
                            <td>59,952</td>
                            <td>160,000</td>
                            <TD>219,952</TD>
                        </tr>
                        <tr>
                            <th rowSpan="3">4등급</th>
                            <th>일반(15%)</th>
                            <td>7,100</td>
                            <td>142,000</td>
                            <td>160,000</td>
                            <TD>302,000</TD>
                        </tr>
                        <tr>
                            <th>감경대상자(9%)</th>
                            <td>4,373</td>
                            <td>87,462</td>
                            <td>160,000</td>
                            <TD>247,462</TD>
                        </tr>
                        <tr>
                            <th>감경대상자(6%)</th>
                            <td>2,915</td>
                            <td>58,308</td>
                            <td>160,000</td>
                            <TD>218,308</TD>
                        </tr>
                        <tr>
                            <th rowSpan="3">5등급</th>
                            <th>일반(15%)</th>
                            <td>6,897</td>
                            <td>137,940</td>
                            <td>160,000</td>
                            <TD>297,940</TD>
                        </tr>
                        <tr>
                            <th>감경대상자(9%)</th>
                            <td>4,249</td>
                            <td>84,978</td>
                            <td>160,000</td>
                            <TD>244,978</TD>
                        </tr>
                        <tr>
                            <th>감경대상자(6%)</th>
                            <td>2,833</td>
                            <td>56,652</td>
                            <td>160,000</td>
                            <TD>216,652</TD>
                        </tr>
                        <tr>
                            <th>인지 지원 등급</th>
                            <th>일반(15%)</th>
                            <td>6,897</td>
                            <td>137,940</td>
                            <td>160,000</td>
                            <TD>297,940</TD>
                        </tr>
                    </tbody>
                </table>
            </TableArea>
            <TextWrapper textColor={true}>
                <SmallText>* 비급여항목 : 식사 - 3,000원 / 간식 - 1,000원. 1일 2회 제공 *</SmallText>
                <p>
                    <br />
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
            tab: "하루일과안내",
            content: <Second />
        },
        {
            tab: "입소안내",
            content: <Third />
        }
    ];
    return(
        <Tab content={content}/>
    )
}

const DayNightCare = () =>{
    return (
        <>
        <Title><h3>수지 실버 주야간보호센터</h3></Title>
        <TabContents />
        </>
    )
}

export default DayNightCare;