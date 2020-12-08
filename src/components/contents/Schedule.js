import React from 'react';
import PropTypes from 'prop-types';
import styled from "styled-components";

const ScheduleWrapper = styled.div`
    width: 700px;
    display: flex;
    justify-content: center;
    margin: 0 auto;
    @media(max-width: 786px){
        width: 100%;
    }
`
const TimeBox = styled.div`
    width: 15%;
    display: grid;
    height: ${props => props.height};
    gap: 10px;
    grid-template-rows: repeat(${props => props.count}, 1fr);
    color: ${props => props.theme.mediumGrayColor};
    @media(max-width: 786px){
        display: none;
    }
`
const ScheduleBox = styled.div`
    width: 85%;
    display: grid;
    height: ${props => props.height};
    gap: 10px;
    grid-template-rows: ${props => props.grid};
    & > div {
        border: 2px solid ${props => props.theme.lightGrayColor};
        border-radius: 10px;
        width: 100%;
        display: flex;
    }
`
const ColorBox = styled.div`
    width: 15px;
    background-color: ${props => {
        switch (props.color){
            case "tempBlue":
                return `${props.theme.tempBlue}`;
            case "tempGreen":
                return `${props.theme.tempGreen}`;
            case "subPointColor":
                return `${props.theme.subPointColor}`;
            default :     
                return `${props.theme.subPointColor}`;  
        }
    }};
    position: relative;
    border-radius: 8px 0 0 8px;
`
const TypeBox = styled.div`
    width: 90%;
    padding-left: 30px;
    margin: 20px 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    & h5 {
        margin-bottom: 5px;
    }
`
const TimeActive = styled.h5`
    color: ${props => props.theme.mediumGrayColor};
    display: none;
    ${props => {
        if(props.active) {
            return `display: block`
        }
    }}
`
// ====================== style end ======================= //
const Schedule = ({className, times, contents, height}) => {
    const count = times.length + 1; 
    let grid = contents.map((content)=>(
        `${content.grid}fr`
    ));
    grid = grid.toString().replaceAll(","," ");
    return (
        <>
        <ScheduleWrapper className={className}>
            <TimeBox count={count} height={height.time}>
                {times.map((time, index)=>(
                    <div key={index}>{time}</div>
                ))}
            </TimeBox>
            <ScheduleBox grid={grid} height={height.schedule}>
                {contents.map((content, index)=>{
                    return(
                        <div key={index}>
                            <ColorBox color={content.color}></ColorBox>
                            <TypeBox>
                                <TimeActive active={true}>{content.time}</TimeActive>
                                <h5>{content.title}</h5>
                                <p>{content.type}</p>                
                            </TypeBox>                
                        </div>
                    )}
                )}
            </ScheduleBox>
        </ScheduleWrapper>
        </> 
        )
}
Schedule.propTypes ={
    times: PropTypes.array.isRequired,
    contents: PropTypes.array.isRequired,
    height: PropTypes.object.isRequired
}
export default Schedule;