import React from 'react';
import PropTypes from 'prop-types';
import styled from "styled-components";

const FlexWrapper = styled.div`
    text-align: center;
    /* padding: 50px 30px; */
    margin: 30px auto;
    width: 100%;  
`
const TextWrapper = styled.div`
    width: 100%;
    margin: 0 auto;
    margin-top: 30px;
        @media(max-width: 900px) {
            margin-top: 20px;
        }

    & h4 {
        font-family: 'NotoR';
    }

    @media(max-width: 900px) {
        width: 100%;
    }
`

const TitleText = styled.h2`
    color : ${(props) => props.color==="red" ? props.theme.pointColor : props.theme.blackColor};
    font-family : 'TB';
    display: inline;

    @media(max-width: 900px) {
        width: 100%;
    }
`

const Title = ({ className, title1, title2, subTitle}) => (
    <FlexWrapper className={className}>
        <TitleText color={title1.color}>{title1.title}</TitleText>
        <TitleText color={title2.color}>{title2.title}</TitleText>
        <TextWrapper>
            {subTitle && subTitle.map((subTitle, index) => (
                <h4 key={index}>{subTitle}</h4>
            ))}
        </TextWrapper>
    </FlexWrapper> 
);

Title.propTypes = {
    title1: PropTypes.object.isRequired,
    title2: PropTypes.object,
    SubTitle: PropTypes.arrayOf(PropTypes.string)
};

export default Title;