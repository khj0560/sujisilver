import React, { useState } from "react";
import styled, {css} from "styled-components";
import PropTypes from "prop-types"

const underLine = css`
    content: "";
    width: 100%;
    display: block;
    height: 5px;
    bottom: -7px;
    position: absolute;
    background-color: ${props => props.theme.pointColor};
    transform-origin: left;
    transform: scale(0);
    transition: 0.2s linear;
    left: 0;
`
const activeLine = css`
    transform: scale(1);
`
// ====================== css end ======================= //
const BtnWrapper = styled.div `
    width: 50%;
    ${props => {
        if(props.contentSize < 3) {
            return `width: 30%`
        }
    }};
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    text-align: center;
    padding: 10px 0;
    @media (max-width: 768px) {
        width: 80%;
        ${props => {
            if(props.contentSize < 3) {
                return `width: 50%`
            }
        }};
    }
    @media (max-width: 480px) {
        width: 100%;
        font-size: 16px;
        ${props => {
            if(props.contentSize < 3) {
                return `width:70%`
            }
        }};        
    }
`    
const Button = styled.button `
    background: none;
`
const H5 = styled.h5`
    font-family: 'NotoR';
    position: relative;
    border-bottom: 5px solid transparent;
    border-radius: 5%;
    transition: all 0.2s linear;
    color : ${props => props.theme.grayColor};

    &:before {
        ${underLine}
    }
    &:hover:before {
        ${activeLine};
    }
    &:hover{
        color: ${props => props.theme.pointColor};
    }
    ${props => {
        if(props.active) {
            return `
                color : ${props.theme.pointColor};
                font-family: 'NotoB';
                &:before {${activeLine}}
            `
        }
    }}
`
const Contents =styled.div`
    width: 100%;
    padding: 50px 0;
`
// ====================== style end ======================= //
const useTabs = (initialTab, allTabs) => {
    const [currentIndex, setCurrentIndex] = useState(initialTab);
    
    return {
        currentItem: allTabs[currentIndex],
        changeItem: setCurrentIndex,
        currentIndex: currentIndex
    }
}

const Tab = ({content}) =>{
    const {currentItem, changeItem, currentIndex} = useTabs(0, content);
    return(
        <>
        <BtnWrapper contentSize={content.length}>
            {content.map((section, index) => (
                <Button key={index} onClick={() => {changeItem(index)}} >
                    <H5 active={index === currentIndex ? true : false}>{section.tab}</H5>
                </Button>
            ))}
        </BtnWrapper>
        <Contents>
            {currentItem.content}
        </Contents>
        </>
    )
}

Tab.propTypes = {
    content: PropTypes.array.isRequired
};
export default Tab;