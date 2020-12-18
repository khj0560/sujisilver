import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Title from "../Title";
import Button from "./Button";
import SwiperCore, { Navigation, Pagination } from 'swiper';
import {Swiper, SwiperSlide} from "swiper/react";
import "swiper/swiper-bundle.css";

///////// Main css /////////
const SlideWrapper = styled.div`
  margin: 30px 0;
  padding: 0 30px;
`
const Test = styled.div`
    width: 100%;
    border: 2px solid ${props => props.theme.lightGrayColor};
    border-radius: 10px;
    background-color: ${props => props.theme.bgColor};
`
const SlideImg = styled.img`
    width: 100%;
    border-radius: 8px 8px 0 0;
`
const SlideText = styled.div`
    width: 100%;
    padding: 15px 20px 20px 20px;
    & h5 {
        color: ${props => props.theme.pointColor}
    }
`
SwiperCore.use([Navigation, Pagination]);
const Slide = () => {
    const [width, setWidth] = useState();
    const [numberOfSlide, setNumberOfSlide] = useState(2.5);
    const [navOnOff, setNavOnOff] = useState(width < 768 ? false : true)
    useEffect(() => {
        setWidth(window.innerWidth);
        if(width < 480){
            setNumberOfSlide(1);
        }else if(width < 1024){
            setNumberOfSlide(1.5);
        }
    })
    return (
        <>
            <SlideWrapper id="mainSlide">
                <Swiper
                    id = "swiper"
                    slidesPerView = {numberOfSlide}
                    spaceBetween = {10}
                    wrapperTag = "ul"
                    pagination
                    navigation = {navOnOff}
                >
                    <SwiperSlide key="slide-1" tag="li">
                        <Test>
                            <SlideImg src="/images/main/main002_01.jpg" alt="Slide01" />
                            <SlideText>
                                <h5>매일 다양한 프로그램</h5>
                                <p>다양한 실버 인지 프로그램과 건강 체조로 일상을 보다 건강하게 유지하세요</p>
                            </SlideText>
                        </Test>
                    </SwiperSlide>
                    <SwiperSlide key="slide-2" tag="li">
                        <Test>
                            <SlideImg src="/images/main/main002_02.jpg" alt="Slide02" />
                            <SlideText>
                                <h5>즐거운 일상 이벤트</h5>
                                <p>생신잔치, 체험 프로그램, 시장놀이 등 다양한 이벤트로 즐거운 일상을 보내세요</p>
                            </SlideText>
                        </Test>
                    </SwiperSlide>
                    <SwiperSlide key="slide-3" tag="li">
                        <Test>
                            <SlideImg src="/images/main/main002_01.jpg" alt="Slide01" />
                            <SlideText>
                                <h5>물리치료 및 재활 도움</h5>
                                <p>다양한 물리치료 기기와 재활 기구를 갖춘 물리치료실을 보유하고 있습니다</p>
                            </SlideText>
                        </Test>
                    </SwiperSlide>
                    <SwiperSlide key="slide-4" tag="li">
                        <Test>
                            <SlideImg src="/images/main/main002_01.jpg" alt="Slide01" />
                            <SlideText>
                                <h5>매일 건강 체크</h5>
                                <p>센터 내 간호선생님께서 매일 어르신들의 상태 체크를 진행합니다.</p>
                            </SlideText>
                        </Test>
                    </SwiperSlide>
                </Swiper>
            </SlideWrapper>
        </>
    )
}
const MainSecond = () => {
    return(
        <>
        <Title 
            title1={{title: "수지 실버 주야간보호센터", color:"red"}}
            title2={{title: "와 함께하세요", color:"black"}}
            subTitle={["월요일 ~ 일요일까지 365일 다양한 인지, 재활, 일상생활 프로그램으로", 
            "하루하루 건강하고 행복한 일상을 함께하세요"]}
        />
        <Slide/>
        <Button to="/counsel" text="주야간보호센터 상담 문의" />
       </>
    )
}

export default MainSecond;